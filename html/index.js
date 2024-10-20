window.addEventListener("scroll",showScroll)
function showScroll(){
    if(Math.floor(window.scrollY) > 1500){
        setInterval(()=>{
            leaf.classList.replace("card8Footer0","card8Footer");
            coverPage.classList.replace("cover0","cover")
            coverPage1.classList.replace("cover01","cover1")
        },11500)   
    } 
}
let code = document.getElementById("code")
let codeTakhfif = document.getElementById("codeTakhfif")
code.addEventListener("click",()=>{
    code.innerHTML = "فعال شد"
    code.style.pointerEvents = "none"
    code.style.backgroundColor = "orange"
    code.style.borderColor = "orange"
    code.style.color="black"
    codeTakhfif.classList.replace("codeBarg0","codeBarg")
    codeTakhfif.innerHTML = "کد تخفیف  شما : " +  "4569" 
})
let closess = document.getElementById("closess")
closess.addEventListener("click",()=>{
    leaf.style.display = "none"
    coverPage.style.display = "none"
    coverPage1.style.display = "none"
})

let leaf = document.querySelector("#leaf")
let coverPage = document.getElementById("coverPage")
let coverPage1 = document.getElementById("coverPage1")
let mainDivHeader = document.querySelector(".mainDivHeader")
let header = document.querySelector(".header")
window.addEventListener("scroll",showHeader)
function showHeader(){
    if(Math.floor(window.scrollY) > 100){
        header.style.backgroundColor="white";          
    } 
    if(Math.floor(window.scrollY) < 50){
        header.style.backgroundColor="rgba(255, 255, 255, 0)";          
    } 
}
let btnDiv61 = document.getElementById("btnDiv61")
let div61 = document.getElementById("div61")

