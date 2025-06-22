import { formatCurrency} from "../../scripts/utils/money.js"; 



console.log('test suite: formatCurrency');
//test case input = 2095
//basic case
console.log('converts cents into dollars');
if(formatCurrency(2095) === '20.95'){
    console.log('passed');
}
else{
    console.log('failed');
}

//test case input = 000
//edge case
console.log('works with 0');
if(formatCurrency(0) ==='0.00'){
    console.log('passed');
}
else{
    console.log('failed');
}

//test case input = 2000.5 ~ 20.01
//edge case
console.log('rounds up to nearest cents');
if(formatCurrency(2000.5 )=== '20.01'){
    console.log('passed');
}
else{
    console.log('failed');
}

//test case input = 2000.4 ~ 20.00
//edge case
console.log('rounds up to nearest cents -2');
if(formatCurrency(2000.4 )=== '20.00'){
    console.log('passed');
}
else{
    console.log('failed'); 
}