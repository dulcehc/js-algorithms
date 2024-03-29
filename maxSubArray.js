/**
 * Sliding window
 */

function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;

    if(arr.length < num) return null;

    // consider the first numbers as the max sum
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;

    // subtracts the previous number and sums the next
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3)) // 19
console.log(maxSubarraySum([1,2,5,2,8,1,5],2)) // 10
console.log(maxSubarraySum([1,2,5,2,8,1,5],4)) // 17
console.log(maxSubarraySum([4,2,1,6],1)) // 6
console.log(maxSubarraySum([4,2,1,6,2],4)) // 13
console.log(maxSubarraySum([],4)) // null
