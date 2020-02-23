function Grandtotal()
{
     let Total=parseFloat(document.querySelector('#total').value)
     let Rate=parseFloat(document.querySelector('#rate').value)
         
     let Tip=Total*(Rate/100)
     let Tax=Total*(5.50/100)
     let GrandTotal=Total+Tip+Tax;

     document.getElementById("tip").innerHTML = Tip.toFixed(2);
    
     document.getElementById("grandtotal").innerHTML = GrandTotal.toFixed(2);
     
}