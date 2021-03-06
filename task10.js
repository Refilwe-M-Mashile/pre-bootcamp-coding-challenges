function findVowels(word) {
  var vowels = [];
  
  for (var i = 0; i < word.length; i++) {
    var char = word[i];
    switch (char) {
      case "A":
      case "a":
        if (!vowels.includes("a")) {
          vowels.push("a");
        }
        break;
      case "E":
      case "e":
        if (!vowels.includes("e")) {
          vowels.push("e");
        }
        break;
      case "I":
      case "i":
        if (!vowels.includes("i")) {
          vowels.push("i");
        }
        break;
      case "O":
      case "o":
        if (!vowels.includes("o")) vowels.push("o");
        break;
      case "U":
      case "u":
        if (!vowels.includes("u")) vowels.push("u");
        break;
    }
  }

  return vowels;
}

console.log("Vowels: " + findVowels("RefIlwe"));
