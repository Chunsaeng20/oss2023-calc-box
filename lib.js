// calculate average
function avg(numbers)
{
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
}

// decide prime or not
function prime(num)
{
    // num must greater than 0
    if(num <= 0) return false;

    // compare 2 ~ root(num) 
    for(let i = 2; i*i <= num; i++)
    {
        if(num % i == 0) return false;
    }
    return true;
}

// calculate factorial
function fact(num)
{
    // num must greater than 0
    if(num < 0) return 0;
    // 0! = 1
    else if(num == 0) return 1;

    if(num == 1) return 1;
    else return num * fact(num - 1);
}

module.exports = {
    avg,
    prime,
    fact
}