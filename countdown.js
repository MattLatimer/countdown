var countdownGenerator = function (x) {
  var count = x;

  return function() {
    var message = '';
    if (count > 0) {
      message = 'T-minus ' + count + '...';
    }
    if (count === 0) {
      message = 'Blast Off!';
    }
    if (count < 0) {
      message = 'Rockets already gone, bub!';
    }
    console.log(message);
    count = count - 1;
  };
};

var countdown = countdownGenerator(3);

countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
