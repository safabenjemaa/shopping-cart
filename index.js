// alert("Hello from Shopping Cart");


let plus = document.getElementsByClassName('plus-btn');

 
 for ( let btn of plus){
 
     btn.addEventListener('click',function(){
 
    btn.nextElementSibling.value ++
    sum(); 
 
     })
 }



 let buttonsminus = document.getElementsByClassName('minus-btn');

 
 for ( let btminus of buttonsminus){
    console.log(btminus.previousElementSibling.value)
     btminus.addEventListener('click',function() {
     if(btminus.previousElementSibling.value > 0) {
        btminus.previousElementSibling.value --; 
     }

     sum(); 
  });
 }
 function sum(){
     let quantity = document.getElementsByClassName('qte');
     let price= document.getElementsByClassName ('total-price');
     let sum = 0;
     for(let i = 0; i < quantity.length; i++) {
         sum += quantity[i].value * price[i].innerHTML;

     }
     document.getElementsByClassName("price")[0].innerHTML = " : $"+ sum;
 }

//  let quantity = document.getElementsByClassName('quantity');
//  console.log(quantity)
//  let price= document.getElementsByClassName ('total-price');
//  console.log(price) 
// }
let buttonsdelete =document.getElementsByClassName('delete-btn');
for(let btnsdelete of buttonsdelete) {
    btnsdelete.addEventListener('click', function() {
        btnsdelete.parentNode.parentNode.remove()
    })
}

let hearts = document.getElementsByClassName('likebtn') ;
for (let like of hearts ) {
    like.addEventListener('click', function (){
    if(like.style.fill==="red"){
        like.style.fill="black"
    }  else {like.style.fill="red"}
        
    //  like.style.fill="red"
})
    }