let covImge = document.getElementById("covImge")
let chImge = document.querySelectorAll(".chImge")
let changImg = document.querySelector(".changImg")
let btnCl = document.querySelector(".btnCl")
let coverPage2 = document.getElementById("coverPage2")
for (let i = 0 ; i < chImge.length ; i++) {
    chImge[i].onclick = changImgs
}
function changImgs(){
    let Imges_src = this.getAttribute("src")
    covImge.setAttribute("src", Imges_src)
}
btnDiv61.addEventListener("click" , ()=>{
    div61.classList.replace("moreImgdiv610","moreImgdiv61")
    coverPage2.classList.replace("cover02","cover2")


})
btnCl.addEventListener("click", ()=>{
    div61.classList.replace("moreImgdiv61","moreImgdiv610")
    coverPage2.classList.replace("cover2","cover02")

})
let mainPrice = document.getElementById("mainPrice")
let numOfTh = document.getElementById("numOfTh")
let finalpri = document.getElementById("finalpri")
let takhfif = document.getElementById("takhfif")
codeTakhfif = document.getElementById("codeTakhfif")
numOfTh.addEventListener("click" , ()=>{
    if(numOfTh.value > 0 ){
        finalpri.value = numOfTh.value*mainPrice.innerHTML
        numOfTh.style.backgroundColor="white"
    }
    else{
        numOfTh.style.backgroundColor="red"
    }
    if(takhfif.value == "4569" ){
        takhfif.style.backgroundColor = "green"
        finalpri.value = (numOfTh.value*mainPrice.innerHTML)-((numOfTh.value*mainPrice.innerHTML)*0.2)

    
    }
    else if(takhfif.value !== "4569" && takhfif.value.trim() !== ""){
        takhfif.style.backgroundColor = "red"

    }
    else{
        takhfif.style.backgroundColor = "white"

    }
    

})
let color1 = document.getElementById("color1")
let price = document.getElementById("price")
color1.addEventListener("click" ,()=>{
    price.textContent = "قیمت : 756.000 تومان"
    mainPrice.innerHTML = 756000
})
let color2 = document.getElementById("color2")
color2.addEventListener("click" ,()=>{
    price.textContent = "قیمت : 1.000.000 تومان"
    mainPrice.innerHTML = 1000000
})
let color3 = document.getElementById("color3")
color3.addEventListener("click" ,()=>{
    price.textContent = "قیمت : 880.000 تومان"
    mainPrice.innerHTML = 880000
})
let numberOfBag = +document.getElementById("numberOfBag").innerHTML
let numberOfBagf = document.getElementById("numberOfBag")
let goToBag = document.getElementById("goToBag")
goToBag.addEventListener("click" , ()=>{
    let num = numOfTh.value
    let num2 = +num
    numberOfBag = numberOfBag + num2
    numberOfBagf.innerHTML = numberOfBag
})
// ----------------------------------------------------
let btnDiv62 = document.getElementById("btnDiv62")
let div62 = document.getElementById("div62")
let covImge2 = document.getElementById("covImge2")
let chImge2 = document.querySelectorAll(".chImge2")
let btnCl2 = document.querySelector(".btnCl2")
for (let i = 0 ; i < chImge2.length ; i++) {
    chImge2[i].onclick = changImgs2
}
function changImgs2(){
    let Imges_src = this.getAttribute("src")
    covImge2.setAttribute("src", Imges_src)
}
btnDiv62.addEventListener("click" , ()=>{
    div62.classList.replace("moreImgdiv620","moreImgdiv62")
    coverPage2.classList.replace("cover02","cover2")


})
btnCl2.addEventListener("click", ()=>{
    div62.classList.replace("moreImgdiv62","moreImgdiv620")
    coverPage2.classList.replace("cover2","cover02")

})
let mainPrice2 = document.getElementById("mainPrice2")
let numOfTh2 = document.getElementById("numOfTh2")
let finalpri2 = document.getElementById("finalpri2")
let takhfif2 = document.getElementById("takhfif2")
codeTakhfif = document.getElementById("codeTakhfif")
numOfTh2.addEventListener("click" , ()=>{
    if(numOfTh2.value > 0 ){
        finalpri2.value = numOfTh2.value*mainPrice2.innerHTML
        numOfTh2.style.backgroundColor="white"
    }
    else{
        numOfTh2.style.backgroundColor="red"
    }
    if(takhfif2.value == "4569" ){
        takhfif2.style.backgroundColor = "green"
        finalpri2.value = (numOfTh2.value*mainPrice2.innerHTML)-((numOfTh2.value*mainPrice2.innerHTML)*0.2)

    
    }
    else if(takhfif2.value !== "4569" && takhfif2.value.trim() !== ""){
        takhfif2.style.backgroundColor = "red"

    }
    else{
        takhfif2.style.backgroundColor = "white"

    }
    

})
let color2_1 = document.getElementById("color2_1")
let price2 = document.getElementById("price2")
color2_1.addEventListener("click" ,()=>{
    price2.textContent = "قیمت : 780.000 تومان"
    mainPrice2.innerHTML = 780000
})
let color2_2 = document.getElementById("color2_2")
color2_2.addEventListener("click" ,()=>{
    price2.textContent = "قیمت : 639.000 تومان"
    mainPrice2.innerHTML = 639000
})


let goToBag2 = document.getElementById("goToBag2")
goToBag2.addEventListener("click" , ()=>{
    let num = numOfTh2.value
    let num2 = +num
    numberOfBag = numberOfBag + num2
    numberOfBagf.innerHTML = numberOfBag
})


