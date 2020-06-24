let values;
let result;
window.onload = function() {
    cnv = document.querySelector("#cnv");
    width = cnv.width = 1000;
    height = cnv.height = 500;
    cnv.style.backgroundColor = "white";
    ctx = cnv.getContext("2d");

    setup();

    setInterval(draw, 1000 / 40);

}

function setup() {

    result = new Array();

    for (let i = 0; i < width; i++) {
        result.push({
            name: i,
            marks: Math.floor(Math.random() * height)
        })

    }

    values = new Array(width / 4);

    for (let i = 0; i < values.length; i++) {
        values[i] = result[i].marks;
    }
}

function draw() {

    ctx.clearRect(0, 0, width, height);
    change();
    for (let i = 0; i < values.length; i++) {
        ctx.beginPath();
        ctx.moveTo((4 * i) + 1, height);
        ctx.lineTo((4 * i) + 1, height - values[i]);
        ctx.stroke();
    }

}

function change() {
    for (let i = 0; i < values.length; i++) {
        if (values[i] > values[i + 1]) {
            let temp = values[i];
            values[i] = values[i + 1]
            values[i + 1] = temp;
        }
    }


}