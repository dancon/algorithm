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

var tempArr = getRandom();
console.log('未排序前：', tempArr);
console.log('冒泡排序：', buttle(tempArr));