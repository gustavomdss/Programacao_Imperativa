const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

const sameScore = (array1, array2) => {
  if (array1.length != array2.length){
    return false;
} else {
    for (let i = 0; i < array1.length;i++)
    if (array1[i] != array2[i]) {
      return "São diferentes";
    }
     return "São iguais";
} 
}

console.log(sameScore(asiaScores, euroScores))