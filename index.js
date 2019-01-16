function annagram(str1, str2) {
  const strMap1 = charMap(str1);
  const strMap2 = charMap(str2);

  if(str1.length !== str2.length) {
    console.log('not an anagram', str1, str2);
    return false;
  }
  for(let char in strMap1) {
    if(!(char in strMap2)) {
        console.log('strings not anagram', str1, str2);
        return false;
    }
    if(strMap1[key] !== strMap2[key]) {
      console.log('not an anagram')
      return false;
    }
  }
  console.log('anagram', str1, str2);
  return true;
}

function charMap(str) {
const obj = {};
for(let char of str.toLowerCase()) {
  obj[char] ? obj[char] ++ : obj[char] = 1;
}
return obj;
}
function charMapU(str) {
  const obj = {};
  for(let char of str) {
    obj[char] ? obj[char] ++ : obj[char] = 1;
  }
  return obj;
  }

function countUniqueValues(arr) {
  let first = 0;
  if(arr.length === 0) return 0;
  for(let j = 1; j < arr.length; j++) {
    if(arr[first] !== arr[j]) {
      first++;
      arr[first] = arr[j];
      
    }
    console.log(arr);
    console.log(first);
  }
  
  return first + 1;
}

function sameFrequency(num1, num2){
  const num1Map = charMap(num1.toString());
  const num2Map = charMap(num2.toString());
  console.log(num1Map, num2Map);
  if(num1Map.length !== num2Map.length) {
    return false;
  }
  for(let key in num1Map) {
    if(num1Map[key] !== num2Map[key]) return false;
  }
  return true;
}

//good
function areThereDuplicates() {
  let collection = {}
  for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false;
}
//not workin
function areThereDuplicates1(...args) {

  args.sort((a,b) => a > b);
  let i = 0;
  let j = 1;
  while(j <= args.length){
    if(args[i] === args[j]){
        return true;
    }
    i++;
    j++;
  }
  return false;
}
//good
function areThereDuplicates2() {
  return new Set(arguments).size !== arguments.length;
}

function averagePair(arr, num) {
  if(arr.length === 0) return false;
  let start = 0;
  let end = arr.length - 1;
  while(start < end) {
    let average = (arr[start] + arr[end]) / 2;
    if(average === num) {
      return true;
    } else if(average < num) {
      start++;
    } else {
      end--;
    }
  }
  return false;
}

function isSubsequence(str1, str2) {
  if(!str1) return true;
  let i = 0;
  let j = 0;
  while(j < str2.length) {
    if(str2[j] === str1[i]) i++;
    if(i === str1.length) return true;
    j++;
  }
  return false;
}

function maxSubarraySum(arr, num){
  // add whatever parameters you deem necessary - good luck!
  // sliding window
  console.log('array: ', arr);
  console.log('num: ', num);
  if(arr.length < num) return null;
  let tempSum = 0;
  for(let i = 0; i < num; i++) {
    tempSum += arr[i];
  }
  console.log('tempsum: ', tempSum);
  let maxSum = tempSum;
  for(let i = num; i < arr.length; i++) {
    tempSum += arr[i] - arr[i-num];
    maxSum = Math.max(tempSum, maxSum);
    console.log('mathmax: ', maxSum);
  }
  console.log(maxSum);
  return maxSum;
}

