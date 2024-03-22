const pi = 3.14;
const args = process.argv.slice(2);

function circleArea(radius) {
    let area = pi * radius * radius;
    console.log(`Yarıçapı ${args} olan darirenin alanı: ${area}`);
}
circleArea(args * 1);