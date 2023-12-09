---
title: "올 마크 다운"
thumbnail: "/assets/images/ai_accelerator.png"

layout: post
author: Sun Hong

categories:
    - Study
    - GIT

tag: [tag1, tag2, tag3]

excerpt: "AI 가속기 설계를 어쩌구 저쩌구"
---

# Heading 1
## Heading 2
### Heading 3
#### Heading 4

*Italics*
_This will also be italic_
**Bold text**
__This will also be bold__
***Bold and Italics***
_You **can** combine them_
~~Striked Text~~
***~~Italic, bold, and strikethrough1~~***

&nbsp;
- a
- b
- **c**

<br>
&nbsp;
&nbsp;

이거 사용 X  ---------- 

* Item 1
* Item 2
* Item 1
* Item 2

1. First
2. jhg


이거 사용 X  ---------- 

# Heading 1
[Example document](/example/example.md)

&nbsp;

[example](./example)

&nbsp;
![Octocat](https://user-images.githubusercontent.com/81953271/124010886-b571ca80-d9df-11eb-86ac-b358c48ac6aa.png "Github logo") 

![Octocat](https://user-images.githubusercontent.com/81953271/124010886-b571ca80-d9df-11eb-86ac-b358c48ac6aa.png "Github logo"){: width="60%"}  
  
|Header1|Header2|Header3|
| --- | --- | --- |
| This | is a | table |
| This | is 2nd | row |
| This | is 3rd | row |


scasascasvasavascasascasvasavascasascasvasavascasascasvasavascasascasvasavascasascasvasavascasascasvasavascasascasvasavascasascasvasavascasascasvasavascasascasvasavascasascasvasavascasascasvasavascasascasvasavascasascasvasavascasascasvasavascasascasvasavascasascasvasavascasascasvasavascasascasvasavascasascasvasavascasascasvasava

&nbsp;

> 이것은 BlockQuote 입니다.
> 이것은 BlockQuote 입니다.
>> 이것은 BlockQuote 입니다.
>> 이것은 BlockQuote 입니다.
>> 이것은 BlockQuote 입니다.
>>> 이것은 BlockQuote 입니다.
>>> 이것은 BlockQuote 입니다.
>>> 이것은 BlockQuote 입니다.
>>> 이것은 BlockQuote 입니다. 이게 인식이 안돼


```python
   # This program adds up integers in the command line
import sys
try:
    total = sum(int(arg) for arg in sys.argv[1:])
    print 'sum =', total
except ValueError:
    print 'Please supply integer arguments'
```







