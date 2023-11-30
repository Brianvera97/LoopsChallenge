function impar() {
    for (var i = 1; i < 20; i++) {
        if (i % 2 != 0) {
            console.log(i)
        }
    }
}
function multiplo() {
    for (var i = 100; i > 0; i--) {
        if (i == 3 || i == 9 || i == 27 || i == 81) {
            console.log(i)
        }
    }
}
function secuencia() {
    for (var i = 4; i >= -3.5; i = i - 1.5) {
        console.log(i)
    }
}
function sigma() {
    var sum = 0
    for (var i = 0; i <= 100; i++) {
        sum = sum + i
        console.log(sum)
    }
}
function factorial() {
    var product = 1
    for (var i = 1; i <= 12; i++) {
        product = product * i
        console.log(product)
    }
}
