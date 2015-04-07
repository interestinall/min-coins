/**
 * Created by jl on 07/04/15.
 */

function minCoins(val){
    this.val = val;
    var quarters = 0;
    var dimes = 0;
    var nickels = 0;
    var pennies = 0;
    var currentSum = 0;
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

    if (pennies != 1) {

        return "$" + val + " in the fewest coins possible is " + quarters + " quarter(s), " + dimes + " dime(s), " + nickels + " nickel(s), " + pennies + " pennies.";
    }
    else{
        return "$" + val + " in the fewest coins possible is " + quarters + " quarter(s), " + dimes + " dime(s), " + nickels + " nickel(s), " + pennies + " penny.";

    }
}

console.log(minCoins(3.01));
