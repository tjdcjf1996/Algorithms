function solution(s) {
    return s.length===4 || s.length=== 6 ? s === Number.parseInt(s).toString() ? true:false : false;
}