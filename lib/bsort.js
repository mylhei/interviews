/**
冒泡排序http://jsbin.com/kisecon/edit?js,console
*/
let arr = [2, 4, 9, 3, 6, 7, 1, 5];

let swap = function(arr,a,b){
  let tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}

let bsort = function(arr){
  for(let i = 0 ; i < arr.length ;i++){
    for(let j = i + 1 ; j < arr.length; j++){
      if (arr[i] > arr[j]){
        swap(arr,i,j);
        console.log(arr);
      }
    }
    console.log('------')
  }
  return arr;
}

console.log(bsort(arr))
