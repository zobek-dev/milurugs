class ButtonRemove extends HTMLElement{
  constructor(){
    super();
    this.event = new Event('input', {bubbles:true})
    this.addEventListener('click', (event)=> {
      event.preventDefault();
      let cartItems = this.closest('cart-items')
      cartItems.querySelector('input[type="number"]').value = 0;
      cartItems.querySelector('input[type="number"]').dispatchEvent(this.event);
    })
  }
}

export default ButtonRemove;