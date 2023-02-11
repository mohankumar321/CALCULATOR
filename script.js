let display =document.getElementById("display")

let buttons =Array.from(document.getElementsByClassName("button"));

buttons.map(button=>{
    button.addEventListener("click",(e)=>{
   switch(e.target.innerText){
    case "c":
        display.innerText ="";
         break;
         case"←":
         if(display.innerText){
         display.innerText =display.innerText.slice(0,0);
        }
case"=":
        try{
            display.innerText =eval(display.innerText);
        }catch{
            display.innerText ="Error!";
            
        }break;

        case "x":
           ( display.innerText)*=(display.innerText);
            break;

     
    default:
        display.innerText+=e.target.innerText;

   }
    })
})