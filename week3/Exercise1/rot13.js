function rot13(str) {
    var lowerReg = /[a-z]/;
    var upperReg = /[A-Z]/;
    var res = "";
    for (let i = 0; i < str.length; i++) {
      let char = str.charAt(i);
      let temp = char.charCodeAt(0) + 13;
      if (lowerReg.test(char)) {
        if (temp > 122) {
          temp -= 26;
        }
        res += String.fromCharCode(temp);
      } else if (upperReg.test(char)) {
        if (temp > 90) {
          temp -= 26;
        }
        res += String.fromCharCode(temp);
      } else{
        res += char;
      }
    }
    return res;
  }
  
  rot13("SERR PBQR PNZC"); // Output: "FREE CODE CAMP"
  