let paragraph=document.querySelector('.para1');
let input=document.querySelector('.input');



function tempFunct() {

  let convert= (input.value - 32 )* 5/9;

  paragraph.innerHTML=`Result: `+ (convert) + " °C ";



    
}


