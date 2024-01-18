---
title: Simetrix를 이용한 차동 증폭기 설계
thumbnail: https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/differential_amplifier/tH0GYZZWd7ihC310Tvqx.png
layout: post
author: Sun Hong
categories:
  - Project
  - etc Project
tags:
  - circuit
excerpt: PMOS, NMOS를 이용한 차동 증폭기 설계
project_rank: "140"
sticker: emoji//1f9b4
---
![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/differential_amplifier/tH0GYZZWd7ihC310Tvqx.png)

# 1. 설계 주제

Simetrix를 이용한 증폭기를 설계

# 2. 설계 조건

1) 60dB 이상의 gain

2) 차동 입력, 단동 출력을 가지는 증폭기

3) 1mV, 1kHz의 ac 신호에 대한 출력 파형을 제시

4) VIN = 5v, 100uA 이하의 전류를 사용

# 3. 설계 과정

## 1) 차동증폭기를 이용하여 첫 번째 단을 설계

첫 번째 단은 1m Vpp 차동 입력을 주었고, VIN = 5V, 100uA 이하의 전류를 사용하였다. 또한, 전류 미러를 이용하여 회로 전체에 같은 전류를 안정적으로 이용할 수 있도록 하였다.

가장 먼저 차동 증폭기를 그림 1과 같이 구성하였다. 차동 증폭기의 출력을 단동 출력으로 뽑기 위해 차동증폭기 위해 전류 미러를 추가해 주었다.

![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/differential_amplifier/xCy7l5WCuYy9Tb64wDoL.png)

<center>그림 1 차동 증폭기</center>

그 후 바이어스를 잡아주기 위해 V4 전압을 Sweep했을 때의 출력 파형을 관찰했다. 그림 2는 V4대비 출력 전압의 그래프이다.

![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/differential_amplifier/E34quUG5b9cEbxE0jwFO.png)

<center>그림 2 V4 전압을 Sweep했을 때의 출력 파형</center>

출력 파형을 봤을 때, 증폭할 수 있는 범위를 확인할 수 있었다. 그림 2의 그래프에서 증폭할 수 있는 범위는 약 4.3V ~ 4.5V이다. 중요한 점은 DC가 약 4.4V로 형성되어 있는데, 나중에 2번째 단의 증폭기와 연결했을 때 이 전압으로 2번째 증폭기가 bias하게 된다. 이 전압이 높게 되면 2번째 증폭기의 bias 구간에 못 들어올 수 있는 가능성이 있다. 그렇기 때문에 DC전압을 낮춰주기 위해 상단에 저항을 추가하였고 bias를 안정화시켜주기 위해 하단에 저항을 달았다.

![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/differential_amplifier/g48HKDc2A81aFyUDaEw7.png)

<center>그림 3 V3 전압을 Sweep했을 때의 출력 파형 (저항 추가시)</center>

그림 3은 저항을 추가했을 때의 V3 전압을 Sweep했을 때의 출력 파형이다. 그래프의 기울기가 감소하여 증폭률은 낮아졌지만, 입력의 범위가 넓어져서 bias가 안정적으로 변하였고 출력 DC전압이 감소했음을 알 수 있다.

이 상태에서 bias지점을 잡아주었다. 가운데 지점은 input이 1.06V이고, 출력은 약 3V지점이다.

![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/differential_amplifier/4yIXOELHn730zvPKBWoN.png)

<center>그림 4 bias 지점 잡기</center>

그림 5는 완성된 첫 번째 단의 증폭기과 출력 파형이다. 이때 42.8dB정도의 이득을 얻을 수 있다. 차동 증폭기의 common mode 전압은 입력 전압인 5V를 저항으로 분배한 후 인가해줬다. 설계에서 요구하는 이득은 60dB정도로 뒤에 추가로 증폭기를 달아주어 증폭을 높여주었다.

![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/differential_amplifier/WQC4hQl996W3nFt3HXbp.png)

<center>그림 5 완성된 첫 번째 단의 증폭기와 출력 파형</center>

## 2) 소스 결합 증폭기를 이용하여 두 번째 단을 설계

