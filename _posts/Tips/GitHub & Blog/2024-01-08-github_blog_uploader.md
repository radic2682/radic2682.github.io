---
title: 깃허브 블로그 이미지 업로드 프로그램 [ GitHub As a CDN ]
thumbnail: https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/github_blog_uploader/DFcpeC2zldPwOysMIG7t.png
layout: post
author: Sun Hong
categories:
  - Tips
  - GitHub & Blog
tags:
  - python
excerpt: GitHub As a CDN를 연동한 깃허브 블로그 이미지 업로드 프로그램
sticker: emoji//1f359
use_math: "true"
---
제가 직접 제작한 프로그램으로 `Python`을 사용합니다.

먼저, 아래의 게시물로 가서 `GitHub As a CDN`가 설정된 상태여야 합니다.

[게시물](https://radic2682.github.io/tips/github%20&%20blog/2024/01/01/github_blog_cdn.html)

# 1. 모듈 설치
Python에서 사용하는 모듈은 아래와 같습니다. 터미널에 입력해서 설치해주세요.

```
pip install requests
pip install Pillow
pip install pyperclip
```

# 2. 프로그램 다운로드 및 기본 설정
아래 Github 링크로 가서 `main.py`를 받아줍니다.

[다운로드](https://github.com/radic2682/github_img_uploader_python.git)

## json 파일 생성
`main.py` 파일을 파이썬 실행 환경에서 실행해줍니다.
그러면 아래와 같은 문구가 나오고 `main.py`가 있는 폴더에 `personal_data.json`파일이 생성됩니다.

![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/github_blog_uploader/MNZX0gaJuDOrrCtkw1Ds.png)

![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/github_blog_uploader/ePa2gaz9FberFxP7ouQ9.png)

## json 파일 수정
`personal_data.json`파일 내부
![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/github_blog_uploader/MZFpbHOIGL70xyR8L42l.png)

`github_user_name` : 깃허브 닉네임
`github_token` : 깃허브에서 발급한 토큰 ( 구글에 깃허브 토큰을 검색하시면 방법이 나옵니다.)
`gaac_repo_name` : 사진을 업로드 하고 싶은 repository로 <u>GitHub As a CDN에서 선택한 repository로 반드시 해야 합니다.</u>

# 3. 사용 방법
위에서 설정을 마쳤으면, 사용할 준비가 되었습니다~

`main.py` 파일을 파이썬 실행 환경에서 다시 실행해줍니다.

## 폴더 선택

![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/github_blog_uploader/DFcpeC2zldPwOysMIG7t.png)

위와 같이 지정한 repository의 폴더를 전부 보여주는데, 원하는 폴더를 `숫자`로 선택해줍니다.

## 업로드

![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/github_blog_uploader/CKpKUrAkVXNjnY2R0x6T.png)

그러면 위와 같이 나오게 됩니다.

두 가지 사용 방법이 있습니다.

- 스크린샷을 찍고 Enter!
- 원하는 파일을 Crtl + C한 후 Enter!

원하는 이미지를 복사한 경우, 여러 개를 한번에 올리는 기능도 지원합니다.

## 결과 사용

![[Pasted image 20240108233936.png]]

그러면 위와 같이 업로드가 완료되었다는 말이 뜨게 됩니다.
이미지를 저장한 경로가 뜨며, <u>자동으로 복사</u>됩니다. ( 아무 곳에 붙여 넣으세요. )

=> 이때, 복사된 경로는 마크다운 형식으로 복사되어 바로 붙여넣으면 됩니다 :)

=> 결과가 뜨고 대기 상태가 되어, 계속해서 이미지를 업로드 할 수 있습니다~^^






