// 冒泡排序
function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    console.log(i)
    for(var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {
        var temp;
        temp = arr[j];
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr
}

// 快速排序
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  
  
}







