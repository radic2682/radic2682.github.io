---
title: "[C++] 자료구조 정리"
thumbnail: https://github.com/radic2682/radic2682.github.io/assets/11177959/26a61450-2e65-4e16-bed1-c1a6446d0da2
layout: post
author: Sun Hong
categories:
  - Study
  - C & CPP
tags: 
excerpt: C++에서 사용 가능한 자료구조 정리
sticker: emoji//1f359
---
![image](https://github.com/radic2682/radic2682.github.io/assets/11177959/26a61450-2e65-4e16-bed1-c1a6446d0da2)

# 1. 자료 구조란?

`자료 구조(Data Structure)`란 데이터를 조직화하고 저장하는 방법을 말합니다. 즉, <u>데이터를 효과적으로 관리하고 사용하기 위한 구조와 알고리즘</u>이라고 할 수 있습니다.

자료 구조를 선택하는 기본적인 목표는 데이터에 대한 효율적인 연산을 가능하게 하면서, 메모리 공간을 효율적으로 사용하는 것입니다. 즉, <u>특정 연산(삽입, 삭제, 검색 등)을 효율적으로 수행</u>하고, 데이터에 대한 특정한 패턴에 따라 구성된 <u>메모리를 최적으로 활용할 수 있도록 설계</u>됩니다.

자주 사용되는 자료 구조에는 배열, 리스트, 스택, 큐, 트리, 그래프, 해시 테이블 등이 있습니다. 각각의 자료 구조는 특정한 용도에 맞게 선택되며, 알고리즘을 효율적으로 구현하는 데 도움을 줍니다.

# 2. C++에서의 자료구조?

## 1) 배열
고정된 크기의 요소를 가지는 선형 자료구조입니다.

```cpp
#include <array>

std::array<int, 5> myArray = {1, 2, 3, 4, 5};
```

## 2) 동적 배열 (Dynamic Array) => 벡터
크기가 동적으로 조절 가능한 선형 자료구조입니다.

```cpp
#include <vector>

std::vector<int> myVector = {1, 2, 3, 4, 5};
```

## 3) 리스트 (List)
노드들이 연결된 선형 자료구조입니다.

```cpp
#include <list>

std::list<int> myList = {1, 2, 3, 4, 5};
```

## 4) 큐 (Queue)
선입선출(FIFO) 구조를 가지는 자료구조입니다.

```cpp
#include <queue>

std::queue<int> myQueue;
myQueue.push(1);
```

### 5) 스택 (Stack)
후입선출(LIFO) 구조를 가지는 자료구조입니다.

```cpp
#include <stack>

std::stack<int> myStack;
myStack.push(1);
```

## 6) 세트 (Set)
중복을 허용하지 않는 정렬된 자료구조입니다.

```cpp
#include <set>

std::set<int> mySet = {1, 2, 3, 4, 5};
```

## 7) 맵 (Map)
중복을 허용하지 않는 정렬된 자료구조입니다.

```cpp
#include <map>

std::map<std::string, int> myMap;
myMap["one"] = 1;
```

# 3. C vs. C++ 동적할당 비교

C 언어에서 동적 할당은 malloc, calloc, realloc, free와 같은 함수들을 사용하여 수행됩니다.

> **동적 할당**  
> 프로그램 실행 중에 메모리를 할당하고 해제하는 과정을 말합니다.

저는 C에서 malloc()을 이용하여 동적하는 것보다 C++에서 vector를 이용하는 게 너무 좋습니다 :)

## C에서 사용 예시
---

```cpp
#include <stdio.h>
#include <stdlib.h>

int main() {
    // 동적으로 정수형 배열 할당
    int *dynamicArray = (int *)malloc(5 * sizeof(int));

    if (dynamicArray == NULL) {
        printf("메모리 할당에 실패했습니다.\n");
        return 1;
    }

    // 할당된 배열에 값 할당
    for (int i = 0; i < 5; ++i) {
        dynamicArray[i] = i * 2;
    }

    // 할당된 배열의 값 출력
    for (int i = 0; i < 5; ++i) {
        printf("%d ", dynamicArray[i]);
    }
    printf("\n");

    // 할당된 메모리 해제
    free(dynamicArray);

    return 0;
}
```

## C++에서 사용 예시 (new, delete 연산자 이용)

---

```cpp
#include <iostream>

int main() {
    // 동적으로 정수형 배열 할당
    int *dynamicArray = new int[5];

    // 할당된 배열에 값 할당
    for (int i = 0; i < 5; ++i) {
        dynamicArray[i] = i * 2;
    }

    // 할당된 배열의 값 출력
    for (int i = 0; i < 5; ++i) {
        std::cout << dynamicArray[i] << " ";
    }
    std::cout << std::endl;

    // 할당된 메모리 해제
    delete[] dynamicArray;

    return 0;
}
```

## C++에서 사용 예시 (vector 이용)

---

```cpp
#include <iostream>
#include <vector>

int main() {
    // 동적으로 정수형 배열을 할당하고 초기화
    std::vector<int> dynamicVector(5);

    // 할당된 배열에 값 할당
    for (int i = 0; i < 5; ++i) {
        dynamicVector[i] = i * 2;
    }

    // 할당된 배열의 값 출력
    for (int i = 0; i < 5; ++i) {
        std::cout << dynamicVector[i] << " ";
    }
    std::cout << std::endl;

    // vector는 자동으로 메모리를 관리하므로 별도의 해제 작업이 필요하지 않음

    return 0;
}
```
