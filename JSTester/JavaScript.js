
String.prototype.toJadenCase = function () {
    var str = this;
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}

function SeriesSum(n) {
    //loop through n times total = n + n/(x+3) where x = previous denominator
    var total = 0;
    var denominator = 1;
    var cycle = n;
    
    while (cycle > 0) {
        total = total + 1 / denominator;
        denominator = denominator + 3;
        cycle--;
    }
    var ans = total.toFixed(2);
    return ans;
}

function add(num1, num2) {
    return num1 + num2;
}