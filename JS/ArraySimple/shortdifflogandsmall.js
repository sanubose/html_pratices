function findDifference(arr) {
    let largest  = Math.max(...arr);
    let smallest = Math.min(...arr);
    console.log("Difference:", largest - smallest);
}

findDifference([10, 3, 8, 1, 7]); // 9