// 获取随机数
function getRandom(){
  var ret = [];
  for(var i = 0 ; i < 10; i ++){
    ret.push(Math.floor(Math.random() * 10 + 1));
  }

  return ret;
}

// 冒泡排序
function buttle(arr){
  var result, temp,
    i = 0,
    len = arr.length, j;

  result = [].concat(arr);
  // 至少得循环 len - 1 次
  for(; i < len - 1 ; i ++){
    for(j = len - 1; j > i; j--){
      // 把较小的数排到顶部
      if(result[j] < result[j - 1]){
        temp = result[j];
        result[j] = result[j - 1];
        result[j - 1] = temp;
      }
    }
  }

  return result;
}

// 快速排序
function devision(arr, left, right){
  // 设置一个基数
  var baseNum = arr[left];

  while(left < right){
    while(left < right && arr[right] >= baseNum){
      right --;
    }

    arr[left] = arr[right];

    while(left < right && arr[left] <= baseNum){
      left ++;
    }

    arr[right] = arr[left];
  }

  arr[left] = baseNum;

  return left;
}

function quick(arr, left, right){
  var result = [].concat(arr), index;
  if(left < right){
    index = devision(result, left, right);

    quick(result, left, index -1);
    quick(result, index + 1, right);
  }

  return result;
}

var tempArr = getRandom();
console.log('未排序前：', tempArr);
console.log('冒泡排序：', buttle(tempArr));
console.log('未排序前：', tempArr);
console.log('快速排序：', quick(tempArr, 0, tempArr.length - 1));