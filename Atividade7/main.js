
function Retangulo(x, y) {
    this.base = x;
    this.altura = y;

    this.area = () => {
        return this.base * this.altura;
    }
}

const ret = Retangulo(5, 7);
let area = ret.area();

alert('ret:' + JSON.stringify(ret));
alert('area:' + area);
