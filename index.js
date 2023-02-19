let submit = document.querySelector("#submit")
let number = document.querySelector("#number")
let password = document.querySelector("#password")
let container = document.querySelector(".containerm")
let deshbord = document.querySelector("#deshbord")
let hide = document.querySelector("#hide-eye")



    let user = {}
    let inpho = {number:12345,password:12345678}

submit.addEventListener("click",(e)=>{
e.preventDefault()

     user.number = number.value
     user.password= password.value
     if(user.number == inpho.number && user.password == inpho.password){
     console.log(user)
    console.log("this is valid number")

    container.style.display="none"
    deshbord.style.display = "block"
}else if(user.number != inpho.number){
    alert("this is invalid number")
    number.value = ''
  
 }else if(user.password != inpho.password){
   
    alert("this is invalid password")
    password.value = ''
 }
 

})


password.addEventListener("click",()=>{
 
 if(password.type == "password"){
    password.type = "text"
 }else{
    password.type = "password"
 }
})





// cash bord

// selection

let deposit = document.querySelector("#diposit")
let dipositcash = document.querySelector("#dipositcash")
let withdrow = document.querySelector("#withdrow")
let withdrowcash = document.querySelector("#withdrowcash")
let balance = document.querySelector("#balance")
let logout = document.querySelector("#logout");


// for diposit 




deposit.addEventListener("click",(e)=>{
    let taka =  Number(dipositcash.value)
 
    // if(taka === e)
    let mybalace = Number(balance.innerHTML) + taka

    balance.innerHTML = mybalace
   

}
 )



//  withdrow mehtod 

withdrow.addEventListener("click",()=>{

    if(balance.innerHTML>0){
      balance.innerHTML =balance.innerHTML-withdrowcash.value

  }else{
    balance.innerHTML = 0
  }

})


logout.addEventListener("click",()=>{
    container.style.display = "flex";
    deshbord.style.display= "none";
    number.value =''
    password.value = ''
    
})





