document.addEventListener("DOMContentLoaded", () => {
    // 메뉴 항목의 색상 변경 코드
    document.querySelectorAll('#menu li').forEach(item => {
        if (!item.classList.contains('search-menu')) { // search-menu 클래스가 아닌 항목에만 적용
            item.addEventListener('mouseover', function(event) {
                event.target.style.color = 'greenyellow';  // 마우스 오버 시 색상 변경
            });
            item.addEventListener('mouseout', function(event) {
                event.target.style.color = 'white';  // 마우스 아웃 시 색상 원래대로
            });
        }
    });
});
