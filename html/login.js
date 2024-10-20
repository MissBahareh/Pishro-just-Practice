let username = document.getElementById("username")
let password = document.getElementById("password")
let seded = document.getElementById("seded")
username.addEventListener("keyup",(event)=>{
    if(event.keyCode == 9){
        if(username.value.trim() !== ""  ){
            username.style.backgroundColor ="rgb(232,240,254)" 
        }
        if(username.value == "Bahareh"  ){
            username.style.backgroundColor ="rgb(232,240,254)" 

        }
        else{
            username.style.backgroundColor ="red"
        }   
    }
    else{
        username.style.backgroundColor ="rgb(232,240,254)" 

    }
   
})
password.addEventListener("keyup",(event)=>{
    if(event.keyCode == 9){
        if(password.value.trim() !== "" ){
            password.style.backgroundColor ="rgb(232,240,254" 
        }
        else if(password.value == "1374" ){
            password.style.backgroundColor ="rgb(232,240,254" 

        }
        else{
            password.style.backgroundColor ="red"
        }
    }
    else{
        password.style.backgroundColor ="rgb(232,240,254)" 

    }
})
seded.addEventListener("keyup",(event)=>{
    if(event.keyCode == 9){
        if(username.value!=="Bahareh"){
            username.style.backgroundColor ="red" 
        }
        else if(username.value.trim() ==""){
            username.style.backgroundColor ="red"
            username.value = ""
            
            

        }
        else{
            username.style.backgroundColor ="rgb(232,240,254)"
            

        }
        if(password.value !== "1374"){
            password.style.backgroundColor ="red" 
            
        }
        else if(password.value.trim() ==""){
            password.style.backgroundColor ="red" 
            password.value = ""

        }
        else{
            password.style.backgroundColor ="rgb(232,240,254)"
            

        }
    }

})


username.addEventListener("click",()=>{
    if(username.value.trim() !== "" && username.value == "Bahareh" ){
        username.style.backgroundColor ="rgb(232,240,254)" 
    }
    else{
        username.style.backgroundColor ="red"
    } 
   
})
password.addEventListener("click",()=>{
    if(password.value.trim() !== ""&& password.value == "1374"  ){
        password.style.backgroundColor ="rgb(232,240,254)" 
        
    }
    else{
        password.style.backgroundColor ="red"
    }
})

seded.addEventListener("click",()=>{    
    if(username.value == "Bahareh" && username.value.trim() !== ""){
        username.style.backgroundColor ="rgb(232,240,254)" 
        username.value = ""
        
        
        
        
    }
    if(password.value == "1374" && password.value.trim() !==""){
        password.style.backgroundColor ="rgb(232,240,254)" 
        password.value = ""

         
        
    }
    else{        
        username.style.backgroundColor ="red"
        password.style.backgroundColor ="red" 
    }
    
    
       
})



