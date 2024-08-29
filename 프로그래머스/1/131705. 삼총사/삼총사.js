function solution(number) {
    const numL = number.length;
    let answer = 0;
    for(let i=0; i<numL-2; i++){
        cnt1 = i+1;
        cnt2 = cnt1+1;
        while(cnt2<numL && cnt1<numL-1 ){
            if(number[i] + number[cnt1] + number[cnt2] === 0) answer++;
            cnt2++;
            if(cnt2 == numL){
                cnt1++;
                cnt2 = cnt1+1;
            }
        }
    }
    
    return answer;
}