function solution(N, road, K) {
    const roadMap = new Map();

    for (let [from, to, weight] of road) {
        if (!roadMap.has(from)) roadMap.set(from, []);
        if (!roadMap.has(to)) roadMap.set(to, []);
        
        roadMap.get(from).push({ to, weight });
        roadMap.get(to).push({ to: from, weight }); 
    }

    const distances = Array(N + 1).fill(Infinity);
    distances[1] = 0;
    const queue = [{ node: 1, cost: 0 }];

    while (queue.length > 0) {
        const { node, cost } = queue.shift();

        if (cost > distances[node]) continue;

        for (let neighbor of roadMap.get(node)) {
            const newCost = cost + neighbor.weight;
            if (newCost < distances[neighbor.to]) {
                distances[neighbor.to] = newCost;
                queue.push({ node: neighbor.to, cost: newCost });
            }
        }
    }

    return distances.filter((dist) => dist <= K).length;
}
