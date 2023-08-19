let total = 0;
let quantity= 0;
let existingcart =[];

function addTocart(target){
    const name = target.parentNode.childNodes[3].innerText;
    const price = target.parentNode.childNodes[5].innerText.split(" ")[1];
    const  flowername = document.getElementById('flowername');
    const totaltext=document.getElementById('total');
    let count = flowername.childElementCount;
    
    
    if(!existingcart.includes(name)){
        existingcart.push(name);
        const div = document.createElement('div');
        div.classList.add('cart');
        div.innerHTML = `<p>${count + 1}. ${name}</p>
        <p id="quantitytext">1</p>
        <p>${price}</p>`;
       flowername.appendChild(div);
       
    }

    let quantitytext = document.getElementById('quantitytext');
    quantitytext.innerText = quantity++;
   
    total = parseInt(total) + parseInt(price);
  
    totaltext.innerText = total;
    
    
    
   //  let itemamount = div.childNodes[2].innerText;
   //  quantity = quantity + parseInt(itemamount);
   //  quantitytext.innerText = quantity;
          


console.log(quantity);
  
 
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

