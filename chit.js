let Eval = document.querySelector('.eval')

function parabola(){                    //   y = ax^2 + bx + c   ПАРАБОЛА   //
    let a = parseFloat(document.querySelector('.a').value)
    let b = parseFloat(document.querySelector('.b').value)
    let c = parseFloat(document.querySelector('.c').value)
    //   Вершина (x; y)   //
    let x = -b/(2*a)
    let y = a*(x*x) + b*x + c
    document.querySelector("#A1").textContent = "1. Вершина (" + x + "; " + y + ")" 
    //   Пересечение оX y=0   //
    let D = b*b - 4*a*c
    let x1 = (-b + Math.sqrt(D))/(2*a)
    let x2 = (-b - Math.sqrt(D))/(2*a)
    console.log(D)
    // console.log('Пересекается с осью X в точках:', x1, x2)
    document.querySelector("#A2").textContent = "2. Пересекается с осью X в точках: " + x1 + ", " + x2
    //   Пересечение оY x=0   //
    let Y = c
    // console.log('Пересекается с осью Y в точке:', Y)
    document.querySelector("#A3").textContent = "3. Пересекается с осью Y в точке: " + Y
}

Eval.addEventListener('click', () => {
    console.log("Расчёт окончен")
    parabola()
})