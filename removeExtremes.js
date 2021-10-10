let arr = ['a', 'c', 'def'];
let removeShortest;
for(let i = 0; i < arr.length; i++){
    if(arr[0] <= arr[i]){
        removeShortest = arr.splice(0, 1);
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] <= arr[j]){
              removeShortest = arr.splice(i, 1);
            }
        }
    }
}
console.log(removeShortest);
