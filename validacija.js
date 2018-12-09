var Validacija=(function(){
    //lokalne variable idu ovdje
    
    var konstruktor=function(divElementPoruke){
    
    return{
    ime:function(inputElement){ 
        var textInputElement = inputElement.value;
   
        var regex = /^([A-Z][']?[A-Za-z]+[A-Za-z']*[\s-]*){1,4}$/g;
        if(regex.test(textInputElement)){
            var imaLiDvaApostrofa = false;
         for(var i = 0; i < textInputElement.length-1; i++)
         {
             if(textInputElement.charAt(i) =="'" & textInputElement.charAt(i+1) =="'" )
             {
                 imaLiDvaApostrofa = true;
                 break;
             }
             
         }
         if(imaLiDvaApostrofa)
         {
            inputElement.style.backgroundColor = "orangered";
            if(divElementPoruke.innerHTML == "")
            {
                divElementPoruke.innerHTML="Sljedeća polja nisu validna: ime!"; 
                
            }
            else
            {
                divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/!/g, '')
                divElementPoruke.innerHTML +=",ime!";
            }
            
   
         }
         else
         {
             inputElement.style.backgroundColor = "white";
             
         }
        
        }
        else{
            inputElement.style.backgroundColor = "orangered";
            if(divElementPoruke.innerHTML == "")
            {
                divElementPoruke.innerHTML="Sljedeća polja nisu validna: ime!"; 
                
            }
            else
            {
                divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/!/g, '')
                divElementPoruke.innerHTML +=",ime!"; 
            }
            
            
            
        }
    },
    godina:function(inputElement){
        var textInputElement = inputElement.value;
   
        var regex = /^[ ]?20[0-9]{2}\/20[0-9]{2}[ ]?$/g;
        if(regex.test(textInputElement)){
            var izvuci = /\d+/g;
            niz = String(textInputElement).match(izvuci);
            if(Number(niz[0]) + 1 == Number(niz[1])){
                inputElement.style.backgroundColor = "white";
            }
            else{
                inputElement.style.backgroundColor = "orangered";
                if(divElementPoruke.innerHTML == "")
                {
                    divElementPoruke.innerHTML="Sljedeća polja nisu validna:godina!"; 
                    
                }
                else
                {
                    divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/!/g, '')
                    divElementPoruke.innerHTML +=",godina!";
                }
                
            }
        }
        else{
            inputElement.style.backgroundColor = "orangered";
            if(divElementPoruke.innerHTML == "")
            {
                divElementPoruke.innerHTML="Sljedeća polja nisu validna:godina!"; 
                
            }
            else
            {
                divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/!/g, '')
                divElementPoruke.innerHTML +=",godina!"; 
            }
            
        }
    },
    index:function(inputElement){
        var textInputElement = inputElement.value;
        var regex = /^[12]\d{4}(?!\S)$/g;
        if(regex.test(textInputElement)){
           if(textInputElement >= 14000 & textInputElement <=20999 )
           {
            inputElement.style.backgroundColor = "white";
           }
           else{
            inputElement.style.backgroundColor = "orangered";
            if(divElementPoruke.innerHTML == "")
            {
                divElementPoruke.innerHTML="Sljedeća polja nisu validna:index!"; 
                
            }
            else
            {
                divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/!/g, '')
                divElementPoruke.innerHTML +=",index!"; 
            }
            
        }
        }
        else{
            inputElement.style.backgroundColor = "orangered";
            if(divElementPoruke.innerHTML == "")
            {
                divElementPoruke.innerHTML="Sljedeća polja nisu validna:index!"; 
                
            }
            else
            {
                divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/!/g, '')
                divElementPoruke.innerHTML +=",index!"; 
            }
            
        }
    },
    password:function(inputElement){
        var textInputElement = inputElement.value;
        var regex = /^(?=.{8,})(((?=.*\d)(?=.*[A-Z]))|((?=.*\d)(?=.*[a-z]))|((?=.*[A-Z])(?=.*[a-z])))[A-Za-z\d]*$/g;
        if(regex.test(textInputElement)){
            inputElement.style.backgroundColor = "white";
        }
         else{
            inputElement.style.backgroundColor = "orangered";
            if(divElementPoruke.innerHTML == "")
            {
                divElementPoruke.innerHTML="Sljedeća polja nisu validna:password!"; 
                
            }
            else
            {
                divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/!/g, '')
                divElementPoruke.innerHTML +=",password!"; 
            }
            
        }
        
    },
    naziv:function(inputElement){
        var textInputElement = inputElement.value;
        var regex = /^[A-Za-z](?=.{2,})[A-a-z\d\\\/\-\"'!?:;,]*[\da-z]*$/gm;
                    
        if(regex.test(textInputElement)){
            inputElement.style.backgroundColor = "white";
        }
         else{
            inputElement.style.backgroundColor = "orangered";
            if(divElementPoruke.innerHTML == "")
            {
                divElementPoruke.innerHTML="Sljedeća polja nisu validna:naziv!"; 
                
            }
            else
            {
                divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/!/g, '')
                divElementPoruke.innerHTML +=",naziv!"; 
            }
            
        }

    },
    repozitorij:function(inputElement,regex){
            var textInputElement = inputElement.value;
         //   inputElement.style.backgroundColor = "orangered";
        
            if(regex.test(textInputElement)){
                inputElement.style.backgroundColor = "white";
            }
             else{
                inputElement.style.backgroundColor = "orangered";
                if(divElementPoruke.innerHTML == "")
                {
                    divElementPoruke.innerHTML="Sljedeća polja nisu validna:repozitorij!"; 
                    
                }
                else
                {
                    divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/!/g, '')
                    divElementPoruke.innerHTML +=",repozitorij!"; 
                }
                
            }
    },
    url:function(inputElement){
        var textInputElement = inputElement.value;
        var regex = /^(((https?)|(ftp)|(ssh)):\/\/)?([^.][a-z\.-]+\.[a-z\.]{2,6}|[\.]+)([\/:?=&#]{1}[\da-z\.-]+)*[\/\?]?$/igm;
                    
        if(regex.test(textInputElement)){
            inputElement.style.backgroundColor = "white";
        }
         else{
            inputElement.style.backgroundColor = "orangered";
            if(divElementPoruke.innerHTML == "")
            {
                divElementPoruke.innerHTML="Sljedeća polja nisu validna:url!"; 
                
            }
            else
            {
                divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/!/g, '')
                divElementPoruke.innerHTML +=",url!"; 
            }
            
        }
    }



 
    }
}   
    return konstruktor;
    }());

