function fibo(n) 
{
    const memo = { 0: 0, 1: 1, 2: 1 };
    
    for (let i = 3; i <= n; i++) 
    {
        memo[i] = (memo[i - 1] + memo[i - 2]) % 1234567;
    }
    
    return memo[n];
}

function solution(n) 
{
    return fibo(n);
}
