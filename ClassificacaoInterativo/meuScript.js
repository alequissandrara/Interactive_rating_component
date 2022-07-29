var form = document.querySelector("form");
var span = document.querySelector("#span");
const card = document.querySelector('#card');
const card2 = document.querySelector('#card-2')


form.addEventListener("submit", function(event){

   var data = new FormData(form);
    var output = "";
    for(const entry of data){
      output = output  + entry[1] ;
    }
    span.innerText = output;
    card.classList.add('hide');
    card2.classList.remove('hide');
    event.preventDefault();//cancela o evento se for cancelável, sem parar a propagação do mesmo
  });