var arr=[100,200,300,400];
console.log(arr);
console.log(typeof arr);
//ADD THE LAST ELEMENT IN ARRAY
arr.push(500);
console.log(arr);
//REMOVE THE ELEMENT FROM LAST
arr.pop();
console.log(arr);
//ADD THE ELEMENT FIRST POSITION
arr.unshift(50);
console.log(arr);
//REMOVE THE FIRST ELEMENT
arr.shift();
console.log(arr);
//DELETE ELEMENTS IN SPECIFIC POSITION
arr.splice(2,1);
console.log(arr);
//ADD DATA IN A SPECIFIC POSITION
arr.splice(2,0,300);
console.log(arr);
//RANGE OF VALUES
var newarr=arr.slice(2,4);
console.log(newarr);
//FOR EACH METHOD
arr.forEach(function(element,index){
    console.log(index,element);
})
//OPERATION: MAP FUNCTION
var newArr=arr.map(function(element,index){
    return element*10;
})
console.log(newArr);
//FILTER DATA
var newArr2=arr.filter(function(element,index){
    return element>200;
})
console.log(newArr2);