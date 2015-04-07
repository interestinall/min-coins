/**
 * Created by jl on 07/04/15.
 */

function minCoins(val){
    this.val = val;
    var quarters;
    var dimes;
    var nickels;
    var pennies;
    var currentSum;
    var temp;

    if (val % .25 == 0){
        quarters = val / .25;
    }else{
        quarters = Math.floor(val /.25);
        temp = quarters * .25;
        currentSum = Math.round((val - temp) * 100) / 100 ;
    }

    if (currentSum % .10 == 0) {
        dimes = currentSum / .10;
    }else{
        dimes = Math.floor(currentSum /.10);
        temp = dimes * .10;
        currentSum = Math.round((currentSum - temp) * 100) / 100;
    }

    if (currentSum % .05 == 0){
        nickels = currentSum / .05;
    }else{
        nickels = Math.floor(currentSum /.05);
        temp = nickels * .05;
        currentSum = Math.round((currentSum -temp) * 100) /100
    }

    if (currentSum < .05){
        pennies = currentSum * 100;
    }


    return "$"+ val + " in fewest coins possible is " + quarters + " quarter(s), " + dimes + " dime(s), " + nickels + " nickel(s), " + pennies + " pennies.";

}

console.log(minCoins(4.13));
