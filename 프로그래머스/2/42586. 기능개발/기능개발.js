function solution(progresses, speeds) {
    const answer = [];
    
    const completeDays = progresses.map((progress,idx) => Math.ceil((100-progress)/speeds[idx]));
    const length = completeDays.length;
    let day = completeDays[0];
    
    let num = 0;
    for(let i=0; i<length; i++){
          if(completeDays[i] <= day){
              num++;
          }else{
              answer.push(num);
              num = 1;
              day = completeDays[i];
          }
    }
    answer.push(num);
    
    return answer;
}