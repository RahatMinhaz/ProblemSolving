function seerToMon(seer){
    var mon = seer/40;
    // (Bonus Part) Error messages
    if(typeof seer != 'number'){
        return "please insert a number";
    }
    else if(seer < 0){
        return "please insert a positive value";
    }
    // Bonus part ends
    else{
        return mon;
    }
}
var mon = seerToMon(600);
console.log(mon);