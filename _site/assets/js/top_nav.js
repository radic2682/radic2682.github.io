const currentUrl = window.location.href;
const domain = window.location.origin.endsWith('/') ? window.location.origin : window.location.origin + '/';


const isRootPage = currentUrl === domain;
const isVisitingPage = currentUrl.includes('/visiting');
const isSearchPage = currentUrl.includes('/search');


const logo = document.querySelector('.logo');
const top_search = document.querySelector('#top_search');
const backg = document.querySelector('.backg');


if(!isRootPage && !isVisitingPage && !isSearchPage) {
    logo.src = "/assets/images/logoB_y.png";
    top_search.src = "/assets/images/icon_search_l_y.png";
}

window.addEventListener("scroll", () => {
    if(!isRootPage && !isVisitingPage && !isSearchPage) {
        if(window.scrollY < backg.offsetHeight - 40 ) {
            // console.log(window.scrollY);
            logo.src = "/assets/images/logoB_y.png";
            top_search.src = "/assets/images/icon_search_l_y.png";
        } else {
            logo.src = "/assets/images/logoB.png";
            top_search.src = "/assets/images/icon_search_l.png";
        }
    }
})

