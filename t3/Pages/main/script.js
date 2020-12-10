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

$('.load_more_work')[0].addEventListener('click' , ()=>{
    $('.merch')[0].innerHTML += `
        <div class="merch_img" style="background-image: url(&quot;images/b0.jpg&quot;);">
            <div class="merch_img__hover">
                <img src="https://img.icons8.com/ios/100/000000/uchiha-eyes.png">
            </div>
        </div>
        <div class="merch_img" style="background-image: url(&quot;images/b1.jpg&quot;);">
            <div class="merch_img__hover">
                <img src="https://img.icons8.com/ios/100/000000/uchiha-eyes.png">
            </div>
        </div>
        <div class="merch_img" style="background-image: url(&quot;images/b2.jpg&quot;);">
            <div class="merch_img__hover">
                <img src="https://img.icons8.com/ios/100/000000/uchiha-eyes.png">
            </div>
        </div>
        <div class="merch_img" style="background-image: url(&quot;images/b3.jpg&quot;);">
            <div class="merch_img__hover">
                <img src="https://img.icons8.com/ios/100/000000/uchiha-eyes.png">
            </div>
        </div>
        <div class="merch_img" style="background-image: url(&quot;images/b4.jpg&quot;);">
            <div class="merch_img__hover">
                <img src="https://img.icons8.com/ios/100/000000/uchiha-eyes.png">
            </div>
        </div>
        <div class="merch_img" style="background-image: url(&quot;images/b5.jpg&quot;);">
            <div class="merch_img__hover">
                <img src="https://img.icons8.com/ios/100/000000/uchiha-eyes.png">
            </div>
        </div>
        <div class="merch_img" style="background-image: url(&quot;images/b6.jpg&quot;);">
            <div class="merch_img__hover">
                <img src="https://img.icons8.com/ios/100/000000/uchiha-eyes.png">
            </div>
        </div>
        <div class="merch_img" style="background-image: url(&quot;images/b7.jpg&quot;);">
            <div class="merch_img__hover">
                <img src="https://img.icons8.com/ios/100/000000/uchiha-eyes.png">
            </div>
        </div>
    `
})

$('#menu_btn').on('click' , ()=>{
    $('nav').toggleClass('active')
    $('#menu_btn').toggleClass('active')
})