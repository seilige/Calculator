const inputs = document.getElementsByClassName("block");

for(var i = 0; i < inputs.length; i++){
    let elem = inputs[i];

    elem.addEventListener("mousedown", function(){
        elem.style.backgroundColor = "rgba(0,0,0, 0.6)";
    });
    
    elem.addEventListener("mouseup", function(){
        elem.style.backgroundColor = "rgba(0,0,0, 0.3)";
    });
    
    elem.addEventListener("mouseout", function(){
        elem.style.backgroundColor = "rgba(0,0,0, 0.3)";        
    });
}
