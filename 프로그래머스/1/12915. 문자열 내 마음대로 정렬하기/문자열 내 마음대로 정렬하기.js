// function solution(strings, n) {
//     const arr = [];
//     const result = [];
//     strings.forEach(function (str){
//         arr.push({key:str, value:[...str][n]})
//     })
//     arr.sort(function(a,b){
//         if(a.value > b.value){
//             return 1;
//         }else if(a.value < b.value){
//             return -1;
//         }else{
//             return a.key>b.key?1:-1      
//         }
//     });
//     for (var i of arr) result.push(i.key);
//     return result;

// }

function solution(strings, n) {
    strings.forEach((str,i) => strings[i] = str[n] + strings[i]);
    strings.sort();
    let i=0;
    while(i < strings.length){
        strings[i] = strings[i].replace(strings[i][0],"");
        i++;
    }
    
    return strings;
}