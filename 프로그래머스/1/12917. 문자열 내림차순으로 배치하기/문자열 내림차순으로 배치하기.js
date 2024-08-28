function solution(s) {
    
    const result = [...s].sort((a,b)=>b.charCodeAt()-a.charCodeAt());
    for(a of result){
      if(a<91){
        result.shift();
        result.push(a);
      }
    }
    
    return result.join("");
}