function minSubArrayLen(arr, num) {
  let totalSum = 0;
  let i = 0;
  let j = 0;
  let minLen = Infinity;
  while(i < arr.length) {
    if(totalSum < num && j < arr.length) {
      totalSum += arr[j];
      j++;
    } else if(totalSum >= num) {
      minLen = Math.min(minLen, j-i);
      totalSum -= arr[i];
      i++;
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

function findLongestSubstring(str){
  // add whatever parameters you deem necessary - good luck!
  if(str.length === 0) return 0;
  //const strMap = charMap(str);
  let maxLen = 0;
  let i = 0;
  let j = 1;
  let sub = '';
  while(j < str.length) {
    sub = str.substring(i, j);
    for(let val in charMap(sub)) {
      if(val === 1) {
        j++;
        console.log('maxLen in loop: ', maxLen);
        maxLen = j - i;
      }
      i++;
    }
  }
  console.log('maxLen in end: ', maxLen);
  return maxLen;
}

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

function power(a,b){
  if(b === 1) {
      return a;
  }
  return a * power(a, b - 1);
}

function factorial(num){
  if(num === 1 || num === 0) return 1;
  return num * factorial(num-1);
}

function productOfArray(arr) {
  console.log('array is: ', arr);
  if(arr.length === 1) {
    return arr[0];
  }
  return arr[0] * productOfArray(arr.slice(1));
}

function recursiveRange(num) {
  if(num === 0) return 0;
  return num + recursiveRange(num-1);
}
function fib(n) {
  if(n <= 2) return 1;
  return fib(n-2) + fib(n-1);
}

function reverse(str){
  // add whatever parameters you deem necessary - good luck!
    if(str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}
function isPalindrome(str){
  // add whatever parameters you deem necessary - good luck!
  if(str.length <= 1) return true;
  let pal =  reverse(str.slice(1)) + str[0];
  if(pal === str) {
    return true;
  }
  return false;
}
function isPalindrome2(str){
  if(str.length === 1) return true;
  if(str.length === 2) return str[0] === str[1];
  if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
  return false;
}
function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1),callback);
}
function someRecursive2(arr, fn){
  // add whatever parameters you deem necessary - good luck!
  if(arr.length === 0) return false;
  if(fn(arr[0])) return true;
  return someRecursive(arr.slice(1), fn);
}
function flatten(oldArr){
  var newArr = []
  	for(var i = 0; i < oldArr.length; i++){
    	if(Array.isArray(oldArr[i])){
      		newArr = newArr.concat(flatten(oldArr[i]))
    	} else {
      		newArr.push(oldArr[i])
    	}
  } 
  return newArr;
}
function flatten2(arr){
  // add whatever parameters you deem necessary - good luck!
  let newArr = [];
  for(let item of arr) {
      if(Array.isArray(item)){
          newArr = newArr.concat(flatten(item));
      }else {
         newArr.push(item); 
      }
  }
  return newArr;
  
}

function linearSearch(arr, num){
  // add whatever parameters you deem necessary - good luck!
//   for(let item of arr) {
//       if(item === num) {
//         found = Array.indexOf(item);
//         return found;
//       } else {
//           return found;
//       }
//   }
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === num) {
            return i;
        }
    }
    return -1;
}

function binarySearch(arr, num){
  // add whatever parameters you deem necessary - good luck!
  let start = 0;
  let finish = arr.length - 1;
  let middle = Math.floor((start + finish) / 2);
  while(arr[middle] !== num && start <= finish) {
    console.log(start, finish, middle);
    if(arr[middle] < num) start = middle + 1;
    else finish = middle - 1;
    middle = Math.floor((start + finish) / 2);
  }
  return arr[middle] === num ? middle : -1;
}

function searchNaiveString(str, pattern) {
  let count = 0;
  for(let i = 0; i < str.length; i++) {
    for(let j = 0; j < pattern.length; j++) {
      if(pattern[j] !== str[i+j]) {
        break
      } 
      if(j === pattern.length - 1) {
        count++;
      }
    }
  }
  return count;
}

function searchNaiveString2(str, pattern) {
  let count = 0;
  for(let i = 0; i < str.length; i++) {
    for(let j = 0; j < pattern.length; j++) {
      if(pattern[j] !== str[i+j]) break;
      if(j === pattern.length - 1) count++;
    }
  }
  return count;
}

