// Tenemos problemas con el funcionamiento del sort, debemos encontrar una forma de manejar los formularios

import { debounce } from './utilities';

class FilterForm extends HTMLElement{
  constructor(){
    super();
    this.inputs = this.querySelectorAll('[id^="Filter-Desktop-"], [id^="Filter-Mobile-"]')
    this.loader = document.querySelector('#loading-overlay');
    this.grid = document.querySelector('#product-grid-container');
    this.sort = document.querySelector('#sort-by');
    this.activeDesktop = document.querySelector('#active-desktop');
    this.activeMobile = document.querySelector('#active-mobile');

    this.bindEvents();
  }

  bindEvents(){
    this.inputs.forEach(input => input.addEventListener('input', this.handleInput.bind(this)));
    this.sort.addEventListener('input', this.handleInput.bind(this));
  }

  handleInput(event){ 
    let input = event.target;
    debounce(this.fetchData(input), 300);  
  } 
  
  fetchData(input){
    this.loader.classList.remove('hidden');
    console.log(input.type)

    let form = input.id.includes('Filter-Desktop') ? this.querySelector('form#Filter-Desktop') : this.querySelector('form#Filter-Mobile');
    let handler = this.dataset.handle;
    let template = this.dataset.template === 'collection' ? this.dataset.template + 's' : this.dataset.template;
   console.log(form)
    let queryParams = new URLSearchParams(new FormData(form)).toString();
    let sortBy = document.querySelector('#sort-by').value;
      
    let url = template === 'collections' ? `/${template}/${handler}?${queryParams}&sort_by=${sortBy}`: `${handler}?${queryParams}&sort_by=${sortBy}`
    
    fetch(url)
    .then(response => response.text())
    .then(data => {
      const div = document.createElement('div');
      div.innerHTML=data;
     
      let selector = form.id === 'Filter-Desktop' ? 'Filter-Desktop' : 'Filter-Mobile';  

      let updatedGrid = div.querySelector('#product-grid-container').innerHTML;
      let updatedTagsDesktop = div.querySelector('#active-desktop').innerHTML;
      let updatedTagsMobile = div.querySelector('#active-mobile').innerHTML;
      let formToUpdate = div.querySelector(`form#${selector}`).innerHTML;

      this.grid.innerHTML = updatedGrid; 
      this.activeDesktop.innerHTML = updatedTagsDesktop;
      this.activeMobile.innerHTML = updatedTagsMobile;
      document.querySelector(`form#${selector}`).innerHTML = formToUpdate;
      
      history.replaceState(null,null,url);
    })
    .catch(error => console.error(error))
    .finally(()=>{
      this.loader.classList.remove('hidden');
    })
  }
}

export default FilterForm;