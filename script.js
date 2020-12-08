// smooth scroll
const anchors = document.querySelectorAll('a[href^="#"]')

for(let anchor of anchors) {
    anchor.addEventListener("click", function(e) {
        e.preventDefault()
        const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
        document.querySelector(goto).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

var nav = $(".navigation"),
header = $("header").innerHeight();
var scrollOffset = $(window).scrollTop();
    
checkScroll(scrollOffset);

$(window).on("scroll", function(){
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset + 70);
});

function checkScroll(scrollOffset){
    if( scrollOffset >= header){
        nav.addClass("fixed");
    }else{
        nav.removeClass("fixed");
    }
}


let profSkills1 = Math.round(Math.random() * 100)
let profSkills2 = Math.round(Math.random() * 100)
let profSkills3 = Math.round(Math.random() * 100)

$('.professional_skills__per_content__pers')[0].style = `width: ${profSkills1}%`
$('.professional_skills__per_content__text__per')[0].innerHTML = `${profSkills1}%`
$('.professional_skills__per_content__pers')[1].style = `width: ${profSkills2}%`
$('.professional_skills__per_content__text__per')[1].innerHTML = `${profSkills2}%`
$('.professional_skills__per_content__pers')[2].style = `width: ${profSkills3}%`
$('.professional_skills__per_content__text__per')[2].innerHTML = `${profSkills3}%`

for (let i = 0; i < 8; i++) {
    $('.merch_img')[i].style = `background-image: url(images/b${i}.jpg);`
}