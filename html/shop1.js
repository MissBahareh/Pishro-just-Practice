let coverPage = document.querySelector(".coverPage")
let bmImg1 = document.querySelector(".bmImg1")
let bmImg2 = document.querySelector(".bmImg2")
let bmImg3 = document.querySelector(".bmImg3")
let bmImg4 = document.querySelector(".bmImg4")
let bmImg5 = document.querySelector(".bmImg5")
let bmImg6 = document.querySelector(".bmImg6")


bmImg1.onclick = ()=>{
    coverPage.style.background = "url(../img/کاور/1.png"
    coverPage.style.backgroundPosition =  "top"
    coverPage.style.backgroundRepeat = " no-repeat"
    coverPage.style.backgroundSize =  "cover"
}
bmImg2.onclick = ()=>{
    coverPage.style.background = "url(../img/کاور/2.jpg)"
    coverPage.style.backgroundPosition =  "top"
    coverPage.style.backgroundRepeat = " no-repeat"
    coverPage.style.backgroundSize =  "cover"
}
bmImg3.onclick = ()=>{
    coverPage.style.background = "url(../img/کاور/3.webp)"
    coverPage.style.backgroundPosition =  "top"
    coverPage.style.backgroundRepeat = " no-repeat"
    coverPage.style.backgroundSize =  "cover"
}
bmImg4.onclick = ()=>{
    coverPage.style.background = "url(../img/کاور/4.webp)"
    coverPage.style.backgroundPosition =  "center"
    coverPage.style.backgroundRepeat = " no-repeat"
    coverPage.style.backgroundSize =  "cover"
}
bmImg5.onclick = ()=>{
    coverPage.style.background = "url(../img/cover/best-time-to-shoping.webp)"
    coverPage.style.backgroundPosition =  "center"
    coverPage.style.backgroundRepeat = " no-repeat"
    coverPage.style.backgroundSize =  "cover"
}
bmImg6.onclick = ()=>{
    coverPage.style.background = "url(../img/cover/faryazandecor-art_contact_us۵.jpg)"
    coverPage.style.backgroundPosition =  "center"
    coverPage.style.backgroundRepeat = " no-repeat"
    coverPage.style.backgroundSize =  "cover"
}
let li2 = document.querySelector(".li2")
let listitem2 = document.querySelector(".listitem2")
li2.addEventListener("mousemove",()=>{
    listitem2.style.visibility = "visible"
    listitem3.style.visibility = "hidden"
    listitem4.style.visibility = "hidden"
    listitem5.style.visibility = "hidden"
    listitem6.style.visibility = "hidden"
    listitem8.style.visibility = "hidden"
    listitem7.style.visibility = "hidden"

})
let li3 = document.querySelector(".li3")
let listitem3 = document.querySelector(".listitem3")
li3.addEventListener("mousemove",()=>{
    listitem3.style.visibility = "visible"
    listitem2.style.visibility = "hidden"
    listitem4.style.visibility = "hidden"
    listitem5.style.visibility = "hidden"
    listitem6.style.visibility = "hidden"
    listitem7.style.visibility = "hidden"
    listitem8.style.visibility = "hidden"

})
let li4 = document.querySelector(".li4")
let listitem4 = document.querySelector(".listitem4")
li4.addEventListener("mousemove",()=>{
    listitem3.style.visibility = "hidden"
    listitem2.style.visibility = "hidden"
    listitem4.style.visibility = "visible"
    listitem5.style.visibility = "hidden"
    listitem6.style.visibility = "hidden"
    listitem7.style.visibility = "hidden"
    listitem8.style.visibility = "hidden"

})
let li5 = document.querySelector(".li5")
let listitem5 = document.querySelector(".listitem5")
li5.addEventListener("mousemove",()=>{
    listitem3.style.visibility = "hidden"
    listitem2.style.visibility = "hidden"
    listitem4.style.visibility = "hidden"
    listitem6.style.visibility = "hidden"
    listitem5.style.visibility = "visible"
    listitem7.style.visibility = "hidden"
    listitem8.style.visibility = "hidden"

})
let li6 = document.querySelector(".li6")
let listitem6 = document.querySelector(".listitem6")
li6.addEventListener("mousemove",()=>{
    listitem3.style.visibility = "hidden"
    listitem2.style.visibility = "hidden"
    listitem4.style.visibility = "hidden"
    listitem5.style.visibility = "hidden"
    listitem6.style.visibility = "visible"
    listitem7.style.visibility = "hidden"
    listitem8.style.visibility = "hidden"

})
let li7 = document.querySelector(".li7")
let listitem7 = document.querySelector(".listitem7")
li7.addEventListener("mousemove",()=>{
    listitem3.style.visibility = "hidden"
    listitem2.style.visibility = "hidden"
    listitem4.style.visibility = "hidden"
    listitem5.style.visibility = "hidden"
    listitem6.style.visibility = "hidden"
    listitem7.style.visibility = "visible"
    listitem8.style.visibility = "hidden"

})
let li8 = document.querySelector(".li8")
let listitem8 = document.querySelector(".listitem8")
li8.addEventListener("mousemove",()=>{
    listitem3.style.visibility = "hidden"
    listitem2.style.visibility = "hidden"
    listitem4.style.visibility = "hidden"
    listitem5.style.visibility = "hidden"
    listitem6.style.visibility = "hidden"
    listitem7.style.visibility = "hidden"
    listitem8.style.visibility = "visible"

})
// ------------------------------------------------------------
let fullCard1 = document.getElementById("fullCard1")
let coverly = document.getElementById("coverly")
let closBtnCart1 = document.getElementById("closBtnCart1")
let firstCard = document.getElementById("firstCard")
fullCard1.addEventListener("click",()=>{
    firstCard.classList.replace("popCard10","popCard1")
    coverly.classList.replace("cover0","cover")
})
closBtnCart1.addEventListener("click",()=>{
    firstCard.classList.replace("popCard1","popCard10")
    coverly.classList.replace("cover","cover0")

})
let otherImagges = document.querySelectorAll("#otherImagges")
let mainImgCov = document.getElementById("mainImgCov")
for(let i  = 0 ; i < otherImagges.length ; i++){
    otherImagges[i].onclick = changImage
}
function changImage(){
    let chang_src = this.getAttribute("src")
    mainImgCov.setAttribute("src", chang_src)


}
let codeTakhfif = document.getElementById("codeTakhfif")
let numOfThg = document.getElementById("numOfThg")
let priceWithOut = document.getElementById("priceWithOut")
let priceWith = document.getElementById("priceWith")
let mainPrice = document.getElementById("mainPrice")
let divTakh = document.getElementById("divTakh")
let sendNum = document.getElementById("sendNum")
let bagNum = +document.getElementById("bagNum").innerHTML
let bagNumf = document.getElementById("bagNum")
numOfThg.addEventListener("click" , ()=>{
    if( codeTakhfif.value == "4569"){
        priceWith.value = (numOfThg.value*mainPrice.innerHTML)-(numOfThg.value*mainPrice.innerHTML*0.2)
        priceWithOut.value = (numOfThg.value*mainPrice.innerHTML)
        codeTakhfif.style.color="black"
        
        


    }
    else if(codeTakhfif.value !== "4569" && codeTakhfif.value !== "" ){
        codeTakhfif.style.backgroundColor = "red"
        priceWith.value = 0
        priceWithOut.value = (numOfThg.value*mainPrice.innerHTML)


    }
    else if(codeTakhfif.value !== "4569" && codeTakhfif.value == "" ){
        // codeTakhfif.style.backgroundColor = "white"
        priceWith.value = 0
        priceWithOut.value = (numOfThg.value*mainPrice.innerHTML)


    }
    if(numOfThg.value <= 0){
        priceWith.value = ""
        priceWithOut.value = ""
        numOfThg.style.backgroundColor ="red"
        // priceWithOut.value 


    }
    else{
        numOfThg.style.backgroundColor ="white"

    }
    if(codeTakhfif.value == "4569"){
        codeTakhfif.style.pointerEvents="none"
        codeTakhfif.style.backgroundColor="white"
        codeTakhfif.style.color="black"
        divTakh.style.borderColor="green"
    }
})
sendNum.addEventListener("click",()=>{
    let num = numOfThg.value
    let num2 = +num
    bagNum = bagNum + num2
    bagNumf.innerHTML = bagNum
})
// -----------------------------------------------------------------------
let fullCard3 = document.getElementById("fullCard3")
let closBtnCart3 = document.getElementById("closBtnCart3")
let thirdCard = document.getElementById("thirdCard")
fullCard3.addEventListener("click",()=>{
    thirdCard.classList.replace("popCard30","popCard3")
    coverly.classList.replace("cover0","cover")
})
closBtnCart3.addEventListener("click",()=>{
    thirdCard.classList.replace("popCard3","popCard30")
    coverly.classList.replace("cover","cover0")

})
let otherImagges3 = document.querySelectorAll("#otherImagges3")
let mainImgCov3 = document.getElementById("mainImgCov3")
for(let i  = 0 ; i < otherImagges3.length ; i++){
    otherImagges3[i].onclick = changImage3
}
function changImage3(){
    let chang_src = this.getAttribute("src")
    mainImgCov3.setAttribute("src", chang_src)


}
let codeTakhfif3 = document.getElementById("codeTakhfif3")
let numOfThg3 = document.getElementById("numOfThg3")
let priceWithOut3 = document.getElementById("priceWithOut3")
let priceWith3 = document.getElementById("priceWith3")
let mainPrice3 = document.getElementById("mainPrice3")
let divTakh3 = document.getElementById("divTakh3")
let sendNum3 = document.getElementById("sendNum3")
bagNum = +document.getElementById("bagNum").innerHTML
bagNumf = document.getElementById("bagNum")
numOfThg3.addEventListener("click" , ()=>{
    if( codeTakhfif3.value == "4569"){
        priceWith3.value = (numOfThg3.value*mainPrice3.innerHTML)-(numOfThg3.value*mainPrice3.innerHTML*0.2)
        priceWithOut3.value = (numOfThg3.value*mainPrice3.innerHTML)
        codeTakhfif3.style.color="black"
    }
    else if(codeTakhfif3.value !== "4569" && codeTakhfif3.value !== "" ){
        codeTakhfif3.style.backgroundColor = "red"
        priceWith3.value = 0
        priceWithOut3.value = (numOfThg3.value*mainPrice3.innerHTML)
    }
    else if(codeTakhfif3.value !== "4569" && codeTakhfif3.value == "" ){
        priceWith3.value = 0
        priceWithOut3.value = (numOfThg3.value*mainPrice3.innerHTML)
    }
    if(numOfThg3.value <= 0){
        priceWith3.value = ""
        priceWithOut3.value = ""
        numOfThg3.style.backgroundColor ="red"
    }
    else{
        numOfThg3.style.backgroundColor ="white"
    }
    if(codeTakhfif3.value == "4569"){
        codeTakhfif3.style.pointerEvents="none"
        codeTakhfif3.style.backgroundColor="white"
        codeTakhfif3.style.color="black"
        divTakh3.style.borderColor="green"
    }
})
sendNum3.addEventListener("click",()=>{
    let num = numOfThg3.value
    let num2 = +num
    bagNum = bagNum + num2
    bagNumf.innerHTML = bagNum
})
// -----------------------------------------------------------------
let fullCard2 = document.getElementById("fullCard2")
let closBtnCart2 = document.getElementById("closBtnCart2")
let secondCard = document.getElementById("secondCard")
fullCard2.addEventListener("click",()=>{
    secondCard.classList.replace("popCard20","popCard2")
    coverly.classList.replace("cover0","cover")
})
closBtnCart2.addEventListener("click",()=>{
    secondCard.classList.replace("popCard2","popCard20")
    coverly.classList.replace("cover","cover0")

})
let otherImagges2 = document.querySelectorAll("#otherImagges2")
let mainImgCov2 = document.getElementById("mainImgCov2")
for(let i  = 0 ; i < otherImagges2.length ; i++){
    otherImagges2[i].onclick = changImage2
}
function changImage2(){
    let chang_src = this.getAttribute("src")
    mainImgCov2.setAttribute("src", chang_src)


}
let codeTakhfif2 = document.getElementById("codeTakhfif2")
let numOfThg2 = document.getElementById("numOfThg2")
let priceWithOut2 = document.getElementById("priceWithOut2")
let priceWith2 = document.getElementById("priceWith2")
let mainPrice2 = document.getElementById("mainPrice2")
let divTakh2 = document.getElementById("divTakh2")
let sendNum2 = document.getElementById("sendNum2")
bagNum = +document.getElementById("bagNum").innerHTML
bagNumf = document.getElementById("bagNum")
numOfThg2.addEventListener("click" , ()=>{
    if( codeTakhfif2.value == "4569"){
        priceWith2.value = (numOfThg2.value*mainPrice2.innerHTML)-(numOfThg2.value*mainPrice2.innerHTML*0.2)
        priceWithOut2.value = (numOfThg2.value*mainPrice2.innerHTML)
        codeTakhfif2.style.color="black"
    }
    else if(codeTakhfif2.value !== "4569" && codeTakhfif2.value !== "" ){
        codeTakhfif2.style.backgroundColor = "red"
        priceWith2.value = 0
        priceWithOut2.value = (numOfThg2.value*mainPrice2.innerHTML)
    }
    else if(codeTakhfif2.value !== "4569" && codeTakhfif2.value == "" ){
        priceWith2.value = 0
        priceWithOut2.value = (numOfThg2.value*mainPrice2.innerHTML)
    }
    if(numOfThg2.value <= 0){
        priceWith2.value = ""
        priceWithOut2.value = ""
        numOfThg2.style.backgroundColor ="red"
    }
    else{
        numOfThg2.style.backgroundColor ="white"
    }
    if(codeTakhfif2.value == "4569"){
        codeTakhfif2.style.pointerEvents="none"
        codeTakhfif2.style.backgroundColor="white"
        codeTakhfif2.style.color="black"
        divTakh2.style.borderColor="green"
    }
})
sendNum2.addEventListener("click",()=>{
    let num = numOfThg2.value
    let num2 = +num
    bagNum = bagNum + num2
    bagNumf.innerHTML = bagNum
})
// --------------------------------------------
let fullCard11 = document.getElementById("fullCard11")
let closBtnCart11 = document.getElementById("closBtnCart11")
let eleventhCard = document.getElementById("eleventhCard")
fullCard11.addEventListener("click",()=>{
    eleventhCard.classList.replace("popCard110","popCard11")
    coverly.classList.replace("cover0","cover")
})
closBtnCart11.addEventListener("click",()=>{
    eleventhCard.classList.replace("popCard11","popCard110")
    coverly.classList.replace("cover","cover0")

})
let otherImagges11 = document.querySelectorAll("#otherImagges11")
let mainImgCov11 = document.getElementById("mainImgCov11")
for(let i  = 0 ; i < otherImagges11.length ; i++){
    otherImagges11[i].onclick = changImage11
}
function changImage11(){
    let chang_src = this.getAttribute("src")
    mainImgCov11.setAttribute("src", chang_src)


}
let codeTakhfif11 = document.getElementById("codeTakhfif11")
let numOfThg11 = document.getElementById("numOfThg11")
let priceWithOut11 = document.getElementById("priceWithOut11")
let priceWith11 = document.getElementById("priceWith11")
let mainPrice11 = document.getElementById("mainPrice11")
let divTakh11 = document.getElementById("divTakh11")
let sendNum11 = document.getElementById("sendNum11")
bagNum = +document.getElementById("bagNum").innerHTML
bagNumf = document.getElementById("bagNum")
numOfThg11.addEventListener("click" , ()=>{
    if( codeTakhfif11.value == "4569"){
        priceWith11.value = (numOfThg11.value*mainPrice11.innerHTML)-(numOfThg11.value*mainPrice11.innerHTML*0.2)
        priceWithOut11.value = (numOfThg11.value*mainPrice11.innerHTML)
        codeTakhfif11.style.color="black"
    }
    else if(codeTakhfif11.value !== "4569" && codeTakhfif11.value !== "" ){
        codeTakhfif11.style.backgroundColor = "red"
        priceWith11.value = 0
        priceWithOut11.value = (numOfThg11.value*mainPrice11.innerHTML)
    }
    else if(codeTakhfif11.value !== "4569" && codeTakhfif11.value == "" ){
        priceWith11.value = 0
        priceWithOut11.value = (numOfThg11.value*mainPrice11.innerHTML)
    }
    if(numOfThg11.value <= 0){
        priceWith11.value = ""
        priceWithOut11.value = ""
        numOfThg11.style.backgroundColor ="red"
    }
    else{
        numOfThg11.style.backgroundColor ="white"
    }
    if(codeTakhfif11.value == "4569"){
        codeTakhfif11.style.pointerEvents="none"
        codeTakhfif11.style.backgroundColor="white"
        codeTakhfif11.style.color="black"
        divTakh11.style.borderColor="green"
    }
})
sendNum11.addEventListener("click",()=>{
    let num = numOfThg11.value
    let num2 = +num
    bagNum = bagNum + num2
    bagNumf.innerHTML = bagNum
})
// -----------------------------------------------------------------
let fullCard10 = document.getElementById("fullCard10")
let closBtnCart10 = document.getElementById("closBtnCart10")
let tenthCard = document.getElementById("tenthCard")
fullCard10.addEventListener("click",()=>{
    tenthCard.classList.replace("popCard100","popCard010")
    coverly.classList.replace("cover0","cover")
})
closBtnCart10.addEventListener("click",()=>{
    tenthCard.classList.replace("popCard010","popCard100")
    coverly.classList.replace("cover","cover0")

})
let otherImagges10 = document.querySelectorAll("#otherImagges10")
let mainImgCov10 = document.getElementById("mainImgCov10")
for(let i  = 0 ; i < otherImagges10.length ; i++){
    otherImagges10[i].onclick = changImage10
}
function changImage10(){
    let chang_src = this.getAttribute("src")
    mainImgCov10.setAttribute("src", chang_src)


}
let codeTakhfif10 = document.getElementById("codeTakhfif10")
let numOfThg10 = document.getElementById("numOfThg10")
let priceWithOut10 = document.getElementById("priceWithOut10")
let priceWith10 = document.getElementById("priceWith10")
let mainPrice10 = document.getElementById("mainPrice10")
let divTakh10 = document.getElementById("divTakh10")
let sendNum10 = document.getElementById("sendNum10")
bagNum = +document.getElementById("bagNum").innerHTML
bagNumf = document.getElementById("bagNum")
numOfThg10.addEventListener("click" , ()=>{
    if( codeTakhfif10.value == "4569"){
        priceWith10.value = (numOfThg10.value*mainPrice10.innerHTML)-(numOfThg10.value*mainPrice10.innerHTML*0.2)
        priceWithOut10.value = (numOfThg10.value*mainPrice10.innerHTML)
        codeTakhfif10.style.color="black"
    }
    else if(codeTakhfif10.value !== "4569" && codeTakhfif10.value !== "" ){
        codeTakhfif10.style.backgroundColor = "red"
        priceWith10.value = 0
        priceWithOut10.value = (numOfThg10.value*mainPrice10.innerHTML)
    }
    else if(codeTakhfif10.value !== "4569" && codeTakhfif10.value == "" ){
        priceWith10.value = 0
        priceWithOut10.value = (numOfThg10.value*mainPrice10.innerHTML)
    }
    if(numOfThg10.value <= 0){
        priceWith10.value = ""
        priceWithOut10.value = ""
        numOfThg10.style.backgroundColor ="red"
    }
    else{
        numOfThg10.style.backgroundColor ="white"
    }
    if(codeTakhfif10.value == "4569"){
        codeTakhfif10.style.pointerEvents="none"
        codeTakhfif10.style.backgroundColor="white"
        codeTakhfif10.style.color="black"
        divTakh10.style.borderColor="green"
    }
})
sendNum10.addEventListener("click",()=>{
    let num = numOfThg10.value
    let num2 = +num
    bagNum = bagNum + num2
    bagNumf.innerHTML = bagNum
})
// -------------------------------------------------------------
let fullCard5 = document.getElementById("fullCard5")
let closBtnCart5 = document.getElementById("closBtnCart5")
let fifthCard = document.getElementById("fifthCard")
fullCard5.addEventListener("click",()=>{
    fifthCard.classList.replace("popCard50","popCard5")
    coverly.classList.replace("cover0","cover")
})
closBtnCart5.addEventListener("click",()=>{
    fifthCard.classList.replace("popCard5","popCard50")
    coverly.classList.replace("cover","cover0")

})
let otherImagges5 = document.querySelectorAll("#otherImagges5")
let mainImgCov5 = document.getElementById("mainImgCov5")
for(let i  = 0 ; i < otherImagges5.length ; i++){
    otherImagges5[i].onclick = changImage5
}
function changImage5(){
    let chang_src = this.getAttribute("src")
    mainImgCov5.setAttribute("src", chang_src)


}
let codeTakhfif5 = document.getElementById("codeTakhfif5")
let numOfThg5 = document.getElementById("numOfThg5")
let priceWithOut5 = document.getElementById("priceWithOut5")
let priceWith5 = document.getElementById("priceWith5")
let mainPrice5 = document.getElementById("mainPrice5")
let divTakh5 = document.getElementById("divTakh5")
let sendNum5 = document.getElementById("sendNum5")
bagNum = +document.getElementById("bagNum").innerHTML
bagNumf = document.getElementById("bagNum")
numOfThg5.addEventListener("click" , ()=>{
    if( codeTakhfif5.value == "4569"){
        priceWith5.value = (numOfThg5.value*mainPrice5.innerHTML)-(numOfThg5.value*mainPrice5.innerHTML*0.2)
        priceWithOut5.value = (numOfThg5.value*mainPrice5.innerHTML)
        codeTakhfif5.style.color="black"
    }
    else if(codeTakhfif5.value !== "4569" && codeTakhfif5.value !== "" ){
        codeTakhfif5.style.backgroundColor = "red"
        priceWith5.value = 0
        priceWithOut5.value = (numOfThg5.value*mainPrice5.innerHTML)
    }
    else if(codeTakhfif5.value !== "4569" && codeTakhfif5.value == "" ){
        priceWith5.value = 0
        priceWithOut5.value = (numOfThg5.value*mainPrice5.innerHTML)
    }
    if(numOfThg5.value <= 0){
        priceWith5.value = ""
        priceWithOut5.value = ""
        numOfThg5.style.backgroundColor ="red"
    }
    else{
        numOfThg5.style.backgroundColor ="white"
    }
    if(codeTakhfif5.value == "4569"){
        codeTakhfif5.style.pointerEvents="none"
        codeTakhfif5.style.backgroundColor="white"
        codeTakhfif5.style.color="black"
        divTakh5.style.borderColor="green"
    }
})
sendNum5.addEventListener("click",()=>{
    let num = numOfThg5.value
    let num2 = +num
    bagNum = bagNum + num2
    bagNumf.innerHTML = bagNum
})
// ----------------------------------------------------------------------------------
let fullCard12 = document.getElementById("fullCard12")
let closBtnCart12 = document.getElementById("closBtnCart12")
let twelfthCard = document.getElementById("twelfthCard")
fullCard12.addEventListener("click",()=>{
    twelfthCard.classList.replace("popCard120","popCard12")
    coverly.classList.replace("cover0","cover")
})
closBtnCart12.addEventListener("click",()=>{
    twelfthCard.classList.replace("popCard12","popCard120")
    coverly.classList.replace("cover","cover0")

})
let otherImagges12 = document.querySelectorAll("#otherImagges12")
let mainImgCov12 = document.getElementById("mainImgCov12")
for(let i  = 0 ; i < otherImagges5.length ; i++){
    otherImagges12[i].onclick = changImage12
}
function changImage12(){
    let chang_src = this.getAttribute("src")
    mainImgCov12.setAttribute("src", chang_src)


}
let codeTakhfif12 = document.getElementById("codeTakhfif12")
let numOfThg12 = document.getElementById("numOfThg12")
let priceWithOut12 = document.getElementById("priceWithOut12")
let priceWith12 = document.getElementById("priceWith12")
let mainPrice12 = document.getElementById("mainPrice12")
let divTakh12 = document.getElementById("divTakh12")
let sendNum12 = document.getElementById("sendNum12")
bagNum = +document.getElementById("bagNum").innerHTML
bagNumf = document.getElementById("bagNum")
numOfThg12.addEventListener("click" , ()=>{
    if( codeTakhfif12.value == "4569"){
        priceWith12.value = (numOfThg12.value*mainPrice12.innerHTML)-(numOfThg12.value*mainPrice12.innerHTML*0.2)
        priceWithOut12.value = (numOfThg12.value*mainPrice12.innerHTML)
        codeTakhfif12.style.color="black"
    }
    else if(codeTakhfif12.value !== "4569" && codeTakhfif12.value !== "" ){
        codeTakhfif12.style.backgroundColor = "red"
        priceWith12.value = 0
        priceWithOut12.value = (numOfThg12.value*mainPrice12.innerHTML)
    }
    else if(codeTakhfif12.value !== "4569" && codeTakhfif12.value == "" ){
        priceWith12.value = 0
        priceWithOut12.value = (numOfThg12.value*mainPrice12.innerHTML)
    }
    if(numOfThg12.value <= 0){
        priceWith12.value = ""
        priceWithOut12.value = ""
        numOfThg12.style.backgroundColor ="red"
    }
    else{
        numOfThg12.style.backgroundColor ="white"
    }
    if(codeTakhfif12.value == "4569"){
        codeTakhfif12.style.pointerEvents="none"
        codeTakhfif12.style.backgroundColor="white"
        codeTakhfif12.style.color="black"
        divTakh12.style.borderColor="green"
    }
})
sendNum12.addEventListener("click",()=>{
    let num = numOfThg12.value
    let num2 = +num
    bagNum = bagNum + num2
    bagNumf.innerHTML = bagNum
})
// ---------------------------------------------------------------------------
let fullCard4 = document.getElementById("fullCard4")
let closBtnCart4 = document.getElementById("closBtnCart4")
let fourthCard = document.getElementById("fourthCard")
fullCard4.addEventListener("click",()=>{
    fourthCard.classList.replace("popCard40","popCard4")
    coverly.classList.replace("cover0","cover")
})
closBtnCart4.addEventListener("click",()=>{
    fourthCard.classList.replace("popCard4","popCard40")
    coverly.classList.replace("cover","cover0")

})
let otherImagges4 = document.querySelectorAll("#otherImagges4")
let mainImgCov4 = document.getElementById("mainImgCov4")
for(let i  = 0 ; i < otherImagges5.length ; i++){
    otherImagges4[i].onclick = changImage4
}
function changImage4(){
    let chang_src = this.getAttribute("src")
    mainImgCov4.setAttribute("src", chang_src)


}
let codeTakhfif4 = document.getElementById("codeTakhfif4")
let numOfThg4 = document.getElementById("numOfThg4")
let priceWithOut4 = document.getElementById("priceWithOut4")
let priceWith4 = document.getElementById("priceWith4")
let mainPrice4 = document.getElementById("mainPrice4")
let divTakh4 = document.getElementById("divTakh4")
let sendNum4 = document.getElementById("sendNum4")
bagNum = +document.getElementById("bagNum").innerHTML
bagNumf = document.getElementById("bagNum")
numOfThg4.addEventListener("click" , ()=>{
    if( codeTakhfif4.value == "4569"){
        priceWith4.value = (numOfThg4.value*mainPrice4.innerHTML)-(numOfThg4.value*mainPrice4.innerHTML*0.2)
        priceWithOut4.value = (numOfThg4.value*mainPrice4.innerHTML)
        codeTakhfif4.style.color="black"
    }
    else if(codeTakhfif4.value !== "4569" && codeTakhfif4.value !== "" ){
        codeTakhfif4.style.backgroundColor = "red"
        priceWith4.value = 0
        priceWithOut4.value = (numOfThg4.value*mainPrice4.innerHTML)
    }
    else if(codeTakhfif4.value !== "4569" && codeTakhfif4.value == "" ){
        priceWith4.value = 0
        priceWithOut4.value = (numOfThg4.value*mainPrice4.innerHTML)
    }
    if(numOfThg4.value <= 0){
        priceWith4.value = ""
        priceWithOut4.value = ""
        numOfThg4.style.backgroundColor ="red"
    }
    else{
        numOfThg4.style.backgroundColor ="white"
    }
    if(codeTakhfif4.value == "4569"){
        codeTakhfif4.style.pointerEvents="none"
        codeTakhfif4.style.backgroundColor="white"
        codeTakhfif4.style.color="black"
        divTakh4.style.borderColor="green"
    }
})
sendNum4.addEventListener("click",()=>{
    let num = numOfThg4.value
    let num2 = +num
    bagNum = bagNum + num2
    bagNumf.innerHTML = bagNum
})










