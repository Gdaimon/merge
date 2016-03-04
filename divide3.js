var p = [];
p = llenarArreglo();
console.log(p);
p = dividir(p);
console.log(p);


function llenarArreglo() {
    var temp = [];
    for (var i = 0; i < 9; ++i) {
        temp.push(Math.round(Math.random() * 100));
    }
    return temp;
}

function dividir(arr) {

    if (arr.length < 2) {
        return arr;
    }

    var mid = Math.floor(arr.length / 3);

    var uno = dividir(arr.slice(0, mid));
    var dos = dividir(arr.slice(mid, mid * 2));
    var tres = dividir(arr.slice(mid * 2));

    return merge(uno, dos, tres);
}

/*
function merge(a, b, c) {
    var result = [];
    while (a.length > 0 && b.length > 0 && c.length > 0) {
        if (a[0] < b[0]) {
            if (a[0] < c[0]) {
                result.push(a.shift());
                result.push(c.shift());
                result.push(b.shift());
            } else {
                result.push(c.shift());
                result.push(a.shift());
                result.push(b.shift());
            }
        } else {
            if (b[0] < c[0]) {
                result.push(b.shift());
                if (c[0] < a[0]) {
                    result.push(c.shift());
                    result.push(a.shift());
                } else {
                    result.push(a.shift());
                    result.push(c.shift());
                }

            } else {
                result.push(c.shift());
                if (b[0] < a[0]) {
                    result.push(b.shift());
                    result.push(a.shift());
                } else {
                    result.push(a.shift());
                    result.push(b.shift());
                }
            }
        }
    }
    return result;
}*/

function merge(a, b, c) {
    var result = [];
    var temp = [];

    while (a.length > 0 && b.length > 0) {
        temp.push(a[0] < b[0] ? a.shift() : b.shift());
    }

    if (a.length) {
        temp = temp.concat(a);
    } else {
        temp = temp.concat(b);
    }

    while (temp.length > 0 && c.length > 0) {
        result.push(temp[0] < c[0] ? temp.shift() : c.shift());
    }

    if (temp.length) {
        result = result.concat(temp);
    } else {
        result = result.concat(c);
    }
    return result;
}
