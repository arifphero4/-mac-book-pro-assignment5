
const buttonApplyPromo = document.getElementById('promo-code-button');

/* variables assignment */
const bestPrice = document.getElementById('best-price');
const extraMemoryCost = document.getElementById('memory-cost')
const extraStorageCost = document.getElementById('storage-cost');
const deliveryCharge =  document.getElementById('delivery-charge');
let totalPrice = document.getElementById('total-cost');
const finalTotal = document.getElementById('final-total');
const promoCodeInput = document.getElementById('promo-code-input');


//Memory
function memoryCost( memory){
if (memory == true){
  extraMemoryCost.innerText = 0;

}
else {
  extraMemoryCost.innerText = 180;
}
totalValue ();
}

//handle memory cost
 document.getElementById('8-gb-memory').addEventListener('click', function(){
   memoryCost(true);
   
 });
 document.getElementById('16-gb-memory').addEventListener('click', function(){
   memoryCost(false);
  
 });



 //Storage
 function storageCost (storage) {
  extraStorageCost.innerText = storage;
  totalValue ();
 }
 //handle storage cost
 document.getElementById('256-gb-storage').addEventListener('click', function(){
   storageCost (0);
   
 });
 document.getElementById('512-gb-storage').addEventListener('click', function(){
   storageCost(100);
   
 });
 document.getElementById('1-tb-storage').addEventListener('click', function(){
   storageCost(180);
   
 });


 //delivery charge

 function deliveryCost (delivery){
    if ( delivery == true){
      deliveryCharge.innerText = 0;
    }
    else {
      deliveryCharge.innerText = 20;
    }
    totalValue ();
 }
 document.getElementById('delivery-by-25').addEventListener('click', function (){
   deliveryCost (true);
   
 });
 document.getElementById('delivery-by-21').addEventListener('click', function(){
   deliveryCost (false);
  
 });


 // Total Price
 function totalValue (){
   const memoryCostText = extraMemoryCost.innerText;
   const memoryCostNumber = parseFloat(memoryCostText);
  
   const storageCostText = extraStorageCost.innerText;
   const storageCostNumber = parseFloat(storageCostText);

   const deliveryCostText = deliveryCharge.innerText;
   const deliveryCostNumber = parseFloat(deliveryCostText);

   const bestPriceText = bestPrice.innerText;
   const bestPriceNumber = parseFloat(bestPriceText);

   const allTotal = bestPriceNumber + memoryCostNumber + storageCostNumber + deliveryCostNumber;
   totalPrice.innerText = allTotal;
   finalTotal.innerText = allTotal;
 }

 //Promo Code
 function promoCode (){
  const promoCodeValue = promoCodeInput.value;
  if ( promoCodeValue == 'stevekaku'){
    const totalPrice = parseFloat(document.getElementById('total-cost').innerText);
    totalPrice = totalPrice - (totalPrice * 0.20);
    document.getElementById('final-total').innerText = totalPrice;
  }
  //clear promo code field 
  promoCodeInput.value = '';
  
 }


 /* //
document.getElementById('promo-code-button').addEventListener('click', function (){
  promoCode ();
}) */