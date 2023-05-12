class BillingSelector extends HTMLElement{
  constructor(){
    super();
    this.inputs = this.querySelectorAll('input[id^="Documento-"]');
    this.interfase = this.querySelector('#billing-form');
    this.userMessage = this.querySelector('#user-message');
    this.rut = this.querySelector('input#rut')
  
    this.bindEvents();
  }

  bindEvents(){
    this.inputs.forEach(input => input.addEventListener('input', this.handleType.bind(this)));
    // this.rut.addEventListener('input', this.handleRut.bind(this));
  }

  handleType(event){
   event.target.value === 'factura' ? this.interfase.classList.remove('hidden') : this.interfase.classList.add('hidden');
  }

  // handleRut(event){
  //   let valid=false;
  //   let valor = event.target.value.replace('.','').replace('-','')
  //   let cuerpo = valor.slice(0,-1);
  //   let dv = valor.slice(-1).toUpperCase();
  //   this.rut.value = cuerpo + '-' + dv;

  //   if(cuerpo.length < 7){
  //     this.userMessage.classList.remove('hidden');
  //     this.userMessage.firstElementChild.textContent = 'Rut incompleto';
  //     valid=false;
  //   }  
  //   let suma = 0;
  //   let multiplo= 2;

  //   for(let i = 1; i<cuerpo.length; i++){
  //     index = multiplo * valor.charAt(cuerpo.length - i);
  //     suma += index;
  //     multiplo < 7 ? multiplo += 1 : multiplo = 0
  //   }

  //   let dvEsperado = 11 - (suma % 11);
  //   dv = (dv == 'K') ? 10 : dv;
  //   dv = (dv == 0 ) ? 11 : dv;
    
  //   if(dvEsperado != dv){
  //     this.userMessage.classList.remove('hidden');
  //     this.userMessage.firstElementChild.textContent = 'Rut incompleto';
  //   }else{
  //     this.userMessage.classList.add('hidden');
  //     this.userMessage.firstElementChild.textContent = '';
  //   }
  // }
}


// var valor = rut.value.replace('.','');
// valor     = valor.replace('-','');
// cuerpo    = valor.slice(0,-1);
// dv        = valor.slice(-1).toUpperCase();
// rut.value = cuerpo + '-'+ dv;
// if(cuerpo.length < 7) {
//   $(this).addClass('invalido').removeClass('valido');
//   rut.setCustomValidity("RUT Incompleto"); return false;
// } else {
//   $(this).addClass('valido').removeClass('invalido');
// }
// suma     = 0;
// multiplo = 2;
// for (i = 1; i <= cuerpo.length; i++) {
//   index = multiplo * valor.charAt(cuerpo.length - i);
//   suma  = suma + index;
//   if (multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }
// }
// dvEsperado = 11 - (suma % 11);
// dv         = (dv == 'K') ? 10 : dv;
// dv         = (dv == 0) ? 11 : dv;
// // Validar que el Cuerpo coincide con su Dígito Verificador
// if(dvEsperado != dv) {
//   $(this).addClass('invalido').removeClass('valido');
//   rut.setCustomValidity("RUT Inválido");
//   return false;
// } else {
//   $(this).addClass('valido').removeClass('invalido');
// }
// // Si todo sale bien, eliminar errores (decretar que es válido)
// rut.setCustomValidity('');
// });
// } else {
// setTimeout(function() { defer(method) }, 50);
// }
export default BillingSelector;