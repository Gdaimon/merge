var m = [];
m = llenarArreglo(m);
console.log(m);
m = dividir(m);
console.log(dividir(m));


function llenarArreglo(m) {
    for (var i = 0; i < 64; ++i) {
        m.push(Math.round(Math.random() * 100));
    }
    return m;
}

function dividir(arr) {

    if (arr.length < 2) {
        return arr;
    }

    var mid = Math.floor(arr.length / 3);

    var uno = arr.slice(0, mid+1);
//var uno = dividir(arr.slice(0, mid));
    console.log(arr.length);
    console.log('uno: '+ uno.length);
    console.log((mid*2)+1);
    var dos = arr.slice(mid+1, (mid*2)+1);
    //var dos = dividir(arr.slice(mid, mid*2));
    console.log('dos: '+ dos.length);
    var tres = arr.slice((mid*2)+1, (mid*3)+2);
    //var tres = dividir(arr.slice(mid*2, (mid*3)-1));
    console.log('tres: '+ tres.length);

    console.log('suma: '+ uno+dos+tres);
    return merge(uno, dos, tres);
}

function merge(a, b, c) {
    var result = [];

    while (a.length > 0 && b.length > 0 && c.length ) {
        result.push(a[0] < b[0] ? a.shift() : b.shift());
    }

    return result.concat(a.length ? a : b);
}
