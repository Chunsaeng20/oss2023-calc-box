function avg(numbers)
{
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
}

function prime(num)
{
    // TODO
    return false;
}

function fact(num)
{
    // TODO
    return -1;
}

module.exports = {
    avg,
    prime,
    fact
}