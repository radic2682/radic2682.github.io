let sidebar_Open = true;
let sidebar_blocked = false;

const content_div = document.querySelector('#content');
const sidebar_my = document.querySelector('#sidebar');
const sidebar_on_off_btn = document.querySelector('#sidebar_on_off_btn');

function if_open() {
    if (sidebar_Open) {
        content_div.style.width = `calc(100% - ${sidebar_my.offsetWidth}px)`;
    } else {
        content_div.style.width = '100%';
    }
}

function updateSidebarStatus() {
    sidebar_Open = !matchMedia("(max-width: 1300px)").matches;
    if(!sidebar_blocked){
        if_open();
    }
}

window.addEventListener('load', updateSidebarStatus);
window.addEventListener('resize', updateSidebarStatus);

function menu_close_click() {
    sidebar_my.style.marginLeft = "-280px";
    sidebar_on_off_btn.style.marginLeft = "20px";
    sidebar_Open = false;
    sidebar_blocked = true;
    if_open();
}

function menu_tag_click() {
    sidebar_my.style.marginLeft = "0";
    sidebar_on_off_btn.style.marginLeft = "-140px";
    sidebar_Open = true;
    sidebar_blocked = true;
    if_open();
}

// 초기화 시점에도 업데이트를 수행
updateSidebarStatus();
