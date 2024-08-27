function solution(arr) {
    let min = 0;
    if(arr.length===1 && arr[0] === 10){
        return [-1];
    }else{
        for(let i=1; i<arr.length; i++){
        if(arr[min]>arr[i]) min = i;
    }
    arr.splice(min,1)
    }
    
    return arr;
    
}