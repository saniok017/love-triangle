/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences=[]){
  let count = 0
  // опрос спешони
  for (var a=1; a <= preferences.length; a++){
   // условие треугольника
    if (preferences.indexOf(a,a+1) == a+1 && preferences.indexOf(a+1,a-1) == a-1 
    && preferences.indexOf(a+2,a) == a){
    count++
    };
  };
return count
}
/*  0  1  2   3 4 5   6 7 8   9 10 11
    2  3  1   5 6 4   8 9 7  11 12 10    */