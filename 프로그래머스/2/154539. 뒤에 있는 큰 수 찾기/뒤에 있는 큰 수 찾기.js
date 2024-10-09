function solution(numbers) {
var answer = new Array(numbers.length).fill(-1); // 결과 배열을 -1로 초기화
    var stack = []; // 빈 스택 생성

    // 오른쪽에서 왼쪽으로 순회
    for (let i = numbers.length - 1; i >= 0; i--) {
        // 현재 숫자보다 작거나 같은 숫자는 스택에서 제거
        while (stack.length > 0 && stack[stack.length - 1] <= numbers[i]) {
            stack.pop(); // 스택에서 제거
        }
        // 스택이 비어있지 않다면 가장 큰 숫자를 다음 큰 숫자로 기록
        if (stack.length > 0) {
            answer[i] = stack[stack.length - 1]; // 다음 큰 숫자
        }
        // 현재 숫자를 스택에 추가
        stack.push(numbers[i]);
    }

    return answer; // 결과 반환
}