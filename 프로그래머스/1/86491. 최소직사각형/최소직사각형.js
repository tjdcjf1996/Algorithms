function solution(sizes) {
    let wMax = 0;
    let hMax = 0;
    sizes.forEach(arr=>{
        if(arr[0]<arr[1]) [arr[0],arr[1]] = [arr[1],arr[0]];
        wMax = Math.max(wMax,arr[0]);
        hMax = Math.max(hMax,arr[1]);
    });
    return wMax * hMax;
}