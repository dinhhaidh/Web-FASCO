$(document).ready(function(){
    $("#nav-toggle").click(function(){
        $("#nav-menu").addClass("show-menu");
    });

    $("#nav-close").click(function(){
        $("#nav-menu").removeClass("show-menu");
    });
    $("#nav__link").click(function(){
        $('.active-link').removeClass("show-menu");
    });

    // khi kích vào nav__link nó sẽ ẳn đi
    $('.nav__item a').click(function(){
    $("#nav-menu").removeClass("show-menu");
    });
    
    $(window).scroll(function(){
        $("#header").toggleClass("shadow-header", $(this).scrollTop() >= 50);
        $("#scroll-up").toggleClass("show-scroll", $(this).scrollTop() >= 350);
    });    

})


// ===============  SWIPER MOVIE ================//
let swiperNew = new Swiper('.deals__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: "auto",

    // đoạn mã này lè căn giữa
    // centeredSlides: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        350:{
            centeredSlides: false,
            slidesPerView: '1',
        },
        440:{
            centeredSlides: false,
            slidesPerView: '2',
        },

        768:{
            slidesPerView: '2.5',
            centeredSlides: false,
        },
    }

});


let swiperFollow = new Swiper('.follow__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 2,

    // đoạn mã này lè căn giữa
    centeredSlides: true,

    // pagination: {
    //     el: '.swiper-pagination',
    //     // đoạn mã này kích dc vào đốt vẫn chạy
    //     // clickable: true,
    // },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },


    breakpoints:{
        440:{
            slidesPerView: '3',
        },

        600:{
            slidesPerView: '4',
        },
        768:{
            slidesPerView: '5',
        },
        1024:{
            slidesPerView: '6',
        },
        1150:{
            slidesPerView: '7',
            centeredSlides: false,
        },
    }
});

var swiperSign = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",

    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 663,
        modifier: 2,
        slideShadows: true,
        scale: 1.3,
    },
        loop: true,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        
    });

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link')
        }else{
        sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/
// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '60px',
//     duration: 2500,
//     delay: 400,
// })
// sr.reveal(`.home__image, .container-fluid, .home__data img, .follow__title, .new__title `) 
// sr.reveal(`.home__data, .review-main, .high__data, .sign__images, .subscribe__button-link, .footer__span  `,{origin: 'bottom'})
// sr.reveal(`.deals__card, .new__text, .new__button, .new__card, .follow__images `,{interval: 100}) 
// sr.reveal(`.home__img, .packages__main, .follow__desc, .subscribe__img, .footer__data,.deals__description`,{origin: 'right'})
// sr.reveal(`.home__image, .deals__data ,.packages__image, .subscribe__image,.subscribe__form, .footer__title`,{origin: 'left'})





