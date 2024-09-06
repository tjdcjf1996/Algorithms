function solution(wallpaper) {

    let drag = {
        lux: Infinity,
        luy: Infinity,
        rdx: -Infinity,
        rdy: -Infinity
    };

    wallpaper.forEach((row, y) => {
        if (row.includes('#')) {
            const first = row.indexOf('#');
            const last = row.lastIndexOf('#');

            drag.lux = Math.min(drag.lux, first);
            drag.luy = Math.min(drag.luy, y);
            drag.rdx = Math.max(drag.rdx, last + 1);
            drag.rdy = Math.max(drag.rdy, y + 1);
        }
    });

    return [drag.luy, drag.lux, drag.rdy, drag.rdx];
}