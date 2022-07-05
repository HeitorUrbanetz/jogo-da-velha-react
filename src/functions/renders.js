
export const renders = (showV) => {
    const render = [];

    for (let i = 1, max = 4; i < max; i++) {
            render.push(
            <div key={i} id={i} className="square" onClick={() => showV(i)}></div>
        )
        }
        return render;
};
export const rendersMID = (showV) => {
    const render = [];
    for (let i = 4, max = 7; i < max; i++) {
            render.push(
            <div key={i} id={i} className="square" onClick={() => showV(i)}></div>
        )
        }
        return render;
};
export const rendersBottom = (showV) => {
    const render = [];
    for (let i = 7, max = 10; i < max; i++) {
            render.push(
            <div key={i} id={i} className="square-bottom" onClick={() => showV(i)}></div>
        )
        }
        return render;
};
