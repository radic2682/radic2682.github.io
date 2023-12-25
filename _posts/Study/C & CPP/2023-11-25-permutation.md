---
title: "[C++] 재귀함수로 순열 구현하기"
thumbnail: https://github.com/radic2682/radic2682.github.io/assets/11177959/4ef97b00-78fa-4fb2-8568-660eed6efc2e
layout: post
author: Sun Hong
categories:
  - Study
  - C & CPP
tags: 
excerpt: C++에서 재귀함수로 순열 구현하기
sticker: emoji//1f359
use_math: "true"
---
![image](https://github.com/radic2682/radic2682.github.io/assets/11177959/4ef97b00-78fa-4fb2-8568-660eed6efc2e)

# 1. 순열이란?

`순열(Permutation)`은 <u>집합의 원소들을 나열하는 모든 가능한 방법</u>을 의미합니다.

예를 들어, {1, 2, 3}이라는 세 개의 원소로 이루어진 집합이 있다면, 이 집합의 순열은 {1, 2, 3}, {1, 3, 2}, {2, 1, 3}, {2, 3, 1}, {3, 1, 2}, {3, 2, 1}과 같이 <u>6가지</u>가 됩니다.

수학적으로 순열은 <u>n개의 서로 다른 원소에서 r개를 선택하여 나열하는 경우의 수</u>를 나타내는데, 이를 `nPr` 또는 `P(n, r)`로 표기합니다. nPr은 다음과 같이 계산됩니다:

$nPr = {n!\over (n - r)!}$

# 2. C++로 나타낸 순열

```cpp
#include <bits/stdc++.h>
using namespace std;

vector<int> v = {1, 2, 3};

void swap(int& a, int& b){
    int temp = a;
    a = b;
    b = temp;
}

void printVector(){
    cout << "Permutation: ";
    for (int i : v) cout << i << " ";
    cout << endl;
}

void makePermutation(int n, int r, int depth){
    // cout << n << " " << r << " " << depth << '\n';
    if(r == depth){
        printVector();
        return;
    }
    for (int i = depth; i < n; i++){
        swap(v[i], v[depth]);
        makePermutation(n, r, depth + 1);
        swap(v[i], v[depth]);
    }
}

int main(){
    makePermutation(3, 3, 0);
    return 0;
}
```

- `n`은 <u>순열을 생성할 대상의 크기</u>입니다.
- `r`은 <u>현재까지 생성한 순열의 길이</u>입니다.
- `depth`는 현재 순열이 어디까지 완성되었는지를 나타냅니다.

깊이 r에 도달하면 현재의 순열을 출력하고 반환합니다. 그렇지 않으면, 현재 위치 depth부터 마지막 위치까지의 각 요소를 한 번씩 선택하여 재귀적으로 순열을 생성합니다.

## 실행 결과
---

![image](https://github.com/radic2682/radic2682.github.io/assets/11177959/e52f82f1-5fa1-4d90-8332-40df4a462061)

# 3. 도식도

![image](https://github.com/radic2682/radic2682.github.io/assets/11177959/40e213f3-4c5b-4a93-a5fa-0494cd994725)
