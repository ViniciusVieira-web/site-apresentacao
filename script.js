window.onload = function(){
    let popup = document.getElementById('popup')
    let maincontent = document.getElementById('main-content')

    popup.style.visibility = "visible";

    setTimeout(function() {
        popup.classList.add("hidden");
        setTimeout(function(){
            maincontent.style.display = "block";
            // document.body.style.overflow = "auto";
        }, 1000);  
    }, 3000);
};

// const swiper = new swiper('.swiper',{
//     direction: 'vertical',
//     loop: true, 

//     pagination:{
//         el: '.swiper-pagination',
//     },

//     navigation:{
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     scrollbar:{
//         el: '.swiper-scrollbar',
//     },
// });