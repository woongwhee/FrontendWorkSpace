
const textbox=document.getElementById("area1");
const buttonArr=document.getElementsByName("hobby");
function checkFull(){
     

}
for(let i=0;i<buttonArr.legth;i++){
    buttonArr[i].addEventListener(click,checkFull)
}
/** 
 * 
 * @param 기분이좋아지는함수 */
let addtext=function(value){
    if(value.checked){
        textbox.innerHTML+=value.value+' / ';
    }
}
let addtext2=function(value){
    if(value.checked){
        textbox.innerHTML+=value.value+' / ';
    }
}

/**
 * 기분이 안좋아지는 함수
 */
function checkAll(){
    let SelectAll=document.querySelector("#selectAll");
    if(SelectAll.checked){
        buttonArr.forEach(value=>value.checked=true);}
        else{
            buttonArr.forEach(value=>value.checked=false);}
        };

function checkBoxSelect(){
    let buttonArr=document.getElementsByName("hobby");
    textbox.innerHTML=""
    buttonArr.forEach(addtext);
}
function checkBoxSelect2(){
    let buttonArr=document.querySelector("[name='hobby':checked]");
    let textArray=buttonArr.map(Values=>Values.value);
    
    textbox.innerHTML=textArray.join("/");

}
