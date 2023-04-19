// first solution
// function remove_char_from(word, c) {
//   let wordarray = word.split("");
//   let emptyarray = [];

//   for (let index = 0; index < wordarray.length; index++) {
//     if (
//       wordarray[index] !== c.toLowerCase() &&
//       wordarray[index] !== c.toUpperCase()
//     ) {
//       emptyarray.push(wordarray[index]);
//     }
//   }

//   return emptyarray.join("");
// }

function remove_char_from(word, c) {
  let wordList = word.split("");
  return wordList.filter(
    (char) => char != c.toLowerCase() && char != c.toUpperCase()
  ).join("");
}
console.log(remove_char_from("ElddzeroD WebDD ddSchool", "d")); //# Elzero Web School
console.log(remove_char_from("ElxzeroX Web Sxchool", "x")); // # Elzero Web School
console.log(remove_char_from("Elzero@ Web@@ @@School", "@")); //  # Elzero Web School
