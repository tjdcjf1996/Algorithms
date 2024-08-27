const solution = n => {
  let arr = [];
  for(let i=1; i<=Math.sqrt(n-1); i++ ){
    if((n-1) % i === 0){
      if(i!==1) arr.push(i);
      arr.push((n-1)/i);
    }
  }
   
  return arr.sort((a,b)=>a-b)[0];
};