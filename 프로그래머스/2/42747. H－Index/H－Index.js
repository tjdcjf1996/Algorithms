function solution(citations) {

    const sortedCitations = citations.sort((a,b)=>b-a);
    const length = sortedCitations.length;
    let answer = 0;
    
    for(let i=0; i<length; i++){
        if(sortedCitations[i]<i+1) return i;
    }
    
    return length;

}