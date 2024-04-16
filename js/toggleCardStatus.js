function toggleCardStatus(){
    const cartEmpty =document.querySelector('[data-cart-empty]')
    const cartWrapper = document.querySelector('.cart-wrapper');
    const orderForm = document.querySelector('#order-form');
    
    if (cartWrapper.children.length > 0){
        cartEmpty.classList.add('none');
        orderForm.classList.remove('none');
    } else{
        cartEmpty.classList.remove('none');
        orderForm.classList.add('none');
    }
}