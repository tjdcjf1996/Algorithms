function solution(n, lost, reserve) {
    let guje = 0;
    lost.sort((a,b)=>a-b);
    reserve.sort((a,b)=>a-b);
    
    const filteredLost = lost.filter((lostHuman) => {
        if (reserve.includes(lostHuman)) {
            reserve.splice(reserve.indexOf(lostHuman), 1);
            return false;
        }
        return true;
    });

    filteredLost.forEach((lostHuman) => {
        if (reserve.includes(lostHuman - 1)) {
            guje++;
            reserve.splice(reserve.indexOf(lostHuman - 1), 1);
        } else if (reserve.includes(lostHuman + 1)) {
            guje++;
            reserve.splice(reserve.indexOf(lostHuman + 1), 1);
        }
    });

    return (n - filteredLost.length) + guje;
}