const arrayFuncs = [
    function decirHola() {
        console.log("Hola a todos desde una funcion encerrada en un array")
    }
]

console.log(arrayFuncs.map(func => func))