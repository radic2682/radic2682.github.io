---
title: "[마이크로프로세서] 4. (1) AMBA AXI"
thumbnail: https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/Hardware_notes/IfloL9YlKjJcrcv2TpAD.jpg
layout: post
author: Sun Hong
categories:
  - Hardware Note
  - Microprocessor Note
tags: 
excerpt: AMBA3 AXI Protocol, Burst, Transfer, Ordering
sticker: emoji//1f4d6
---
>  이 노트는 '마이크로프로세서'를 수강하며 정리한 노트입니다.

![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/Hardware_notes/IfloL9YlKjJcrcv2TpAD.jpg)
![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/Hardware_notes/2u2J2FytGYCKNGJGQFmd.jpg)
![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/Hardware_notes/kwZqXZUvLY2U8VrA6oi7.jpg)
![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/Hardware_notes/vCkrSdpKJ7ZgnNSUuaUK.jpg)
![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/Hardware_notes/pE2kjcOw3IHlsUSF1X5y.jpg)
![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/Hardware_notes/e4Dwq99kiWvdjhxYnXGk.jpg)
![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/Hardware_notes/6vWbHEXMdsutJ4d5QXVP.jpg)
![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/Hardware_notes/nTQ4BGxaiNM4FI4ZbGDD.jpg)
![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/Hardware_notes/z6TAvrsd4aNjJjor8rT6.jpg)
![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/Hardware_notes/v6CgHb6z76DmkjVDLZfm.jpg)
![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/Hardware_notes/5dewQKBq26yHsaEoiXQQ.jpg)
![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/Hardware_notes/XnHhtvgKoeySzwl0YP3w.jpg)
![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/Hardware_notes/v53OLQgmUCu1SPArUhaU.jpg)
![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/Hardware_notes/xGmdLwIPJcGeGefXza1b.jpg)
![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/Hardware_notes/2pDQOf3iktwtutdO6zVo.jpg)
![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/Hardware_notes/ZTZvWtg5UIYx1DLgxzoU.jpg)
![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/Hardware_notes/TSJOrjbntAXIAedAbG7c.jpg)
![이미지](https://raw.githubusercontent.com/radic2682/blog_images_repo/main/uploads/Hardware_notes/G5p56XcVtT3QGtWpQsdx.jpg)