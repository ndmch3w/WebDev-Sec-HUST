function palindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '');
    str = str.toLowerCase();
    var len = str.length;
    for (let i = 0; i < Math.floor(len/2); i++){
      if (str.charAt(i) != str.charAt(len-i-1)){
        return false;
      }
    }
    return true;
  }
  
  palindrome("eye");