function bubbleSort(arr) {
  let count = 0;
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - i; j++) {
      count++;
      console.log(arr);
      if(arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  console.log(arr);
  console.log(count);
  return arr;
}

function swapItems(a, b, arr) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function bubbleSortR(arr) {
  let count = 0;
  for(let i = arr.length; i > 0; i--) {
    for(let j = 0; j < i - 1; j++) {
      count++;
      console.log(arr);
      if(arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  console.log(arr);
  console.log(count);
  return arr;
}

function bubbleSortRS(arr) {
  let noSwaps;
  let count = 0;
  for(let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for(let j = 0; j < i - 1; j++) {
      count++;
      console.log(arr);
      if(arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;
      }
    }
    if(noSwaps) break;
  }
  console.log(arr);
  console.log(count);
  return arr;
}

function selectionSort(arr) {
  const swap = (array, indx1, indx2) => {
    [array[indx1], array[indx2]] = [array[indx2], array[indx1]]
  }
  // console.log(arr);
  let count = 0;
  for(let i = 0; i < arr.length; i++) {
    let min = i;
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[min] > arr[j]) {
        min = j;
      }
    }
    count++;
    if(i !== min) swap(arr, i, min);
  }
  console.log('************');
  console.log('end result: ', arr);
  console.log('************');
  console.log('total count is: ', count);
  return arr;
}

function insertionSort(arr) {
  let count = 0;
  for(let i = 1; i < arr.length; i++) {
    let current = arr[i];
    for(j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
    }
    count++
    arr[j+1] = current;
  }
  console.log('************');
  console.log('end result: ', arr);
  console.log('************');
  console.log('total count is: ', count);
  return arr;
}

function merge(arr1, arr2) {
  let resultArr = [];
  let i = 0;
  let j = 0;
  while(i < arr1.length && j < arr2.length){
    if(arr1[i] < arr2[j]) {
      resultArr.push(arr1[i]);
      i++;
    } else {
      resultArr.push(arr2[j]);
      j++;
    }
  }
  while(i < arr1.length) {
    resultArr.push(arr1[i]);
    i++;
  }
  while(j < arr2.length) {
    resultArr.push(arr2[j]);
    j++;
  }
  console.log('************');
  console.log('end result: ', resultArr);
  console.log('************');
  return resultArr;
}

function mergeSort(arr) {
  if(arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0,middle));
  console.log('left: ', left);
  let right = mergeSort(arr.slice(middle));
  console.log('right: ', right);
  return merge(left, right);
}
function swap(arr, ind1, ind2) {
  let temp = arr[ind1];
  arr[ind1] = arr[ind2];
  arr[ind2] = temp;
} 
function pivot(arr, start = 0, end = arr.length + 1) {
  const swapArray = (array, k, l) => {
    [array[k], array[l]] = [array[l], array[k]];
  } 
  let pivot = arr[start];
  let swapIndx = start;
  for(let i = start + 1; i <= end; i++) {
    if(pivot > arr[i]) {
      swapIndx++;
      swapArray(arr, swapIndx, i);
    }
  }
  swapArray(arr, start, swapIndx);
  console.log('************');
  console.log('swapindex is: ', swapIndx);
  console.log('************');
  console.log('end result: ', arr);
  console.log('************');
  console.log('************');
  return swapIndx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if(left < right) {
    let pivotIndex =  pivot(arr, left, right);
  //left
  quickSort(arr, left, pivotIndex - 1);
  //right
  quickSort(arr, pivotIndex + 1, right);
  }
  console.log('************');
  console.log('end result of quick sort: ', arr);
  console.log('************');
  return arr;
}

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, 1)) % 10;
}
function digitCount(num) {
  if(num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
function mostDigits(nums) {
  let maxDigits = 0;
  for(let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}
function radixSearch(nums) {
  let max = mostDigits(nums);
  for(let k = 0; k < max; k++) {
    let digitBucket = Array.from({ length: 10 }, () => []);
    for(let i = 0; i < nums.length; i++) {
      digitBucket[getDigit(nums[i], k)].push(nums[i]);
    }
    nums = [].concat(...digitBucket);
  }
  return nums;
}