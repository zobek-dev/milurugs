class SearchModal extends HTMLElement{
  constructor(){
    super(); 
    this.button = document.querySelector('#search-modal-toggle');  
    this.close = document.querySelector('#search-modal-close');
    this.search = this.querySelector('#Search');
    // this.index = null;

    this.bindEvents();
  }

  bindEvents(){
    this.button.addEventListener('click', this.handleClick.bind(this));
    this.close.addEventListener('click', this.toggleModal.bind(this));

    window.addEventListener('click', (event) => {
      if(event.target.matches('.search-modal')) this.toggleModal();
    });

    window.addEventListener('keyup', (event) => {
      if(this.classList.contains('active') && event.key.toUpperCase() === 'ESCAPE'){
        this.toggleModal();
      }
    })
  }

  handleClick(event){ 
    event.preventDefault();
    this.toggleModal();
  }

  toggleModal(){
    this.classList.toggle('active');
    this.button.ariaExpanded == 'false' ? this.button.setAttribute('aria-expanded', true) : this.button.setAttribute('aria-expanded', false);
    if(this.classList.contains('active')){
      setTimeout(()=>{
        this.search.click();
      })
    }else{
      this.querySelector('#predictive-search').style.display = 'none';
      this.search.value='';
    }
  }
}

export default SearchModal;