// ----------------------------------------------------
let btnDiv63 = document.getElementById("btnDiv63")
let div63 = document.getElementById("div63")
let covImge3 = document.getElementById("covImge3")
let chImge3 = document.querySelectorAll(".chImge3")
let btnCl3 = document.querySelector(".btnCl3")
for (let i = 0 ; i < chImge3.length ; i++) {
    chImge3[i].onclick = changImgs3
}
function changImgs3(){
    let Imges_src = this.getAttribute("src")
    covImge3.setAttribute("src", Imges_src)
}
btnDiv63.addEventListener("click" , ()=>{
    div63.classList.replace("moreImgdiv630","moreImgdiv63")
    coverPage2.classList.replace("cover02","cover2")


})
btnCl3.addEventListener("click", ()=>{
    div63.classList.replace("moreImgdiv63","moreImgdiv630")
    coverPage2.classList.replace("cover2","cover02")

})
let mainPrice3 = document.getElementById("mainPrice3")
let numOfTh3 = document.getElementById("numOfTh3")
let finalpri3 = document.getElementById("finalpri3")
let takhfif3 = document.getElementById("takhfif3")
codeTakhfif = document.getElementById("codeTakhfif")
numOfTh3.addEventListener("click" , ()=>{
    if(numOfTh3.value > 0 ){
        finalpri3.value = numOfTh3.value*mainPrice3.innerHTML
        numOfTh3.style.backgroundColor="white"
    }
    else{
        numOfTh3.style.backgroundColor="red"
    }
    if(takhfif3.value == "4569" ){
        takhfif3.style.backgroundColor = "green"
        finalpri3.value = (numOfTh3.value*mainPrice3.innerHTML)-((numOfTh3.value*mainPrice3.innerHTML)*0.2)

    
    }
    else if(takhfif3.value !== "4569" && takhfif3.value.trim() !== ""){
        takhfif3.style.backgroundColor = "red"

    }
    else{
        takhfif3.style.backgroundColor = "white"

    }
    

})
let color3_1 = document.getElementById("color3_1")
let price3 = document.getElementById("price3")
color3_1.addEventListener("click" ,()=>{
    price3.textContent = "قیمت : 1.130.000 تومان"
    mainPrice3.innerHTML = 1130000
})
let color3_2 = document.getElementById("color3_2")
color3_2.addEventListener("click" ,()=>{
    price3.textContent = "قیمت : 1.200.000 تومان"
    mainPrice3.innerHTML = 1200000
})
let color3_3 = document.getElementById("color3_3")
color3_3.addEventListener("click" ,()=>{
    price3.textContent = "قیمت : 1.000.000 تومان"
    mainPrice3.innerHTML = 1000000
})
let color3_4 = document.getElementById("color3_4")
color3_4.addEventListener("click" ,()=>{
    price3.textContent = "قیمت : 1.250.000 تومان"
    mainPrice3.innerHTML = 1250000
})
let goToBag3 = document.getElementById("goToBag3")
goToBag3.addEventListener("click" , ()=>{
    let num = numOfTh3.value
    let num2 = +num
    numberOfBag = numberOfBag + num2
    numberOfBagf.innerHTML = numberOfBag

})
// -------------------------------------------------------------------
let btnDiv51 = document.getElementById("btnDiv51")
let div51 = document.getElementById("div51")
let covImge51 = document.getElementById("covImge51")
let chImge51 = document.querySelectorAll(".chImge51")
let btnCl51 = document.querySelector(".btnCl51")
for (let i = 0 ; i < chImge51.length ; i++) {
    chImge51[i].onclick = changImgs51
}
function changImgs51(){
    let Imges_src = this.getAttribute("src")
    covImge51.setAttribute("src", Imges_src)
}
btnDiv51.addEventListener("click" , ()=>{
    div51.classList.replace("moreImgdiv510","moreImgdiv51")
    coverPage2.classList.replace("cover02","cover2")


})
btnCl51.addEventListener("click", ()=>{
    div51.classList.replace("moreImgdiv51","moreImgdiv510")
    coverPage2.classList.replace("cover2","cover02")

})
let mainPrice51 = document.getElementById("mainPrice51")
let numOfTh51 = document.getElementById("numOfTh51")
let finalpri51 = document.getElementById("finalpri51")
let takhfif51 = document.getElementById("takhfif51")
codeTakhfif = document.getElementById("codeTakhfif")
numOfTh51.addEventListener("click" , ()=>{
    if(numOfTh51.value > 0 ){
        finalpri51.value = numOfTh51.value*mainPrice51.innerHTML
        numOfTh51.style.backgroundColor="white"
    }
    else{
        numOfTh51.style.backgroundColor="red"
    }
    if(takhfif51.value == "4569" ){
        takhfif51.style.backgroundColor = "green"
        finalpri51.value = (numOfTh51.value*mainPrice51.innerHTML)-((numOfTh51.value*mainPrice51.innerHTML)*0.2)

    
    }
    else if(takhfif51.value !== "4569" && takhfif51.value.trim() !== ""){
        takhfif51.style.backgroundColor = "red"

    }
    else{
        takhfif51.style.backgroundColor = "white"

    }
    

})
let price51 = document.getElementById("price51")
let color51_2 = document.getElementById("color51_2")
color51_2.addEventListener("click" ,()=>{
    price51.textContent = "قیمت : 2.580.000 تومان"
    mainPrice51.innerHTML = 2580000
})
let goToBag51 = document.getElementById("goToBag51")
goToBag51.addEventListener("click" , ()=>{
    let num = numOfTh51.value
    let num2 = +num
    numberOfBag = numberOfBag + num2
    numberOfBagf.innerHTML = numberOfBag

})
// -------------------------------------------------------
let btnDiv52 = document.getElementById("btnDiv52")
let div52 = document.getElementById("div52")

