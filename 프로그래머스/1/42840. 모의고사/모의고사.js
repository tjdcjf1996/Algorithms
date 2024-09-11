// function solution(answers) {
//     const mathFuck1 = [1,2,3,4,5];
//     const mathFuck2 = [2,1,2,3,2,4,2,5];
//     const mathFuck3 = [3,3,1,1,2,2,4,4,5,5];
//     const score = [0,0,0];
//     const answer = [];
    
//     answers.forEach((num,idx)=>{
//         if(num === mathFuck1[idx%mathFuck1.length]) score[0]++;
//         if(num === mathFuck2[idx%mathFuck2.length]) score[1]++;
//         if(num === mathFuck3[idx%mathFuck3.length]) score[2]++;        
//     })
    
    // for(let i=0; i<3; i++){
    //     if(score[i] === Math.max(...score)) answer.push(i+1);
    // }
    
//     return answer;
// }

function solution(answers) {
  let person1 = [1, 2, 3, 4, 5];
  let person2 = [2, 1, 2, 3, 2, 4,2, 5];
  let person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let score = [0, 0, 0];
  const answer = [];
  answers.forEach((answer, idx) => {
    if (answer === person1[idx % person1.length]) score[0]++;
    if (answer === person2[idx % person2.length]) score[1]++;
    if (answer === person3[idx % person3.length]) score[2]++;
  });
  for (let i = 0; i < 3; i++) {
    if (score[i] === Math.max(...score)) answer.push(i + 1);
  }
  return answer;
}
