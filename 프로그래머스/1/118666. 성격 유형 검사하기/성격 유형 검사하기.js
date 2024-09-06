function solution(survey, choices) {
    let answer = "";
    const zipyo = ["RT","CF","JM","AN"];
    const personality = {
        'A' : 0,
        'C' : 0,
        'F' : 0,
        'J' : 0,
        'M' : 0,
        'N' : 0,
        'R' : 0,
        'T' : 0
        
    };
    
    for(let i=0; i<survey.length; i++){
        if(choices[i] === 4 && !choices[i]>7) continue;
        if(choices[i] < 4) {
            personality[survey[i][0]] += 4-choices[i];
        }else{
            personality[survey[i][1]] += choices[i]-4;
        }
    };
    
    zipyo.forEach((p)=>{
        if(personality[p[0]] === personality[p[1]]){
            answer += p[0];
        }else{
            personality[p[0]] > personality[p[1]] ? answer += p[0] : answer += p[1];
        }
        
    });
    
    return answer;
}