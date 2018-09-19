/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences=[]){
  var count = 0
  // опрос спешони
  for (var a=0; a < preferences.length; a++){
   // условие треугольника
    if (preferences[preferences[preferences[a]-1]-1] == a+1){
    count++
    };
  };
count=Math.floor(count/3)
return count
}
/*  0  1  2   3 4 5   6 7 8   9 10 11
    2  3  1   5 6 4   8 9 7  11 12 10    */