let covImge52 = document.getElementById("covImge52")
let chImge52 = document.querySelectorAll(".chImge52")
let btnCl52 = document.querySelector(".btnCl52")
for (let i = 0 ; i < chImge52.length ; i++) {
    chImge52[i].onclick = changImgs52
}
function changImgs52(){
    let Imges_src = this.getAttribute("src")
    covImge52.setAttribute("src", Imges_src)
}
btnDiv52.addEventListener("click" , ()=>{
    div52.classList.replace("moreImgdiv520","moreImgdiv52")
    coverPage2.classList.replace("cover02","cover2")


})
btnCl52.addEventListener("click", ()=>{
    div52.classList.replace("moreImgdiv52","moreImgdiv520")
    coverPage2.classList.replace("cover2","cover02")

})
let mainPrice52 = document.getElementById("mainPrice52")
let numOfTh52 = document.getElementById("numOfTh52")
let finalpri52 = document.getElementById("finalpri52")
let takhfif52 = document.getElementById("takhfif52")
codeTakhfif = document.getElementById("codeTakhfif")
numOfTh52.addEventListener("click" , ()=>{
    if(numOfTh52.value > 0 ){
        finalpri52.value = numOfTh52.value*mainPrice52.innerHTML
        numOfTh52.style.backgroundColor="white"
    }
    else{
        numOfTh52.style.backgroundColor="red"
    }
    if(takhfif52.value == "4569" ){
        takhfif52.style.backgroundColor = "green"
        finalpri52.value = (numOfTh52.value*mainPrice52.innerHTML)-((numOfTh52.value*mainPrice52.innerHTML)*0.2)

    
    }
    else if(takhfif52.value !== "4569" && takhfif52.value.trim() !== ""){
        takhfif52.style.backgroundColor = "red"

    }
    else{
        takhfif52.style.backgroundColor = "white"

    }
    

})
let price52 = document.getElementById("price52")
let color52_2 = document.getElementById("color52_2")
color52_2.addEventListener("click" ,()=>{
    price52.textContent = "قیمت : 4.980.000 تومان"
    mainPrice52.innerHTML = 4980000
})
let goToBag52 = document.getElementById("goToBag52")
goToBag52.addEventListener("click" , ()=>{
    let num = numOfTh52.value
    let num2 = +num
    numberOfBag = numberOfBag + num2
    numberOfBagf.innerHTML = numberOfBag

})
// -----------------------------------------------------------------
let btnDiv53 = document.getElementById("btnDiv53")
let div53 = document.getElementById("div53")

