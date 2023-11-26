let result = "0";
let element = document.getElementById("result");
let elementUp = document.getElementById("resultUp");
const input = document.getElementsByClassName("numbers");
let lst = {};
let arg1Arg2 = [];
let tempElemntUpContent = "";
let temp = "";
let tmp = "";
let oldRes = "";
let arg2 = "";
let smIndex = "";
let sim = "";
let sim2 = "";
let sim3 = "";
let areaIndex = "";
let shapeIndex = 0;

const numbers = {
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9",
    "ziro": "0"
};

function compound(lst, index){
    let r;
    
    if(index == "+"){
        let res = +lst[0] + +lst[1];
        r = res;
    }

    if(index == "*"){
        if(+lst[1] == 0){
            let res = lst[0] * 1;
            r = res;
            shapeIndex = 1;
        }
        else{
            let res = +lst[0] * +lst[1];
            r = res;
        }
    }

    if(index == "-"){
        let res = +lst[0] - +lst[1];
        r = res;
    }

    if(index == "/"){
        if(+lst[1] == 0){
            let res = lst[0] / 1;
            r = res;
            shapeIndex = 1;
        }
        else{
            let res = +lst[0] / +lst[1];
            r = res;
        }
    }

    if(index == "%"){
        let value = +lst[0] / +lst[1];
        r = value;
    }

    return r;
}

function main(sim){
    if(oldRes == ""){
        oldRes = result;
    }
    
    arg1Arg2.push(result);
    lst.sm = arg1Arg2;

    if(lst.sm.length == 1){
        sim2 = sim;
        sim3 = sim;
    }
    
    if(sim3 != ""){
        elementUp.innerHTML = oldRes + " " + sim3 + " ";
        element.innerHTML = "0";
    }
    else{
        elementUp.innerHTML = oldRes + " " + sim + " ";
        element.innerHTML = "0";
    }

    if(lst.sm.length == 2){
        if(sim2 != ""){
            result = compound(lst.sm, sim2);
        }
        else{
            result = compound(lst.sm, sim);
        }
        
        element.innerHTML = result;
        arg2 = lst.sm[1];
        lst.sm = [];
        arg1Arg2 = [];
        arg1Arg2.push(result);
        smIndex = result;
        sim2 = "";
        sim3 = "";
    }
    
    oldRes = result;
    let g = elementUp.innerHTML[elementUp.innerHTML.length-2];

    if(((g == "+" || g == "-" || g == "*" || g == "/") && arg2 != "")){
        if(shapeIndex == 1){
            elementUp.innerHTML += "1 = " + result;
            element.innerHTML = "0";
            shapeIndex = 0;
        }
        else{
            elementUp.innerHTML += arg2 + " = " + result;
            element.innerHTML = "0";
        }
    }
    
    result = "0";
}

for(let i = 0; i < input.length; i++){
    let elem = input[i];

    elem.addEventListener("mousedown", function(){
        if(numbers[elem.id] == "0" && result == "0"){}
        else if(result == "0" && numbers[elem.id] != "0"){
            result = numbers[elem.id];
        }
        else{
            result += numbers[elem.id];
        }

        element.innerHTML = result;
    });
}

$("#backspace").on("click", function(){
    result = result.slice(0, result.length-1);

    if(result.length == 0){
        result = "0";
    }

    element.innerHTML = result;
});

$("#c").on("click", function(){
    result = "0";
    arg1Arg2 = [];
    element.innerHTML = result;
    elementUp.innerHTML = "";
    oldRes = "";
    lst.sm = [];
});

$("#shape").on("click", function(){
    sim = "+";
    main(sim);    
});    

$("#minus").on("click", function(){
    sim = "-";
    main(sim);    
});

$("#mult").on("click", function(){
    sim = "*";
    main(sim);
});

$("#division").on("click", function(){
    sim = "/";
    main(sim);
});

$("#percent").on("click", function(){
    sim = "%";
    main(sim);
});

$("#root").on("click", function(){
    let value;

    if(result != "0"){
        value = Math.sqrt(+result);
    }
    else if(arg1Arg2.length == 0){
        value = 0;
    }
    else{
        value = Math.sqrt(arg1Arg2[0]);
    }

    arg1Arg2 = [];
    arg1Arg2.push(value);
    oldRes = value;
    result = "0";

    element.innerHTML = value;
    elementUp.innerHTML = "";
});

$("#oneDiv").on("click", function(){
    let value;

    if(result != "0"){
        value = 1/+result;
    }
    else if(arg1Arg2.length == 0){
        value = 0;
    }
    else{
        value = 1/arg1Arg2[0];
    }
    
    arg1Arg2 = [];
    arg1Arg2.push(value);
    oldRes = value;
    result = "0";

    element.innerHTML = value;
    elementUp.innerHTML = "";
});

$("#plusMinus").on("click", function(){
    if(result != "0"){
        result = -(+result)
        element.innerHTML = result;
    }
    else if(arg1Arg2.length == 1){
        arg1Arg2[0] = -(+arg1Arg2[0])
        element.innerHTML = arg1Arg2[0];
    }
});

$("#dot").on("click", function(){
    result += ".";
    element.innerHTML = result;
});


$("#squar").on("click", function(){
    let value;

    if(result != "0"){
        value = +result * +result;
    }
    else if(arg1Arg2.length == 0){
        value = 0;
    }
    else{
        value = arg1Arg2[0] * arg1Arg2[0];
    }

    arg1Arg2 = [];
    arg1Arg2.push(value);
    oldRes = value;
    result = "0";

    element.innerHTML = value;
    elementUp.innerHTML = "";
});

$("#equals").on("click", function(){
    if(sim != "" && arg1Arg2.length != 0){
        arg1Arg2.push(result);
        result = compound(arg1Arg2, sim);
        oldRes = result;

        element.innerHTML = result;
        elementUp.innerHTML = arg1Arg2[0] + " " + sim + " " + arg1Arg2[1] + " " + " = " + result;

        arg1Arg2 = [];
        arg1Arg2.push(result);
        result = "0";
    }
});