두 번째 단의 증폭기는 소스 결합 증폭기를 사용하였다. 소스 결합 증폭기는 CS를 두 개를 결합해 사용한다. CS는 Souce를 ac적으로 가상 접지를 해주어야 하는데, 이때 커패시터를 사용한다. 하지만 커패시터보다는 가상 접지를 만들기 위해 소스 결합 증폭기를 사용하는 편이 좋으므로, 소스 결합 증폭기를 사용하여 설계하였다.

우선 CS증폭기에 흐르는 전류를 맞춰주기 위해서, bias를 안정적으로 하는 저항을 달아주었다. 이 저항의 크기는 저항을 sweep하여 흐르는 전류의 그래프를 통해 선택할 수 있었다. 그림 6은 이 그래프를 나타낸다. 전류가 10μA 흐르는 지점의 저항값을 구하였고 약 172.5k라는 값을 얻을 수 있었다.

![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/differential_amplifier/C5XTikh8FBDqALZsXYZJ.png)

<center>그림 6 저항 R1대비 전류 그래프</center>

그 후에 출력을 만들기 위해 CS위에 저항을 달아주었다. 이 저항도 값을 선정하기 위해 저항을 sweep하고 출력 전압의 그래프를 그림 7과 같이 구하였다. 출력 전압이 약 3V위에서 swing할 수 있도록 200k로 R8 저항을 선정하였다. 그 후에 그림 8과 같이 CS를 소스 결합 증폭기로 변환해 주었다. 이때 저항을 하나로 합쳐주니, R1이 245k되었다.

또한, 입력 DC전압인 3.02V를 오른쪽에서도 똑같이 인가해 주었다.

여기까지가 안정적으로 출력을 얻을 수 있는 범위에 있는 증폭기를 설계한 것이다. 하지만 출력의 이득이 높을수록 더욱 고성능의 증폭기이므로 파형이 찌그러지지 않는 범위 내에서 출력 저항을 늘렸다. 즉, 증폭할 수 있는 전압의 최대 범위에 가깝게 설계하였다. 이때의 R4는 350k를 선정하였다.

물론, 증폭할 수 있는 최대 범위에 가깝게 선정하게 되면, 노이즈에 의해 입력 파형의 크기가 변동되면서 범위를 넘어가 안정성이 떨어질 수 있는 문제를 가진다. 하지만 이번 설계의 목적을 증폭기로부터 큰 증폭률을 얻는 데 두었기 때문에, 안정성보다는 큰 증폭을 얻기 위해 R4는 350k를 선정하였다.

그림 8은 완성된 증폭기의 설계도이며 이에 대한 출력 파형을 설계 결과에 첨부하였다.

![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/differential_amplifier/99xo0au2EgxlAld0VNAf.png)

<center>그림 7 저항 R8대비 전류 그래프</center>

![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/differential_amplifier/q09YkUIRJd1zC34fah8v.png)

<center>그림 8 최종 설계 회로</center>

# 4. 설계 결과

## 1) 입력 파형

![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/differential_amplifier/wzhyUt9sHRWkjwksH6XE.png)

<center>그림 9 입력 파형</center>

## 2) 출력 파형

![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/differential_amplifier/HXUYxCFPV2Ah89vndebG.png)

최종 설계 결과 65.83dB의 gain을 얻었고 설계 조건인 60dB이상으로 조건을 만족했다.

![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/differential_amplifier/zQLSafgTDdnmchZNzigv.png)

# 5. 고찰

차동 입력, 단동 출력을 갖는 증폭기를 60dB이상의 이득을 갖는 조건하에 설계하였다. 첫 번째 단의 증폭기는 active load를 갖는 차동 증폭기로 설계하였으며, 두 번째 단은 소스 결합 증폭기를 사용하였다. 그 결과 입력 신호가 1m Vpp일 때, 출력신호가 1.96Vpp를 갖는 증폭기를 설계할 수 있었다. 이때의 이득은 65.83dB로 조건의 60dB이상의 조건을 만족하였다.

무엇보다 이번 설계를 진행하면서 전자회로2에서 배운 차동증폭기와 기본적인 증폭기의 bias 설계에 대한 이해도가 높아졌다.

