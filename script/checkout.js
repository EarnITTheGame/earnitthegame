let listCart = [];
function checkCart(){
        var cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('listCart='));
        if(cookieValue){
            listCart = JSON.parse(cookieValue.split('=')[1]);
        }
}
checkCart();
addCartToHTML();
function addCartToHTML(){
    let listCartHTML = document.querySelector('.list');
    listCartHTML.innerHTML = '';
    let totalQuantityHTML = document.querySelectorAll('.totalQuantity');
    let totalPriceHTML = document.querySelectorAll('.totalPrice');
    let totalQuantity = 0;
    let totalPrice = 0;
    if(listCart){
        listCart.forEach(product => {
            if(product){
                let newCart = document.createElement('div');
                listCartHTML.appendChild(newCart);
                totalQuantity = totalQuantity + product.quantity;
                totalPrice =(Math.round((product.price * product.quantity) * 100) / 100).toFixed(2);
            }
        })
    }
    totalQuantityHTML[0].value = totalQuantity;
    totalQuantityHTML[1].value = totalQuantity;
    totalPriceHTML[0].value = totalPrice;
    totalPriceHTML[1].value = totalPrice;
}
