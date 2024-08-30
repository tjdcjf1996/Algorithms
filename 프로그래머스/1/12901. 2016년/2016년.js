function solution(a, b) {
    let monthDay = [0,31,29,31,30,31,30,31,31,30,31,30,31];
    let dayName = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    
    let totalDay = b;
    
    for(let i=1; i<a; i++){
        totalDay += monthDay[i];   
    }
    
    return dayName[(totalDay+4)%7];
}