---
title: "[인공지능 가속기 설계] Artificial Intelligence Accelerator Design (Using Zynq-7000 FPGA, CDMA, AXI)"
thumbnail: "/assets/images/ai_accelerator.png"

layout: post
author: Sun Hong

categories:
    - Project
    - Hardware Project

tag: [tag1, tag2, tag3]

excerpt: "AI 가속기 설계를 어쩌구 저쩌구"
---

---

이미지

---

## 1\. Topic

> 주제 선정  
> : 인공지능 연산을 빠르게 수행할 수 있는 AI HW 가속기 설계

인공지능 가속기는 인공지능(AI) 알고리즘의 계산 과정을 가속화시키는 역할을 합니다. AI는 대량의 데이터를 처리하고, 복잡한 작업을 수행하기 때문에 막대한 계산 능력이 필요합니다. 하지만 일반적인 CPU나 GPU만으로는 이런 계산을 효율적으로 처리하기 어렵습니다.  




이 때문에 AI 가속기가 필요합니다. AI 가속기는 AI 작업에 특화된 하드웨어로, 더 높은 성능과 더 낮은 에너지 소비를 가능하게 합니다. 이는 AI 알고리즘의 훈련과 추론 시간을 크게 단축시키며, AI 응용 프로그램의 성능을 향상시킵니다. 따라서 AI 가속기는 AI의 발전과 활용에 있어 필수적인 요소입니다.


