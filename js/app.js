function caesarCipher (str, shift) {
    if (shift < 0) {
      return caesarCipher(str, shift + 26);
    }
    var output = "";
    for (var i = 0; i < str.length; i++) {
      var c = str[i];
      if (c.match(/[a-z]/i)) {
        var code = str.charCodeAt(i);
        if (code >= 65 && code <= 90) {
          c = String.fromCharCode(((code - 65 + shift) % 26) + 65);
        }
        else if (code >= 97 && code <= 122) {
          c = String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
      }
      output += c;
    }
    return output;
  };

console.log(caesarCipher('TEJA', 5));

module.exports = caesarCipher;

