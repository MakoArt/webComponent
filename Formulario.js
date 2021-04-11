class Formulario extends HTMLElement{

    constructor(){
        super();
    }
    //como el component willmount 
    connectedCallback(){
     //    this.innerHTML=`<div><button>Comprar Ahora</button></div>`
     let shadowRoot=this.attachShadow({mode:'open'});
     shadowRoot.innerHTML=`     
      
     <style>
      :host{
        
      }
      
      .container{
          display:flex;
          justify-content:center;
          width:100%;
          height:500px;
          background:linear-gradient(90deg,#ED375E,#611626)
      }
      h3{
          text-align:center;
          color:white;
      }
       input[type="submit"]{
       
          margin-top:40px;
          width:100%;
          height:40px;
          box-shadow:9px 9px 19px 2px #321626;
          background-color:#7A1626;
      }
      input[type="text"]{
          height:30px;
          text-align:center;
      }



 
     </style>
      
     
     <div class="container">
      <form>
       <h3>Nombre</h3>
       <input type="text" name="text" placeholder="name">
       <h3>Apellidos</h3>
       <input type="text" name="text" placeholder="Surname"><br>
     <input type="submit">
      </form>
      </div>
     `
 
    }
 
     //codigo js 
 
 }
 window.customElements.define('formulario-component',Formulario)
 
 
 // HTMLElement posee métodos de ciclo 
 // de vida, como también tienen librerías
 //  como React. Son los siguientes:
 
 
 
 // connectedCallback: Se llama cada vez que 
 // el elemento se inserta en el DOM. Aquí podemos 
 // hacer llamadas AJAX para pedir datos, 
 // configurar cosas, etc.. 
 // Funcionaría similar al componentWillMount de React.js
 
 
 
 // disconnectedCallback: Este método se llamaría 
 // cuando el componente es eliminado del DOM.
 //  Su comparación con React sería el
 //   método componentWillUnmount
 
 
 
 
 
 
 // attributeChangedCallback: Este otro método se 
 // llamaría cuando se añadiera un nuevo atributo,
 //  se actualizase o se eliminara. Algo similar a 
 //  componentWillReceiveProps, shouldComponentUpdate, 
 //  componentDidUpdate en React.