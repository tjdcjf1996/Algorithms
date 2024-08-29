function solution(s) {
    const arr = [];
    let chk = 0;
   for(let i=0; i<s.length ; i++){
       if(s[i] === " "){
           chk = 0;
           arr.push(s[i])
       }else if(chk === 0 || chk%2 === 0){
           chk++;
           arr.push(s[i].toUpperCase());
       }else{
           chk++;
           arr.push(s[i].toLowerCase());
       }
   }
    return arr.join("");
}