[출처](http://www.techfrontier.kr/?p=2802)

## 2\. Design Flow



\- CNN과 FC 연산을 수행할 수 있는 kernel을 포함한 **CORE**를 설계 후, **MOVER**를 통해 데이터를 이동할 수 있도록 설계하였습니다. 이 과정에서 각각의 CORE와 MOVER의 검증을 해주었습니다.

\- 이렇게 설계된 CNN, FC CORE와 MOVER를 합쳐, 하나의 **Accelerator**로 합쳐줍니다. 이때, HW 컨트롤을 할 수 있도록 **AXI-lite**를 사용하였고 Memory Map을 이용하여 제어할 수 있습니다.

\- 설계한 Accelerator IP를 활용하여, Block Design으로 System을 구축하여 줍니다.

\- 그 후, **SW driver**를 설계하여, 설계한 HW가 동작할 수 있도록 코드를 구현합니다.

   (설계된 HW와 Golden Model의 결과를 비교하여 완벽히 설계되었는지 검증하였습니다.)

## 3\. HW System



\- **Zynq** : XILINX사에서 만든 FPGA 칩으로, PS와 PL영역을 이용할 수 있습니다. PS영역은 프로세서로 Cortex 프로세서를 이용할 수 있습니다. PL영역은 사용자가 기술한 HW를 구현할 수 있는 영역입니다.

\- **AXI4** : IP들 사이에서 통신을 담당하는 프로토콜입니다.

\- **BRAM** : 연산에 필요한 데이터를 저장할 수 있는 buffer입니다.

\- **BRAM Controller** : BRAM을 읽고 쓸 수 있는 인터페이스를 제공하는 IP입니다.

\- **CDMA** : DDR Memory로부터 BRAM으로 데이터를 옮기기 위해 사용하였습니다. CDMA에게 명령을 내리면 시스템 프로세서 처리와 별개로 데이터를 옮겨주며, AXI 프로토콜을 사용하여 데이터를 옮겨줍니다. CDMA의 데이터 이동이 종료되면 Interrupt를 통해 알 수 있습니다.

\- **Accelerator** : 직접 설계한 가속기의 IP로 AXI-lite를 통해 제어할 수 있습니다.

## 4\. HW Processing

설계한 System의 동작 과정입니다.



## 5\. Accelerator Scheme

설계한 Accelerator IP의 상세 구조에 대한 설명입니다.



### 1) Memory Map

설계한 Accelerator는 AXI-lite 내부의 Register에 값을 쓰고 읽음으로써 제어할 수 있습니다.



\- **0X0** : Control Register로 CNN/FC CORE에 동작 명령을 줄 수 있습니다.

\- **0X4** : Status Register로 CNN CORE의 동작을 확인할 수 있습니다.

\- **0X8** : Status Register로 FC CORE의 동작을 확인할 수 있습니다.

### 2) CNN Core/Data Mover

#### \# CNN CORE

일반적으로 CNN연산을 수행하는데 있어서, Input Feature Map은 3x3보다 큰 구조를 가지고 있습니다. 아래의 그림이 그 구조를 보여주고 있습니다.



위와 같은 모델을 예시로 들면 28x28 크기의 Input Feature Map을 가지고 있다. 이러한 큰 모델을 돌릴 수 있는 가속기가 존재하고 설계할 수 있으나, FPGA의 리소스가 굉장히 많이 필요하다는 단점이 존재합니다. 그렇기 때문에 보통 CNN CORE라고 하는 가속기를 설계하고 이 CORE를 여러번 재사용하여 리소스의 효율을 높이는 방법을 사용합니다.

CORE는 HW로 구성되어 FPGA의 PL 영역에서 연산을 수행한다. 이러한 CORE 구조의 예시는 아래 그림과 같습니다.



위 CORE는 이번에 우리가 설계한 CORE이며, 원하는 방향성에 따라서 그 구조를 변경할 수 있다. 이번에 설계한 CORE의 구조는 3x3 연산을 수행할 수 있는 구조를 가지고 있습니다. 그리고 이 연산은 HW로 구성되어 FPGA의 PL 영역에서 연산을 수행합니다. 그렇다면 3x3보다 큰 Input Feature Map은 돌릴 수 없는가?라는 질문에 대해서는 그렇지 않다고 답하고 싶습니다. 만약 5x5 크기의 Input Feature Map가 필요하다면 3x3 연산을 수행하는 CORE를 9번 SW 영역에서 잘라서 넣어주면 됩니다.

설계한 CORE의 구조에 대해서 설명을 하자면, 먼저 3x3 Input Feature Map과 3x3 Weight를 서로 곱합니다. 그렇게 되면 3x3의 결과가 나오는데 이를 누적 덧셈을 해줍니다. 여기까지가 kernel의 동작입니다. 즉, kernel은 곱하고 누적 덧셈을 해줍니다. 이러한 kernel을 CORE의 OUTPUT 개수만큼 병렬로 계산을 해줍니다. 위와 같은 그림의 예에서는 곱하고 누적 덧셈하는 과정이 32번 병렬적으로 수행된다고 할 수 있습니다. 이러한 병렬 계산을 수행한 뒤, Bias를 더하고 활성함수를 통과하는 과정을 거쳐 CORE의 연산이 끝납니다. (이번에 설계한 CORE에서 활성함수는 사용되지 않았습니다.)

(Note) 본 포스팅에서는 코드를 제공하지 않습니다. \_\_

---

#### Test Bench



#### \# CNN Data Mover

CNN CORE를 단독으로 사용할 수는 없습니다. 이 이유는 CNN CORE는 BRAM으로부터 데이터를 읽고 쓸 수 있는 인터페이스가 없기 때문입니다. 그렇기 때문에 BRAM으로부터 데이터를 읽고 쓸 수 있는 인터페이스를 가진 DATA MOVER가 필요합니다. 이러한 DATA MOVER와 CORE를 연결하고 포함한 모듈이 이번에 설계할 CNN CORE MOVER입니다. 아래는 설계한 CNN CORE MOVER의 구조를 보여주고 있습니다.



RUN 신호가 들어오면 HW가 작동한다.

MOVER는 5가지 상태를 갖습니다. IDLE, DATA\_Processing, RUN, WRITE, DONE의 상태를 갖습니다. HW로 구현하기 위해 각 상태를 천이시키는 FSM을 설계하였습니다. 각 상태에서의 동작은 다음과 같습니다.

\- **IDLE**  : 대기 상태

\- **DATA\_Processing** : CORE에 데이터를 한번에 넣어주기 위해 DATA를 BRAM에서 가져와 Buffer에 넣어주는 상태

\- **RUN** : CORE가 동작하는 상태 (CNN 계산을 수행)

\- **WRITE** : CORE가 계산한 결과를 다시 BRAM에 쓰는 상태

\- **DONE** : 모든 동작이 완료되었음을 알려주는 상태

---

#### Test Bench







### 3) FC Core/Data Mover

#### \# FC CORE
