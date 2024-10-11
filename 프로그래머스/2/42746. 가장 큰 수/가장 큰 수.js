function solution(numbers) {
    return num = numbers.sort((a,b)=>{
        a = a.toString();
        b = b.toString();

        return (b+a) - (a+b)
        
    }).join('').replace(/^0+/,'0')

}