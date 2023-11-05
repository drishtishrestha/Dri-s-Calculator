let str = "";
let buttons = document.querySelectorAll('.button'); //here it selects everything with class button

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{ //click, when a button is pressed by user an event is created
        //function
        if(e.target.innerHTML=='='){
            str = eval(str);
            document.querySelector('input').value = str;
        }
        else if(e.target.innerHTML=="RESET" || e.target.innerHTML=="DEL"){
            str = "";
            document.querySelector('input').value = str;
        }
        else{
        console.log(e.target);
        str = str + e.target.innerHTML; //takes the target from the html doc
        document.querySelector('input').value = str; //the value is then displayed in the input
        }
    })
})

//Theme switch Icon
var icon = document.getElementById("icon");
function themechange(){ //same function name as given in HTML
    document.body.classList.toggle("theme2");
    if(document.body.classList.contains("theme2")){
        icon.src = "moon.png";
    }else{
        icon.src = "sun.png";
    }
}

