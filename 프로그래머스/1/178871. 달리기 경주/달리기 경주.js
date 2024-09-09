function solution(players, callings) {
    
    const position = new Map();
    
    players.forEach((man,i)=>{
        position.set(man, i);
    })
    
    callings.forEach((call)=>{
        const idx = position.get(call);
        position.set(call, idx-1);
        position.set(players[idx-1],idx);
        
        [players[idx], players[idx-1]] = [players[idx-1], players[idx]];
        
        
    })
    return players;
}