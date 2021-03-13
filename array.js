function arrFunc(){
var arr = [8,6,7,5,3,0,9];
for(var i = 0; i < arr.length; i++){ 
    alert(i);   
    console.log(arr[i]);
    }
}
/*
in this function, we only need to log the values within the array
where the index < 7 => index 0, log 8;
1 = 6
2 = 7
..
6 = 9
Answer: [8,6,7,5,3,0,9]
*/
function arrIfElse(){
var arr = [7,3,8,4,2,0,1];
    for(var i = 0; i < arr.length; i++){ 
        if(arr[i] % 2 == 0){
            alert(i);
            console.log(arr[i]);
        } 
        else{
            console.log("That is odd!");
        }
    }
}
/*
7 !==0 "That is odd!"
3 !==0 "That is odd!"
8;
4;
2;
0;
1 !==0 "That is odd!"
*/


function pushArr(){
    var arr = [1,3,8,-5,0,-2,4,-1];
    var newArr = [];
    for(var i = 0; i< arr.length; i++){
        if(arr[i] < 0){
            newArr.push(arr[i]);
            arr[i] = arr[i] * -1;
        }
        else if(arr[i] == 0){
            arr[i] = "Zero";
        }
        else{
            arr[i] = arr[i] * -1;
        }
    }
console.log(arr);
console.log(newArr);
}


/*
1 > 0 => 1 * -1 = -1;
3 => -3;
8 => -8;
-5 < 0 => newArr[-5]; -5 * -1 = 5;
0 == 0 => "zero"
-2 < 0 => newArr[-2]; -2 * -1 = 2;
4 => -4;
-1 < 0 => newArr[-1]; -1 * -1 = -1;
Answer:
[-1,-3,-8,5,"zero",2,-4,-1]
[-5,-2,-1]
*/