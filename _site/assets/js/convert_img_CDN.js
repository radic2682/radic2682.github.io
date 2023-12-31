document.addEventListener("DOMContentLoaded", function () {
    const imgCdn = "https://cdn.jsdelivr.net/gh/radic2682/radic2682.github.io@master"; // CDN URL 설정
  
    // 모든 이미지 태그를 찾아서 이미지 경로를 CDN URL로 변경
    const images = document.querySelectorAll("img");
    images.forEach(function (img) {
      const src = img.getAttribute("src");
      if (src && src.startsWith("https://github.com/radic2682/radic2682.github.io/assets/")) {
        // 이미지 경로가 주어진 GitHub 경로 형식으로 시작하는 경우에만 CDN URL로 변환
        const filePath = src.replace(/^https:\/\/github\.com\/radic2682\/radic2682\.github\.io\/assets\//, "");
        img.setAttribute("src", `${imgCdn}/${filePath}`);
      }
    });
  });
  