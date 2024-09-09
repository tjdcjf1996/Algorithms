function solution(today, terms, privacies) {
    var answer = [];
    const termsObj = {};
    
    today = today.split(".").map(Number);
    const todayDate = new Date(today[0], today[1] - 1, today[2]);

    terms.forEach((term) => {
        const [type, period] = term.split(" ");
        termsObj[type] = Number(period);
    });

    function getExpireDate(type, date) {
        date = date.split(".").map(Number);
        let expireDate = new Date(date[0], date[1] - 1, date[2]);
        
        expireDate.setMonth(expireDate.getMonth() + termsObj[type]);

        return expireDate;
    }

    privacies.forEach((privacy, i) => {
        const [date, type] = privacy.split(" ");
        const expireDate = getExpireDate(type, date);
        if (expireDate <= todayDate) {
            answer.push(i + 1);
        }
    });

    return answer;
}