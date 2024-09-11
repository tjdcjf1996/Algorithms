function solution(park, routes) {
  const maxY = park.length - 1; 
  const maxX = park[0].length - 1; 

  let y = park.findIndex((row) => row.includes("S"));
  let x = park[y].indexOf("S");

  routes.forEach((route) => {
    const [d, n] = route.split(" ");
    let newX = x;
    let newY = y;
    let canMove = true;

    for (let i = 0; i < Number(n); i++) {
      if (d === "E") newX++;
      else if (d === "W") newX--;
      else if (d === "S") newY++;
      else if (d === "N") newY--;

      if (
        newX > maxX ||
        newX < 0 ||
        newY > maxY ||
        newY < 0 ||
        park[newY][newX] === "X" 
      ) {
        canMove = false;
        break;
      }
    }

    if (canMove) {
      x = newX;
      y = newY;
    }
  });

  return [y, x]; 
}