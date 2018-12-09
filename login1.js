



function myFunction() {
    var mojDiv=document.getElementById("divZaPoruke");
   
     
    var inputIme = document.getElementById("inputic");
    var inputIme2 = document.getElementById("inputic2");
    var inputIme3 = document.getElementById("inputic3");
    var inputIme4 = document.getElementById("inputic4");
    var inputIme5 = document.getElementById("inputic5");
    var inputIme6 = document.getElementById("inputic6");
    var inputIme7 = document.getElementById("inputic7");


    
    
    var validacija = new Validacija(mojDiv);
    
   
    var x= document.getElementById("demo");
    x.innerHTML = "Hello World";
    x.style.backgroundColor = "orangered";
    mojDiv.innerHTML="";
    
   validacija.ime(inputIme);
   validacija.password(inputIme2);
   validacija.godina(inputIme3);
   validacija.repozitorij(inputIme4,/neko/g);
   validacija.index(inputIme5);
   validacija.naziv(inputIme6);
   validacija.url(inputIme7);


 
  }