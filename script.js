let productsInCart = [['The sum is: ', 0], ['The sum is: ', 0], ['The sum is: ', 0]];

function addProduct(productPrice, addPrice){
    
    productsInCart = productsInCart.map((product)=>{
    return [product[0], addPrice(productPrice)];
   });

   let outputProcuct = document.createElement('div');
   let outPutTexet = document.createTextNode(productsInCart[0]);

   outputProcuct.appendChild(outPutTexet);  
   document.getElementById('myCart').appendChild(outputProcuct);
}   
   
function banana(add){
    return add + 5;
}
function pineapple(add){
    return add + 15;
}
function apple(add){
    return add + 6;
}


function reduceProduct(productPrice, addPrice){

    productsInCart = productsInCart.map((product)=>{
    return [product[0], addPrice(productPrice)];
   });

   let outputProcuct = document.createElement('div');
   let outPutTexet = document.createTextNode(productsInCart[0]);

   outputProcuct.appendChild(outPutTexet);  
   document.getElementById('myCart').appendChild(outputProcuct)
}



function bananaMinus(add){
    return add - 5;
}
function pineappleMinus(add){
    return add - 15;
}
function appleMinus(add){
    return add - 6;
}

//document.getElementById('myCart').innerHTML= '';










