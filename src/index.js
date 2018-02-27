module.exports = function check(str, bracketsConfig) {
  var newArr = [];
  var i = 0;

  for (var k = 0; k < bracketsConfig.length; k++) {
    newArr[k] = bracketsConfig[k].join('');
  };

  while ( (str.length > 1) && (i < str.length) ) {
    var temp = str.substring(i, i + 2);
    if ( newArr.includes(temp) ) {
      str = str.replace(temp, '');
      i = 0;
    } else {
      i++
    }
  }

  return str ? false : true
}
