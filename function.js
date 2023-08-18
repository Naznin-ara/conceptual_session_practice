let total = 0;
let quantity = 0;
let existingcart =[];
function addTocart(target){
    const name = target.parentNode.childNodes[3].innerText;
    const price = target.parentNode.childNodes[5].innerText.split(" ")[1];
    if(!existingcart.includes(name)){
        existingcart.push(name);
    }
    total = parseInt(total) + parseInt(price);
    const  flowername = document.getElementById('flowername');
    const totaltext=document.getElementById('total');
    let count = flowername.childElementCount;
  let quantitytext = document.getElementById('quantitytext');
  const div = document.createElement('div');
   div.classList.add('cart');

   div.innerHTML = `<p>${count + 1}. ${name}</p>
   <p id="quantitytext">1</p>
   <p>${price}</p>`;
   flowername.appendChild(div);

   existingcart.forEach(e =>{
    console.log
   })
    
const itemname = div.childNodes[0].innerText.split(". ")[1];
  

   
let itemamount = div.childNodes[2].innerText;
quantity = quantity + parseInt(itemamount);

 if(quantity>1){
    div.innerHTML = `<p>${count + 1}. ${name}</p>
   <p id="quantitytext">${quantity}</p>
   <p>${price}</p>`;
   
 }else{
    div.innerHTML = `<p>${count + 1}. ${name}</p>
    <p id="quantitytext">1</p>
    <p>${price}</p>`;
 }
 totaltext.innerText = total;


console.log(existingcart);
  
 
}

// function addTocart(target) {
//     const name = target.parentNode.childNodes[3].innerText;
//     const price = parseInt(target.parentNode.childNodes[5].innerText.split(" ")[1]);
//     total += price; // Update the total price

//     const flowername = document.getElementById('flowername');
//     const totaltext = document.getElementById('total');
    
//     let existingCartItem = null;
    
//     // Check if the same flower is already in the cart
//     for (const cartItem of flowername.childNodes) {
//         const cartItemName = cartItem.childNodes[0].innerText.split('. ')[1];
//         if (cartItemName === name) {
//             existingCartItem = cartItem;
//             break;
//         }
//     }
    
//     if (existingCartItem) {
//         const quantityElement = existingCartItem.childNodes[1];
//         let quantity = parseInt(quantityElement.innerText) + 1;
//         quantityElement.innerText = quantity; // Update the quantity
//     } else {
//         const div = document.createElement('div');
//         div.classList.add('cart');
//         div.innerHTML = `<p>${flowername.childElementCount + 1}. ${name}</p>
//         <p class="quantity">1</p>
//         <p>${price}</p>`;
//         flowername.appendChild(div);
//     }
    
//     totaltext.innerText = total.toFixed(2); // Update the total with two decimal places
// }

