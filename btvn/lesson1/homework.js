// Ex2:
// let inputNum = parseInt(prompt("nhap so bat ki:"));
// let stringNum = String(inputNum);
// let charArr = [...stringNum];
// console.log(charArr);
// function maxElement(array) {
//   let max = array[0];
//   let max_index = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (max < array[i]) {
//       max = array[i];
//       max_index = i;
//     }
//   }

//   alert(`so to nhat la: ${max}`);
// }
// maxElement(charArr);
//Ex 1:;
let array = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3];

function countElement(array, x) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == x) {
      count++;
    }
  }
  console.log("phan tu " + x + " xuat hien " + count + " lan");
}
countElement(array, 1);
countElement(array, 2);
