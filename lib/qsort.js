/**
* 快速排序：http://jsbin.com/kamurix/1/edit?html,js,output
*/
let arr = [2, 4, 9, 3, 6, 7, 1, 5];

let qsort = (arr, left, right) => {
  console.log(arr.toString() , left,right)
	if (left < right) {
		let key = arr[left];
		let i = left;
		let j = right;
		while (i < j) {
			while (i < j && arr[j] > key) {
				j--;
			}
			arr[i] = arr[j];
			while (i < j && arr[i] < key) {
				i++;
			}
			arr[j] = arr[i];
			//     console.log(arr);
		}

		arr[i] = key;
// 		console.log(arr);
		qsort(arr, left, i - 1);
		qsort(arr, i + 1, right);
	}
}

qsort(arr, 0, arr.length - 1)
