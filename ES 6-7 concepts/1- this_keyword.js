let nepal = {
  //add property
  mountains: ['Everest', 'Fitz Roy', 'Fish Tail'],
  // add method
  printWithDash: function(){
    setTimeout(function() {
      console.log(this.mountains.join(" - "))
    },3000)
  }
}

alert(nepal.mountains);
nepal.printWithDash(); //--> falla por el this.mountains, ¿a dónde apunta?


//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
let nepal = {
  //add property
  mountains: ['Everest', 'Fitz Roy', 'Fish Tail'],
  // add method
  printWithDash: function(){
    console.log('this, inside printWithDash', this); //1
    setTimeout(function() {
      console.log('this, inside setTimeout', this); //2
    },3000)
  }
}

//en 1) apunta al contexto interno, en 2) aputna al global
//las arrow functions en cambio, no tienen su propio contexto, entonces toman el contexto de donde están

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

let nepal = {
  //add property
  mountains: ['Everest', 'Fitz Roy', 'Fish Tail'],
  // add method
  printWithDash: function(){
    setTimeout(() => {console.log(this.mountains.join(" - "))},3000)
  }
}