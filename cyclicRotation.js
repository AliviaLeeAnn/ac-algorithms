///**
// * Created by yoneta on 3/23/16.
// */

//A zero-indexed array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is also moved to the first place.
//
//    For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7]. The goal is to rotate array A K times; that is, each element of A will be shifted to the right by K indexes.
//
//    Write a function:
//
//function cyclicRotation(A, K);
//
//that, given a zero-indexed array A consisting of N integers and an integer K, returns the array A rotated K times.
//
//    For example, given array A = [3, 8, 9, 7, 6] and K = 3, the function should return [9, 7, 6, 3, 8].\
//2 Inputs, an array and a rotation(number)
//output: an array, with the numbers rearranged.
//tools: shift, unshift, push, pop (will not need all)
//each time loop runs, we want the last element in the array to move to the beginning

function cyclicRotation(arr, rotation){
    for (var i = 0; i < rotation; i++){
      var lastNum = arr.pop();
      arr.unshift(lastNum);
    }
    return arr;
}

var results = cyclicRotation([2, 10, 30, 56], 3);
console.log(results);
cyclicRotation([2, 10, 30, 56], 30);
