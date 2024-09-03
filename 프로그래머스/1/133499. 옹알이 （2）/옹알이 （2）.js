function solution(babbling) {
    const wordList = ["aya", "ye", "woo", "ma"];
    let answer = 0;

    babbling.forEach((str) => {
        let original = str;
        wordList.forEach((word) => {
            if (original.includes(word.repeat(2))) {
                return;
            }
            original = original.split(word).join(' ');
        });

        if (original.trim() === '') {
            answer++;
        }
    });

    return answer;
}
