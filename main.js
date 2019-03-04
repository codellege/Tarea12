let d_input = document.getElementById('input')
let d_select = document.getElementById('select')
let d_alert = document.getElementById('alert')

let choice = 1
let kilos = 0
let text = ''

let AN = 11
let AC = 10
let AS = 12
let E = 24
let A = 27

validar()

d_input.addEventListener('keyup', (e) => {

    validar()
    filterNumber(e)

})

d_select.addEventListener('change', (e) => {
    update(e)
})

function update(e) {

    switch (e.target.value) {
        case 'America del Norte':
            choice = 1
            break
        case 'America del Sur':
            choice = 2
            break
        case 'America Central':
            choice = 3
            break
        case 'Europa':
            choice = 4
            break
        case 'Asia':
            choice = 5
            break
    }

    calculate()

}

function validar() {

    if (d_input.value == '') {
        text = `<div class="alert border-primary bg-dark text-white"    role="alert">
                <strong>Welcome!<br></strong>
                </div>
                <div class="alert border-primary bg-dark text-white m-0" role="alert">
                INSTRUCTION<br>
                <small>1. Input a weight</small><br>
                <small>2. Chose a Location</small>
                </div>`
        d_alert.innerHTML = text
        d_select.disabled = true

    } else {

        if (Number(d_input.value) > 5) {

            d_input.classList.add('invalid')
            d_input.classList.remove('valid')
            d_select.disabled = true

            text = `<div class="alert border-primary bg-dark text-white"    role="alert">
                <strong>WARNING!<br></strong>
                </div>
                <div class="alert border-primary bg-dark text-white" role="alert">
                WE CAN'T SHIP THE BOX<br>
                <small>Try with less weight</small>
                
                </div>`
            d_alert.innerHTML = text

        } else {

            d_input.classList.remove('invalid')
            d_input.classList.add('valid')
            d_select.disabled = false
            calculate()

        }

    }

}

function filterNumber(e) {

    let m = e.target.value.slice(-1) //LAST CHARACTER ENTERED
    let n = Number(e.target.value) //INPUT TO NUMBER OR NaN
    let o = e.target.value.substr(0, e.target.value.length - 1) //THE INPUT VALUE MINUS THE LAST CHAR ENTERED
    if (!isNaN(n)) {
        kilos = Number(e.target.value) //UPDATES WITH A VALID NUMBER
    } else if (m == '.') {
        if ((e.target.value.split('.')).length != 2) {
            e.target.value = o //ERASES LAST
        }
    } else {
        e.target.value = o //ERASES LAST
    }
}

function calculate() {
    kilos = Number(d_input.value)
    let c = 0;
    let s = ''

    switch (choice) {

        case 1:
            s = 'NORTH AMERICA'
            c = AN * kilos;
            break
        case 2:
            s = 'SOUTH AMERICA'
            c = AS * kilos;
            break
        case 3:
            s = 'CENTRAL AMERICA'
            c = AC * kilos;
            break
        case 4:
            s = 'EUROPE'
            c = E * kilos;
            break
        case 5:
            s = 'ASIA'
            c = A * kilos;
            break
    }

    text = `<div class="alert border-primary bg-dark text-white" role="alert">
            <strong>TO ${s}</strong>
            </div>
            <div class="alert border-primary bg-dark text-white" role="alert">
           TICKET INFORMATION<br>
            <small>Shipping cost: $${c.toFixed(2)}</small>
            
            </div>`

    d_alert.innerHTML = text


}