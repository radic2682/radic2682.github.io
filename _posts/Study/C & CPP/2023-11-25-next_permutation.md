---
title: "[C++] next_permutation() 함수"
thumbnail: https://github.com/radic2682/radic2682.github.io/assets/11177959/b463a99f-9d14-4876-b4f9-41a7075a13e5
layout: post
author: Sun Hong
categories:
  - Study
  - C & CPP
tags: 
excerpt: C++에서 next_permutation() 함수
sticker: emoji//1f359
---
![image](https://github.com/radic2682/radic2682.github.io/assets/11177959/b463a99f-9d14-4876-b4f9-41a7075a13e5)

# 1. next_permutation() 함수

`std::next_permutation` 함수는 C++ 표준 라이브러리에서 제공하는 함수로, <u>순열을 생성하거나 다음 순열로 변경하는 데 사용</u>됩니다. 이 함수는 <u>주어진 범위의 순열을 다음 순서의 순열</u>로 변경합니다.

```cpp
template <class BidirectionalIt>
bool next_permutation(BidirectionalIt first, BidirectionalIt last);
```

`- first`: 순열의 시작을 가리키는 반복자
`- last`: 순열의 끝을 가리키는 반복자

## 작동 과정

1. first와 last 사이의 범위에 있는 요소들의 순열을 다음 순서의 순열로 변경합니다.
2. 변경에 성공하면 **true**를 반환하고, 더 이상 다음 순열이 없으면 **false**를 반환합니다.
3. 변경된 순열은 first와 last 사이에 저장됩니다.

# 2. 사용 예시

```cpp
#include <bits/stdc++.h>
using namespace std;

int main(){
    vector<int> example = {2, 1, 4};

    sort(example.begin(), example.end());

    do{
        for (int i : example)
            cout << i << " ";
        cout << '\n';
    } while (next_permutation(example.begin(), example.end()));
}
```

`vector<int> example = {2, 1, 4};`
-> 벡터를 선언합니다.

`sort(example.begin(), example.end());`
-> 벡터를 순서에 맞게 정렬합니다.

> `> sort()`
> std::sort 함수는 \[first, last) 범위에 있는 요소들을 정렬합니다.  
> ( 범위는 \[first, last)로 지정되어 있으므로 last는 실제로 정렬에 포함되지 않습니다. )

`for (int i : example)`
-> 벡터 example에서 하나씩 꺼내어 루프를 돌려줍니다.

`while (next_permutation(example.begin(), example.end()))`
-> 순서 변경에 성공하면, while문을 계속 수행하게 됩니다.

## Result
---
![image](https://github.com/radic2682/radic2682.github.io/assets/11177959/f1e201dc-b2b2-4910-b31e-afb199446ad9)


