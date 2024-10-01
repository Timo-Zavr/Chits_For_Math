let Eval_Paerabola = document.querySelector('.eval_Paerabola')
let Eval_square_equation = document.querySelector('.eval_square_equation')

function parabola(){                    //   y = ax^2 + bx + c   ПАРАБОЛА   //
    let a = parseFloat(document.querySelector('.a_P').value)
    let b = parseFloat(document.querySelector('.b_P').value)
    let c = parseFloat(document.querySelector('.c_P').value)
    //   Вершина (x; y)   //
    let x = -b/(2*a)
    let y = a*(x*x) + b*x + c
    document.querySelector("#A1").textContent = "1. Вершина (" + x + "; " + y + ")" 
    //   Пересечение оX y=0   //
    let D = b*b - 4*a*c
    let x1 = (-b + Math.sqrt(D))/(2*a)
    let x2 = (-b - Math.sqrt(D))/(2*a)
    // console.log('Пересекается с осью X в точках:', x1, x2)
    document.querySelector("#A2").textContent = "2. Пересекается с осью X в точках: " + x1 + ", " + x2
    //   Пересечение оY x=0   //
    let Y = c
    // console.log('Пересекается с осью Y в точке:', Y)
    document.querySelector("#A3").textContent = "3. Пересекается с осью Y в точке: " + Y
}

function square_equation(){             //   ax^2 + bx + c = 0   Квадратное уравнение   //
    let a = parseFloat(document.querySelector('.a_sE').value)
    let b = parseFloat(document.querySelector('.b_sE').value)
    let c = parseFloat(document.querySelector('.c_sE').value)
    let D = b*b - 4*a*c
    let x1 = (-b + Math.sqrt(D))/(2*a)
    let x2 = (-b - Math.sqrt(D))/(2*a)
    document.querySelector("#X1").textContent = "X1 = " + x1
    document.querySelector("#X2").textContent = "X2 = " + x2
}

Eval_Paerabola.addEventListener('click', () => {
    console.log("Расчёт окончен")
    parabola()
})
Eval_square_equation.addEventListener('click', () => {
    console.log("Расчёт окончен")
    square_equation()
})