var m = [];
m = llenarArreglo(m);
console.log(m);
m = dividir(m);
console.log(dividir(m));


function llenarArreglo(m) {
    for (var i = 0; i < 9; ++i) {
        m.push(Math.round(Math.random() * 100));
    }
    return m;
}

function dividir(arr) {

    if (arr.length < 2) {
        return arr;
    }

    var mid = Math.floor(arr.length / 2);
    var Left = dividir(arr.slice(0, mid));
    var Right = dividir(arr.slice(mid));

    return merge(Left, Right);
}

function merge(a, b) {
    var result = [];

    while (a.length > 0 && b.length > 0) {
        result.push(a[0] < b[0] ? a.shift() : b.shift());
    }

    return result.concat(a.length ? a : b);
}
