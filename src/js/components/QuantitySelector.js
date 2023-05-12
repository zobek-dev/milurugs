class QuantitySelector extends HTMLElement{
  constructor(){
    super();
    this.input = this.querySelector('input[name="quantity"]');
    this.plus = this.querySelector('button[name="plus"]');
    this.minus = this.querySelector('button[name="minus"]'); 
    this.event = new Event('input', {bubbles:true});

    this.bindEvents();
  }

  bindEvents(){
    this.plus.addEventListener('click', this.handleClicks.bind(this))
    this.minus.addEventListener('click', this.handleClicks.bind(this))
  }

  handleClicks(event){ 
    event.target.name === 'plus' ? this.input.stepUp(): this.input.stepDown();
    this.input.dispatchEvent(this.event);
  } 
}

export default QuantitySelector;