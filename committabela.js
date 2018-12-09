
   var CommitTabela=(function(){
    var tblBody;
    var brojaci = [];
    
    
    var konstruktor = function(divElement, brojZadataka){
        var tbl = document.createElement("table");
        tblBody = document.createElement("tbody"); 
        for(var k= 0; k < brojZadataka; k++)
        {
            brojaci[k]=0;
        }
        for (var i = 0; i <= brojZadataka; i++) {
          var row = document.createElement("tr");
          var cellText;
          for (var j = 0; j < 2; j++) {
            var cell = document.createElement("td");
            if(i == 0 & j == 0)
                 cellText = document.createTextNode("Zadaci");
                 else if(i == 0 & j==1)
                 cellText = document.createTextNode("Commiti");
            else if(j == 0)
                 cellText = document.createTextNode("Zadatak" + (i));
                 else{
                     cellText = document.createTextNode("");
                 }
         
         
            cell.appendChild(cellText);
            row.appendChild(cell);
          }
            tblBody.appendChild(row);
        }
        tbl.appendChild(tblBody);
        divElement.appendChild(tbl);
        return{

            dodajCommit:function(rbZadatka,url){
               
                if(rbZadatka < brojZadataka & rbZadatka >= 0 ){
                    rbZadatka++;
                var cellText = tbl.rows[rbZadatka].cells.length-1; //
                
                var row = tbl.rows[rbZadatka]; // red u koji cu dodat
                var x= row.cells[cellText]; // bas ta celija (zadnja)
                if(x.innerHTML == "")
                {
                    if(x.colSpan == 1) // prvi commit u redu ili red ima manje jedan komit od reda sa najvise komita
                    {
                       // x.innerHTML = cellText;//<a href="https://bitbucket.org/">cellText</a>;
                        x.innerHTML = "<a href="+url+">" + ++brojaci[rbZadatka]+ "</a>";
                    }
                    else // ako je colspan veci
                    {
                       y = row.insertCell(-1);
                       y.innerHTML = "";
                       y.colSpan = x.colSpan - 1;
                       x.colSpan = 1;
                       x.innerHTML = "<a href="+url+">" + ++brojaci[rbZadatka]+ "</a>";
                    }
                }
                else //dodajemo u red sa maksimalnim borjem kolona
                {
                    x = row.insertCell(-1);
                    x.innerHTML ="<a href="+url+">" + ++brojaci[rbZadatka]+ "</a>";
                    //povecavamo u svim ostalim redovima colSpan
                    for(var i = 0; i <=brojZadataka; i++)
                    {
                        var row2 = tbl.rows[i]; // uzimamo red
                        var x2=row2.cells[ tbl.rows[i].cells.length-1]; // zadnja celija
                        if (i===0) // sirimo comit
                        {
                            x2.colSpan++;
                            continue;
                        }
                        if(x2.textContent==="") // celija prazna
                            {
                                 x2.colSpan++; 
                            }
                        else if(i != rbZadatka)
                            {
                                x2=row2.insertCell(-1);
                                x2.innerHTML = "";
                            }
                    }

                }
            }
              
            },
            obrisiCommit:function(rbZadatka,rbCommita){
                rbZadatka++; rbCommita++;
                if(rbZadatka > 0 & rbZadatka <= brojZadataka & rbCommita > 0 & rbCommita <tbl.rows[rbZadatka].cells.length)
                {
                var row = tbl.rows[rbZadatka]; //red iz kojeg brisemo komit
                var indexZadnjeCelije = tbl.rows[rbZadatka].cells.length-1;
                var x= row.cells[indexZadnjeCelije];
                var celijaKojaSeBriše  = row.cells[rbCommita];
                if(x.innerHTML == "") //zadnja celija prazna
                {
                    x.colSpan++;//povecavamo razmak
                    row.deleteCell(rbCommita);//brisemo zadnju celiju
                }
                else // red sa najvise elemenata
                {
                    var jeLiJEdini = true; // predpostavljamo da jeste jedini
                
                    for(var i = 1; i <=brojZadataka; i++)
                    {

                        if(i == rbZadatka)
                        {
                            continue;
                        }
                        var row2 = tbl.rows[i]; // uzimamo red
                        var x2=row2.cells[ tbl.rows[i].cells.length-1];
                        if(x2.innerHTML != "") // nasli smo ono sto smo trazili
                        {
                            jeLiJEdini = false;
                            break;
                        }
                    }
                    if(jeLiJEdini)
                    {
                        
                        if(indexZadnjeCelije !=1) // nije jedini element
                        {
                           
                            for(var i = 0; i <=brojZadataka; i++)
                            {
                                var row3 = tbl.rows[i]; // uzimamo red
                                var x3=row3.cells[ tbl.rows[i].cells.length-1]; // zadnja celija
                                if (i===0) // suzimo komit comit
                                {
                                    x3.colSpan--;
                                    continue;
                                }
                                if(i == rbZadatka) // celija koju brisemo
                                {
                                    continue;
                                }
                                if(x3.textContent==="") // celija prazna, smanjujemo colspan
                                {
                                     x3.colSpan--; 
                                }
                                if(indexZadnjeCelije == tbl.rows[i].cells.length-1)
                                {
                                    row3.deleteCell(indexZadnjeCelije);
                                }
                            }
                            row.deleteCell(rbCommita);
                           
                        }
                       else //samo jedan element u citavoj tabeli
                        {
                            celijaKojaSeBriše.innerHTML="";
                        }
                    }
                    else //red sa najvise kolona nije jedinstven
                    {
                        row.deleteCell(rbCommita);
                        x5=row.insertCell(-1);
                        x5.innerHTML = "";
                    }
                
                }
            }
                else{
                    return -1;
                }
            },//ht
            editujCommit:function(rbZadatka,rbCommita,url)
            {
                rbZadatka++; rbCommita++;
                if(rbZadatka > 0 & rbZadatka <= brojZadataka & rbCommita > 0 & rbCommita <tbl.rows[rbZadatka].cells.length)
                {
                    var row = tbl.rows[rbZadatka]; //red koji trebamo editovat
                    var celijaKojaSeEdiuje  = row.cells[rbCommita]; //celija koja se edituje
                    if(celijaKojaSeEdiuje.innerHTML != "")
                    {
                        celijaKojaSeEdiuje.innerHTML= "<a href="+url+">" + celijaKojaSeEdiuje.textContent+ "</a>"
                    }
                    else
                    {
                        return -1;
                    }

                }
                else
                {
                    return -1;
                }
            }

        }

    }
    return konstruktor;
    }());
    var mojDiv=document.getElementById("mojDiv");
    var tabela= new CommitTabela(mojDiv,7);
 /*  tabela.dodajCommit(0,"http://etf.unsa.ba/");
    tabela.dodajCommit(0,"http://etf.unsa.ba/");
    tabela.dodajCommit(0,"http://etf.unsa.ba/");
    tabela.dodajCommit(1,"http://etf.unsa.ba/");
    tabela.dodajCommit(1,"http://etf.unsa.ba/");
    tabela.dodajCommit(1,"http://etf.unsa.ba/");
    tabela.dodajCommit(1,"http://etf.unsa.ba/");
    tabela.dodajCommit(1,"http://etf.unsa.ba/");
    tabela.dodajCommit(1,"http://etf.unsa.ba/");
    tabela.dodajCommit(2,"http://etf.unsa.ba/");
    tabela.dodajCommit(2,"http://etf.unsa.ba/");
    tabela.editujCommit(0,0,"https://www.google.com/");
    tabela.obrisiCommit(2,0);
    tabela.dodajCommit(2,"http://etf.unsa.ba/");
    tabela.dodajCommit(2,"http://etf.unsa.ba/");
    tabela.dodajCommit(2,"http://etf.unsa.ba/");
    tabela.obrisiCommit(2,0);
    tabela.dodajCommit(2,"http://etf.unsa.ba/");
   // tabela.dodajCommit(1,"ved");
    //tabela.dodajCommit(2,"ved");
   // tabela.dodajCommit(1,"ved");
   // tabela.dodajCommit(1,"ved");  tabela.dodajCommit(1,"ved");  tabela.dodajCommit(1,"ved");  tabela.dodajCommit(1,"ved");  tabela.dodajCommit(1,"ved");  tabela.dodajCommit(1,"ved");
    //tabela.dodajCommit(1,"ved");  tabela.dodajCommit(1,"ved");  tabela.dodajCommit(1,"ved");  tabela.dodajCommit(1,"ved");  tabela.dodajCommit(1,"ved");  tabela.dodajCommit(1,"ved");

    /* tabela.dodajCommit(2,"ved");
    tabela.dodajCommit(1,"ved");
   //tabela.dodajCmaxKolonaommit(2,"ved");
   tabela.dodajCommit(2,"ved");
   tabela.dodajCommit(2,"ved");
   tabela.dodajCommit(5,"ved");
   .dodajCommit(2,"ved");
   tabela.dodajCommit(5,"ved");

   tabela.dodatabelajCommit(5,"ved");
   tabela.dodajCommit(5,"ved");
   tabela.dodajCommit(5,"ved");
   

   
   
   tabela.dodajCommit(5,"ved");
   tabela.dodajCommit(5,"ved");
   tabela.dodajCommit(5,"ved");
   tabela.dodajCommit(5,"ved");
   tabela.dodajCommit(5,"ved");
   tabela.dodajCommit(5,"ved");
   9*/
   


 
    

  
   
   
    
    
    

      
   
   
   
    
    


        

 


    

    
   
    
  
    

 
    
  
  
     
     