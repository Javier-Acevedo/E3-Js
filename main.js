

const boton = document.querySelector('#boton').addEventListener('click', captura );
const h2 =document.querySelector('#name');
const h3 =document.querySelector('#price');
const p =document.querySelector('#ingred');
const div =document.querySelector('#imagen'); 
//const card =document.querySelector('#card'); 

// const inicio =  localStorage.getItem ('screen');

// if (!inicio) {
//   console.log('contenido vacio');
// } else {
//   //console.log (inicio);
  
//  // card.innerHTML = inicio;
//   renderPizza(contenido);
//   // clear ();

//}

class Pizza {
  constructor (id,nombre,[...ingredientes],precio){  
    this.id = id;
    this.nombre = nombre;
    this.ingredientes = [ingredientes];
    this.precio = precio;
  }
}

const muzza = new Pizza(1,'muzzarella',["queso","salsa","aceitunas"],1000);
const napo = new Pizza(2,'napolitana',["queso","salsa","tomateEnRodajas"],1200);
const fuga = new Pizza(3,'fugazzeta',["queso","salsa","cebolla","aceitunas"],1500);
const cala = new Pizza(4,'calabresa',["queso","salsa","cantimpalo","aceitunas"],2000);
const jaMorron = new Pizza(5,'jamonMorrones',["queso","jamon","morrones","aceitunas"],1800);
const especial = new Pizza(6,'especial',["queso","salsa","milanesa"],2000);


let comida = [muzza,napo,fuga,cala,jaMorron,especial];
function captura() {
    const ID = document.querySelector('#campo').value;
    const IdNumber = parseInt (document.querySelector('#campo').value);
    comida.forEach (element =>{
      // console.log('valor ingresado',ID);
      
     if (IdNumber === element.id)
            {
               //clear ();
               //console.log('este es p', p.textContent);
               //.log ('este es h2',h2.textContent);
               //.log ('este es h3',h3.textContent);
               p.textContent = 'Ingredientes: ' + element.ingredientes;
               h2.textContent = 'Pizza tipo: '+ element.nombre; 
               h3.textContent = 'Precio: $'+ element.precio;
               renderPizza(element.nombre);
               //savePizza (element,nombre);
               
              }

     else if (ID=== '') 
               {
               //card.innerHTML = '<div id="imagen" class="imagen"><img src=""></div><h2 id="name"></h2><p id="ingred"></p><h3 id="price"></h3>'
               h2.textContent = 'ERROR'; 
               h3.textContent = 'NO INGRESO VALOR';
               p.textContent = '';
               renderPizza('');
               
              }

     else if (ID > element.id || ID <=0) 
              {
                //clear ();
                h2.textContent = 'ERROR'; 
                h3.textContent = 'VALOR INVALIDO';
                p.textContent = '';
                renderPizza('');
              }
          })
  }
const renderPizza = (nombrePizza) => {
  // console.log(nombrePizza);
  if (!nombrePizza){
    div.innerHTML = '<p></p>';
  }else {
    div.innerHTML = '<img src="./assets/img/'+ nombrePizza +'.png" alt="imagen pizza">'
  }
}

// const savePizza = (guardar) => {
//          let contenido = guardar
//          localStorage.setItem('screen',contenido);
// }

// const clear = () =>{
//       //const blank = localStorage.removeItem('screen');
//       h2.textContent = ''; 
//       h3.textContent = '';
//       p.textContent = '';
               
//       //'<div id="imagen" class="imagen"><img src=""></div><h2 id="name"></h2><p id="ingred"></p><h3 id="price"></h3>'

// }
