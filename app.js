/*========== Convert the given number into a roman numeral. ==========*/

function convertToRoman(num) {
  
  var numSplit = num.toString().split('').map(Number).reverse();
  var output = [];

  var romanCheck = [
    ["","I","II","III","IV","V","VI","VII","VIII","IX"],
    ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
    ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
    ["","M","MM","MMM"]
  ];
  
  for (i=0;i<numSplit.length;i++) {
    var test = romanCheck[numSplit.indexOf(numSplit[i])][numSplit[i]];
    numSplit.splice(i,1,0);
    output.push(test);
  }

  return(output.reverse().join(''));
}

convertToRoman(3999);

/*======================================================================*/
