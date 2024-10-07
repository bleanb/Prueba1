const DropDownTrigger = document.getElementById('drop-down-header');
const DropDownContent = document.getElementById('drop-down-header-content');
const Header = document.getElementById('header');
const HeaderImg = document.getElementById('img-header');

DropDownTrigger.addEventListener('click', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (DropDownContent.classList.contains('appear')) {
        DropDownContent.classList.remove('appear');
    } else {
        DropDownContent.classList.add('appear');
    }
});

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 1) {
        Header.classList.add('header-scrolled');
        HeaderImg.classList.add('header-scrolled-img');
        DropDownContent.style.marginTop = '70px';
    }
    if (scrollTop == 0) {
        Header.classList.remove('header-scrolled');
        HeaderImg.classList.remove('header-scrolled-img');
        DropDownContent.style.marginTop =  '100px';
    }
});