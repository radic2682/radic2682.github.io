---
title: 5-Stage Pipelined Processor (RISC-V)
thumbnail: https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/5-Stage_Pipelined_Processor/292766748-a9282af8-8e2e-4a0f-a95a-2e89324b9f36.png
layout: post
author: Sun Hong
categories:
  - Project
  - Hardware Project
tags:
  - verilog
  - C
excerpt: Hazard를 고려한 5-stage Pipelined Processor 설계
project_rank: "800"
sticker: emoji//1f4aa
---
![image](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/5-Stage_Pipelined_Processor/292766748-a9282af8-8e2e-4a0f-a95a-2e89324b9f36.png)

위 그림은 5-stage pipeline을 표현한 도식도로 제가 직접 그렸습니다.
( <u>출처를 분명히 남겨주세요 :)</u> )

# 1. 개요
RISC-V의 `RV32I`에 명시된 명령어를 모두 구현하였고, 5Stage Pipeline과 `Hazard detection unit` / `Forwarding unit` 또한, 구현하였습니다.

코드는 verilog로 구현하였고, Waveform은 <u>linux - GTK Wave</u>를 사용하였습니다.

# 2. Waveform
REG와 MEM의 데이터를 확인함으로써, RISC-V의 instruction을 잘 수행하고 있음을 알 수 있습니다. Instruction은 머신 코드로 변환하여 Instruction 메모리에 저장하였습니다.

![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/5-Stage_Pipelined_Processor/nQxR5fttCBUy8ZsZ8HRd.png)

![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/5-Stage_Pipelined_Processor/YEX58SJSJ4yl5M4CHU0a.png)

![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/5-Stage_Pipelined_Processor/UqHXQXlKDpt4w26eGOYA.png)

![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/5-Stage_Pipelined_Processor/akvHq7Dk9mWk9NHXrubz.png)

![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/5-Stage_Pipelined_Processor/01qRvDfTHIzpMtySMPiE.png)

![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/5-Stage_Pipelined_Processor/LY8vNzCI871NKF9Qm9t7.png)







