document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const slideGroup = document.querySelector('.slide-group');

    function showSlides() {
        if (!slides.length || !slideGroup) return; // 슬라이드 또는 슬라이드 그룹이 없으면 종료
        slideIndex++;
        if (slideIndex >= slides.length) slideIndex = 0;
        slideGroup.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    function plusSlides(n) {
        slideIndex += n;
        if (slideIndex >= slides.length) slideIndex = 0;
        if (slideIndex < 0) slideIndex = slides.length - 1;
        slideGroup.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    document.querySelector('.prev').addEventListener('click', function() {
        plusSlides(-1);
    });

    document.querySelector('.next').addEventListener('click', function() {
        plusSlides(1);
    });

    setInterval(showSlides, 4000); // 4초마다 슬라이드 변경
});
