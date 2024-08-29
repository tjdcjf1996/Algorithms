function solution(s, n) {
    let stringArr = [...s];
    
    stringArr.forEach((char, i)=> {
        const charAscii = char.charCodeAt();
        
        if(charAscii > 96 && charAscii < 123 && charAscii+n > 122 ) {
            stringArr[i] = String.fromCharCode( 97 + (charAscii+n-122) -1 );
        }else if(charAscii > 64 && charAscii < 91 && charAscii+n > 90 ){
            stringArr[i] = String.fromCharCode( 65 + (charAscii+n-90) -1 );
        }else if(char === " "){
            stringArr[i] = " ";
        }else{
            stringArr[i] = String.fromCharCode(charAscii+n);
        }
    })
    
    return stringArr.join("");
    
}

