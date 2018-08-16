var arr = [1,4,7,9,10,12,14,16,19,20,23,24,27,28,31,32,35,40,39,40,45,48,51,52,55,56]
var arr2 = "abcdefghijklmnopqrstuvwxyz".split("");
var obj = {}
arr2.forEach(function(v,i){
    obj[v] = arr[i]
})
function translateLetterToMass(str){
    return str.split("").map(function(v){
        return obj[v]
    })
}


var input = document.querySelector("#inputContainer input"); 
var span = document.querySelector("#inputContainer span"); 
input.addEventListener("keyup",function(){
    span.innerHTML = translateLetterToMass(this.value)
})