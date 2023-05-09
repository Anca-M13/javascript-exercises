const sumAll = function(a, b) {
  if (typeof a === 'number' & typeof b === 'number') {
    if (a >= 0 & b >=0) {
      let total = 0;
      if (a < b) {
        for (i = a; i <= b; i++) {
            total += i;
        }
        return total;
      } else {
        for (i = b; i <= a; i++) {
          total += i;
        }
        return total;  
      }
    } else {
        return 'ERROR'
    }
  } else {
    return 'ERROR'
  }
}

// Do not edit below this line
module.exports = sumAll;
