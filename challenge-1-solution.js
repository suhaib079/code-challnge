'use strict'
var arr =[4,49,12,2,36];

function logs(array){
    var sqrt=[];
    for(var i=0;i <array.length;i++){
        sqrt.push(Math.sqrt(array[i]));  
    }
    console.log(sqrt)
    return sqrt;
}
logs(arr);