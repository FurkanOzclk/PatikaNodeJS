const args = process.argv.slice(2);

function circleArea(radius) {
    let area = Math.PI * radius * radius;
    console.log(`Yarıçapı ${args} olan darirenin alanı: ${area}`);
}

function circleCircumference(radius) {
    let circumference = 2 * Math.PI * radius;
    console.log(`Yarıçapı ${args} olan darirenin çevresi: ${circumference}`);
}

module.exports = {
    circleArea,
    circleCircumference
}