let covImge53 = document.getElementById("covImge53")
let chImge53 = document.querySelectorAll(".chImge53")
let btnCl53 = document.querySelector(".btnCl53")
for (let i = 0 ; i < chImge53.length ; i++) {
    chImge53[i].onclick = changImgs53
}
function changImgs53(){
    let Imges_src = this.getAttribute("src")
    covImge53.setAttribute("src", Imges_src)
}
btnDiv53.addEventListener("click" , ()=>{
    div53.classList.replace("moreImgdiv530","moreImgdiv53")
    coverPage2.classList.replace("cover02","cover2")


})
btnCl53.addEventListener("click", ()=>{
    div53.classList.replace("moreImgdiv53","moreImgdiv530")
    coverPage2.classList.replace("cover2","cover02")

})
let mainPrice53 = document.getElementById("mainPrice53")
let numOfTh53 = document.getElementById("numOfTh53")
let finalpri53 = document.getElementById("finalpri53")
let takhfif53 = document.getElementById("takhfif53")
codeTakhfif = document.getElementById("codeTakhfif")
numOfTh53.addEventListener("click" , ()=>{
    if(numOfTh53.value > 0 ){
        finalpri53.value = numOfTh53.value*mainPrice53.innerHTML
        numOfTh53.style.backgroundColor="white"
    }
    else{
        numOfTh53.style.backgroundColor="red"
    }
    if(takhfif53.value == "4569" ){
        takhfif53.style.backgroundColor = "green"
        finalpri53.value = (numOfTh53.value*mainPrice53.innerHTML)-((numOfTh53.value*mainPrice53.innerHTML)*0.2)

    
    }
    else if(takhfif53.value !== "4569" && takhfif53.value.trim() !== ""){
        takhfif53.style.backgroundColor = "red"

    }
    else{
        takhfif53.style.backgroundColor = "white"

    }
    

})
let price53 = document.getElementById("price53")
let color53_2 = document.getElementById("color53_2")
color53_2.addEventListener("click" ,()=>{
    price53.textContent = "قیمت : 2.980.000 تومان"
    mainPrice53.innerHTML = 2980000
})
let goToBag53 = document.getElementById("goToBag53")
goToBag53.addEventListener("click" , ()=>{
    let num = numOfTh53.value
    let num2 = +num
    numberOfBag = numberOfBag + num2
    numberOfBagf.innerHTML = numberOfBag

})
// -------------------------------------------------------------------
let btnDiv31 = document.getElementById("btnDiv31")
let div31 = document.getElementById("div31")
let covImge31 = document.getElementById("covImge31")
let chImge31 = document.querySelectorAll(".chImge31")
let btnCl31 = document.querySelector(".btnCl31")
for (let i = 0 ; i < chImge31.length ; i++) {
    chImge31[i].onclick = changImgs31
}
function changImgs31(){
    let Imges_src = this.getAttribute("src")
    covImge31.setAttribute("src", Imges_src)
}
btnDiv31.addEventListener("click" , ()=>{
    div31.classList.replace("moreImgdiv310","moreImgdiv31")
    coverPage2.classList.replace("cover02","cover2")


})
btnCl31.addEventListener("click", ()=>{
    div31.classList.replace("moreImgdiv31","moreImgdiv310")
    coverPage2.classList.replace("cover2","cover02")

})
let mainPrice31 = document.getElementById("mainPrice31")
let numOfTh31 = document.getElementById("numOfTh31")
let finalpri31 = document.getElementById("finalpri31")
let takhfif31 = document.getElementById("takhfif31")
codeTakhfif = document.getElementById("codeTakhfif")
numOfTh31.addEventListener("click" , ()=>{
    if(numOfTh31.value > 0 ){
        finalpri31.value = numOfTh31.value*mainPrice31.innerHTML
        numOfTh31.style.backgroundColor="white"
    }
    else{
        numOfTh31.style.backgroundColor="red"
    }
    if(takhfif31.value == "4569" ){
        takhfif31.style.backgroundColor = "green"
        finalpri31.value = (numOfTh31.value*mainPrice31.innerHTML)-((numOfTh31.value*mainPrice31.innerHTML)*0.2)

    
    }
    else if(takhfif31.value !== "4569" && takhfif31.value.trim() !== ""){
        takhfif31.style.backgroundColor = "red"

    }
    else{
        takhfif31.style.backgroundColor = "white"

    }
    

})
let price31 = document.getElementById("price31")
let color31_2 = document.getElementById("color31_2")
color31_2.addEventListener("click" ,()=>{
    price31.textContent = "قیمت : 1.350.000 تومان"
    mainPrice31.innerHTML = 1350000
})
let goToBag31 = document.getElementById("goToBag31")
goToBag31.addEventListener("click" , ()=>{
    let num = numOfTh31.value
    let num2 = +num
    numberOfBag = numberOfBag + num2
    numberOfBagf.innerHTML = numberOfBag

})
// -----------------------------------------------------------------
let btnDiv32 = document.getElementById("btnDiv32")
let div32 = document.getElementById("div32")
let covImge32 = document.getElementById("covImge32")
let chImge32 = document.querySelectorAll(".chImge32")
let btnCl32 = document.querySelector(".btnCl32")
for (let i = 0 ; i < chImge32.length ; i++) {
    chImge32[i].onclick = changImgs32
}
function changImgs32(){
    let Imges_src = this.getAttribute("src")
    covImge32.setAttribute("src", Imges_src)
}
btnDiv32.addEventListener("click" , ()=>{
    div32.classList.replace("moreImgdiv320","moreImgdiv32")
    coverPage2.classList.replace("cover02","cover2")


})
btnCl32.addEventListener("click", ()=>{
    div32.classList.replace("moreImgdiv32","moreImgdiv320")
    coverPage2.classList.replace("cover2","cover02")

})
let mainPrice32 = document.getElementById("mainPrice32")
let numOfTh32 = document.getElementById("numOfTh32")
let finalpri32 = document.getElementById("finalpri32")
let takhfif32 = document.getElementById("takhfif32")
codeTakhfif = document.getElementById("codeTakhfif")
numOfTh32.addEventListener("click" , ()=>{
    if(numOfTh32.value > 0 ){
        finalpri32.value = numOfTh32.value*mainPrice32.innerHTML
        numOfTh32.style.backgroundColor="white"
    }
    else{
        numOfTh32.style.backgroundColor="red"
    }
    if(takhfif32.value == "4569" ){
        takhfif32.style.backgroundColor = "green"
        finalpri32.value = (numOfTh32.value*mainPrice32.innerHTML)-((numOfTh32.value*mainPrice32.innerHTML)*0.2)

    
    }
    else if(takhfif32.value !== "4569" && takhfif32.value.trim() !== ""){
        takhfif32.style.backgroundColor = "red"

    }
    else{
        takhfif32.style.backgroundColor = "white"

    }
    

})
let price32 = document.getElementById("price32")
let color32_2 = document.getElementById("color32_2")
color32_2.addEventListener("click" ,()=>{
    price32.textContent = "قیمت : 7420.000 تومان"
    mainPrice32.innerHTML = 742000
})
let goToBag32 = document.getElementById("goToBag32")
goToBag32.addEventListener("click" , ()=>{
    let num = numOfTh32.value
    let num2 = +num
    numberOfBag = numberOfBag + num2
    numberOfBagf.innerHTML = numberOfBag

})
// -----------------------------------------------------------
let btnDiv33 = document.getElementById("btnDiv33")
let div33 = document.getElementById("div33")

