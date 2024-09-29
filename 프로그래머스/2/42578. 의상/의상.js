function solution(clothes) {
    const deduplicationClothes = new Set(clothes);
    const clothesMap = new Map();
    
    [...deduplicationClothes].map((cloth) => {
        if(clothesMap.has(cloth[1])){
            clothesMap.set(cloth[1],clothesMap.get(cloth[1])+1);
        }else{
            clothesMap.set(cloth[1],1);
        }
    });
    
    const clothesValues = [...clothesMap.values()];
    console.log(clothesValues)
    if(clothesValues.length === 1) return clothesValues[0];
    const result = clothesValues.reduce((acc,cur)=>acc*(cur+1),1);
    return result - 1;
    
}