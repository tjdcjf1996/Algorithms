function numDivisor(num) {
    const arr = [];
    let divisor = 2;

    
    while (num >= 2) {
        if (num % divisor === 0) {
            arr.push(divisor);
            num /= divisor;
        } else {
            divisor++;
        }
    }

   
    let nowIdxNumber = arr[0];
    let count = 0;
    let sum = 1;

    arr.forEach((div, i) => {
        if (nowIdxNumber === div) {
            count++;
        } else {
            sum *= (count + 1);
            count = 1;
            nowIdxNumber = div;
        }

        if (i === arr.length - 1) {
            sum *= (count + 1);
        }
    });

    return sum;
}

function solution(number, limit, power) {
    const divisorArr = [];
    for(let i=1; i<=number; i++){
        divisorArr.push(numDivisor(i));
    }
    
    const settingArr = divisorArr.map(d => d>limit ? power : d );
    
    return settingArr.reduce((a,b)=>a+b);
}