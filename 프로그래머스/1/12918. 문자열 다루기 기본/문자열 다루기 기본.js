function solution(s) {
    return s.length===4 || s.length=== 6 ? (s === [...s].map(a=> 48<=a.charCodeAt() && a.charCodeAt()<=57 ? a : "").join("") ? true:false) : false;
}