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


// 더 효율적인 코드
// function solution(survey, choices) {
//     let answer = "";
//     const personality = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
    
//     // 각 질문에 따른 선택을 반영
//     for (let i = 0; i < survey.length; i++) {
//         const [disagree, agree] = survey[i];  // 성격 유형 쌍
//         const score = choices[i] - 4;  // 4를 기준으로 점수 계산 (중립은 0)
        
//         if (score < 0) {
//             personality[disagree] += Math.abs(score);  // 비동의 선택
//         } else if (score > 0) {
//             personality[agree] += score;  // 동의 선택
//         }
//     }

//     // 성격 유형 쌍에 따라 더 점수가 높은 쪽을 선택
//     const pairs = [['R', 'T'], ['C', 'F'], ['J', 'M'], ['A', 'N']];
    
//     pairs.forEach(([first, second]) => {
//         if (personality[first] >= personality[second]) {
//             answer += first;
//         } else {
//             answer += second;
//         }
//     });
    
//     return answer;
// }