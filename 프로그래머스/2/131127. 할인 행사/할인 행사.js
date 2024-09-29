function solution(want, number, discount) {
    const wantItemMap = new Map();
    const wantItemAmount = number.reduce((acc, cur) => acc + cur, 0);
    let result = 0;

    for (let i = 0; i < want.length; i++) {
        wantItemMap.set(want[i], number[i]);
    }
    
    for (let i = 0; i <= discount.length - wantItemAmount; i++) {
        const ItemMap = new Map(wantItemMap);

        for (let j = i; j < i + wantItemAmount; j++) {
            if (ItemMap.has(discount[j])) {
                ItemMap.set(discount[j], ItemMap.get(discount[j]) - 1);
                if (ItemMap.get(discount[j]) === 0) {
                    ItemMap.delete(discount[j]);
                }
            }
        }

        if (ItemMap.size === 0) {
            result ++;
        }
    }
    
    return result;
}
