import"normalize.css";import"swiper/css";import"swiper/css/navigation";import"swiper/css/pagination";import"./styles/main.scss";import Swiper,{Navigation,Pagination}from"swiper";var swiper=new Swiper(".offerSwiper",{slidesPerView:3,spaceBetween:30,slidesPerGroup:3,loop:!0,loopFillGroupWithBlank:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},modules:[Navigation,Pagination],breakpoints:{320:{slidesPerView:1,spaceBetween:1,slidesPerGroup:1},768:{slidesPerView:2,spaceBetween:2,slidesPerGroup:1},1e3:{slidesPerView:3,spaceBetween:18,slidesPerGroup:1}}});swiper=new Swiper(".trendsSwiper",{slidesPerView:3,spaceBetween:30,slidesPerGroup:3,loop:!0,loopFillGroupWithBlank:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},modules:[Navigation,Pagination],breakpoints:{320:{slidesPerView:1,spaceBetween:1,slidesPerGroup:1},768:{slidesPerView:2,spaceBetween:2,slidesPerGroup:1},1e3:{slidesPerView:3,spaceBetween:18,slidesPerGroup:1}}});const openModal=()=>{document.getElementById("Notification").style.display="block"};function closeModal(){document.getElementById("Notification").style.visibility="hidden"}