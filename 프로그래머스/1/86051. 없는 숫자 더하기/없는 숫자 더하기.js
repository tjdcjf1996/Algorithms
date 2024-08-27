function solution(numbers) {
    const num = [0,1,2,3,4,5,6,7,8,9];
    return num.filter(x => !numbers.includes(x)).reduce((sum,now)=> sum + now )
}