let covImge33 = document.getElementById("covImge33")
let chImge33 = document.querySelectorAll(".chImge33")
let btnCl33 = document.querySelector(".btnCl33")
for (let i = 0 ; i < chImge33.length ; i++) {
    chImge33[i].onclick = changImgs33
}
function changImgs33(){
    let Imges_src = this.getAttribute("src")
    covImge33.setAttribute("src", Imges_src)
}
btnDiv33.addEventListener("click" , ()=>{
    div33.classList.replace("moreImgdiv330","moreImgdiv33")
    coverPage2.classList.replace("cover02","cover2")


})
btnCl33.addEventListener("click", ()=>{
    div33.classList.replace("moreImgdiv33","moreImgdiv330")
    coverPage2.classList.replace("cover2","cover02")

})
let mainPrice33 = document.getElementById("mainPrice33")
let numOfTh33 = document.getElementById("numOfTh33")
let finalpri33 = document.getElementById("finalpri33")
let takhfif33 = document.getElementById("takhfif33")
codeTakhfif = document.getElementById("codeTakhfif")
numOfTh33.addEventListener("click" , ()=>{
    if(numOfTh33.value > 0 ){
        finalpri33.value = numOfTh33.value*mainPrice33.innerHTML
        numOfTh33.style.backgroundColor="white"
    }
    else{
        numOfTh33.style.backgroundColor="red"
    }
    if(takhfif33.value == "4569" ){
        takhfif33.style.backgroundColor = "green"
        finalpri33.value = (numOfTh33.value*mainPrice33.innerHTML)-((numOfTh33.value*mainPrice33.innerHTML)*0.2)

    
    }
    else if(takhfif33.value !== "4569" && takhfif33.value.trim() !== ""){
        takhfif33.style.backgroundColor = "red"

    }
    else{
        takhfif33.style.backgroundColor = "white"

    }
    

})
let price33 = document.getElementById("price33")
let color33_2 = document.getElementById("color33_2")
color33_2.addEventListener("click" ,()=>{
    price33.textContent = "قیمت : 1.555.600 تومان"
    mainPrice33.innerHTML = 1555600
})
let goToBag33 = document.getElementById("goToBag33")
goToBag33.addEventListener("click" , ()=>{
    let num = numOfTh33.value
    let num2 = +num
    numberOfBag = numberOfBag + num2
    numberOfBagf.innerHTML = numberOfBag

})





 