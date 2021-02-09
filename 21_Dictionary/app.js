const arr = [1, 2, 3, 45, 6, 7, 5, 8, 6, 6, 3, 3, 5, 4, 5, 5];

// write a function that gives me the highest repeating number

const findHighestRepeating = arr => {
  let result = null;
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] += 1;
      if (obj[arr[i]] > result) {
        result = obj[arr[i]];
      }
    } else {
      obj[arr[i]] = 1;
    }
  }
  return result;
};

console.log(findHighestRepeating(arr));
//  write a function that return the first repeating number
