---
title: 깃허브 블로그 이미지 로딩 속도 개선하기 [ GitHub As a CDN ]
thumbnail: https://gaac.vercel.app/assets/images/mascot.png
layout: post
author: Sun Hong
categories:
  - Tips
  - GitHub & Blog
tags: 
excerpt: GitHub As a CDN을 사용해서 블로그 이미지 로딩 속도 개선
sticker: emoji//1f359
use_math: "true"
---
깃허브 블로그에 기본적으로 올리는 이미지는 로딩 속도가 느린 문제점이 있습니다. 이 문제는 CDN이라는 캐싱 기술로써 해결할 수 있고, 이를 편하게 도와주는 사이트가 있어서 소개할까 합니다.

# GitHub As a CDN
아래 사이트로 접속하여 줍니다.

[GitHub As a CDN](https://gaac.vercel.app/)

![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/%EA%B9%83%ED%97%88%EB%B8%8C%20%EB%B8%94%EB%A1%9C%EA%B7%B8%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20%EB%A1%9C%EB%94%A9%20%EC%86%8D%EB%8F%84%20%EA%B0%9C%EC%84%A0%ED%95%98%EA%B8%B0%20[%20GitHub%20As%20a%20CDN%20]/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202024-01-01%20232154.png)

`Connect` 버튼을 눌러서 깃허브 리포지토리와 연결을 진행해 줍니다.

- 연결 페이지에서 `Only select repositories`를 선택하고 이미지가 업로드되길 원하는 `repository`를 선택해줍니다.
- `Install`을 눌러 설치해줍니다. (GitHub에 외장 플러그인을 설치하는 개념입니다.)

아래와 같이 닉네임과 repository가 보이면 연동이 완료된 것입니다!

![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/%EA%B9%83%ED%97%88%EB%B8%8C%20%EB%B8%94%EB%A1%9C%EA%B7%B8%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20%EB%A1%9C%EB%94%A9%20%EC%86%8D%EB%8F%84%20%EA%B0%9C%EC%84%A0%ED%95%98%EA%B8%B0%20[%20GitHub%20As%20a%20CDN%20]/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202024-01-01%20232805.png)

**개발자님 감사합니다 :)**

# 이미지 업로드 방법 및 사용법
아래와 같은 부분을 클릭하면 이미지를 업로드 할 수 있는 창이 뜹니다.

![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/%EA%B9%83%ED%97%88%EB%B8%8C%20%EB%B8%94%EB%A1%9C%EA%B7%B8%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20%EB%A1%9C%EB%94%A9%20%EC%86%8D%EB%8F%84%20%EA%B0%9C%EC%84%A0%ED%95%98%EA%B8%B0%20[%20GitHub%20As%20a%20CDN%20]/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202024-01-01%20232913.png)

이미지를 업로드하면 <u>자동으로 이미지의 주소가 복사</u>되어 갔다가 붙여넣기 하시면 됩니다.

상단의 `Search Uploads`를 누르면 그 동안 업로드한 이미지를 확인할 수 있습니다.

