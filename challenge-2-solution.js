'use strict';


var max=9999999;
var min=0;
var number=[];
for (var i=0;i<5;i++){
    number.push(prompt('please enter a number'));
}
for(var i=0;i<0;i++){
    if(number[i]>max){
        max=number[i];
        alert(max);
    }
    if(number[i]<min){
        min=number[i];
        alert(min);
    }
}