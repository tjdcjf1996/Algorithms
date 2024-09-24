function solution(citations) {

    const sortedCitations = citations.sort((a,b)=>b-a);
    const length = sortedCitations.length;
    
    for(let i=0; i<length; i++){
        if(sortedCitations[i]<i+1) return i;
    }
    
    return length;

}