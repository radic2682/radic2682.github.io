---
title: "[C++] 재귀함수/다중 for문으로 조합 구현하기"
thumbnail: https://github.com/radic2682/radic2682.github.io/assets/11177959/ff9eab70-28dc-45a3-8e9c-c657a3b8b23f
layout: post
author: Sun Hong
categories:
  - Study
  - C & CPP
tags: 
excerpt: C++에서 재귀함수/다중 for문으로 조합 구현하기
sticker: emoji//1f359
use_math: "true"
---
![image](https://github.com/radic2682/radic2682.github.io/assets/11177959/ff9eab70-28dc-45a3-8e9c-c657a3b8b23f)

# 1. 조합이란?

`조합`은 <u>요소들을 특정한 순서없이 선택하여 그 부분 집합을 만드는 것</u>을 의미합니다. 조합은 순서가 중요하지 않은 경우에 사용됩니다.

<u>ex. A, B, C의 모든 조합은 AB, AC, BC</u>

n개의 요소에서 r개를 선택하여 나열하는 경우의 수는 다음과 같이 표현됩니다.

$nPr = {n!\over r!(n - r)!}$

# 2. C++로 나타낸 조합

## 1) 재귀 함수 이용

```cpp
#include <iostream>
#include <vector>

using namespace std;

void combination(int start, vector<int> v, int n, int k) {
    if (v.size() == k) {
        for (int i : v) {
            cout << i << " ";
        }
        cout << endl;
        return;
    }

    for (int i = start + 1; i < n; i++) {
        v.push_back(i);
        combination(i, v, n, k);
        v.pop_back();
    }
    return;
}

int main() {
    int n = 5; // 전체 요소의 개수
    int k = 3; // 조합의 크기
    vector<int> v;
    
    combination(-1, v, n, k);

    return 0;
}
```

`n`은 <u>전체 요소의 개수</u>이고, `k`는 <u>조합의 크기</u>입니다.

1. 만약 현재 선택된 요소들의 개수가 <u>k와 동일하다면, 현재 조합을 출력하고 함수를 종료</u>합니다.
2. 그렇지 않은 경우, start 다음 인덱스부터 끝까지의 <u>요소를 하나씩 선택하여 v에 추가</u>한 후, <u>재귀적으로 함수를 호출</u>합니다.
3. 재귀 호출이 끝나면, 마지막에 선택한 요소를 <u>v에서 제거하여 이전 상태</u>로 돌아갑니다.

!! 여기서 나온 조합수들은 `Index`로 사용될 수 있습니다.

## 실행결과
---

![image](https://github.com/radic2682/radic2682.github.io/assets/11177959/42011fba-72ba-4551-88d4-267c415fe1c6)

## 2) for 다중루프 이용

```cpp
#include <bits/stdc++.h>
using namespace std;

int n = 5;
int k = 3;

int main() {
    for(int i = 0; i < n; i++){
        for(int j = i + 1; j < n; j++){
            for(int k = j + 1; k < n; k++){
                cout << i << " " << j << " " << k << '\n';
            }
        }
    }
    return 0;
}
```



