import { cities } from './utilities';

class ShippingSelector extends HTMLElement{
  constructor(){
    super();
    this.province = this.querySelector('#select-province');
    this.city = this.querySelector('#select-city');
    this.interfase = this.querySelector('#comuna-interfase');
    this.form = document.querySelector('#Cart-Drawer-Form');
    
    this.bindEvents();
  }

  bindEvents(){
    this.province.addEventListener('input', this.handleSelect.bind(this));
    this.city.addEventListener('input', this.cityHandler.bind(this));   
  }

  handleSelect(event){
    this.city.innerHTML = '';
    let province = event.target.value;
    let list = cities[province]
    let element = document.createElement('option');
    element.setAttribute('selected', true);
    element.setAttribute('disabled', true);
    element.innerText = 'Selecciona una Comuna'
    this.city.appendChild(element);

    for(let item in list){
      let option = document.createElement('option');
      option.value = list[item];
      option.textContent = list[item];
      this.city.appendChild(option)
    }
    this.interfase.classList.remove('hidden');
    this.interfase.classList.add('flex');
  }

  cityHandler(){
    let province = this.province.value;
    let city = this.city.value.replace(' ', '%20'); 

    let queryString = `?step=contact_information&checkout[shipping_address][country]=CL&checkout[shipping_address][province]=${province}&checkout[shipping_address][city]=${city}`;

    this.form.setAttribute('action', '/cart' + queryString);
  }
}

export default ShippingSelector;