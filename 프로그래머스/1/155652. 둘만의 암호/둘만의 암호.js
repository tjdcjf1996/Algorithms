function solution(s, skip, index) {
    const answer = [];
    const alphabet = [];
    for(let i= 97; i<123; i++){
        alphabet.push(String.fromCharCode(i));
    }
    
    for( skipChr of skip ){
        alphabet.splice(alphabet.indexOf(skipChr),1);
    }
 
    for(chr of s){
        answer.push( alphabet[(alphabet.indexOf(chr)+index)% alphabet.length] )
    }
    
    return answer.join('');
}