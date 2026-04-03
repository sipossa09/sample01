$(function () {
    lucide.createIcons();


    const swiper = new Swiper('.main_visual_slider', {
        loop: true,
        autoplay: {
            delay: 3000, // 3초
            disableOnInteraction: false, // 클릭 후에도 계속 autoplay
        },
        effect: 'fade', // ⭐ 페이드 효과
        fadeEffect: {
            crossFade: true
        },
    });


})