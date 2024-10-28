function solution(fees, records) {
    const inRecord = new Map();
    const totalTime = new Map(); 
    
    records.forEach((record) => {
        const [time, carNum, status] = record.split(' ');
        const [hour, minute] = time.split(':').map(Number);
        const timeInMinutes = hour * 60 + minute;

        if (status === 'IN') {
            inRecord.set(carNum, timeInMinutes);
        } else {
            const parkingTime = timeInMinutes - inRecord.get(carNum); 
            inRecord.delete(carNum);
            totalTime.set(carNum, (totalTime.get(carNum) || 0) + parkingTime);
        }
    });

    inRecord.forEach((timeIn, carNum) => {
        const parkingTime = 1439 - timeIn;
        totalTime.set(carNum, (totalTime.get(carNum) || 0) + parkingTime);
    });

    function calculateFee(time) {
        if (time <= fees[0]) return fees[1];
        const extraTime = Math.ceil((time - fees[0]) / fees[2]);
        return fees[1] + extraTime * fees[3];
    }

    const answer = [...totalTime.entries()]
        .sort((a, b) => a[0].localeCompare(b[0])) 
        .map(([_, time]) => calculateFee(time)); 

    return answer;
}
