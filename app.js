function anam() {
    var nam = prompt("To begin, enter your name.")
    var nam = alert(`Hello ${nam}, let's get started!`)
    return nam
}


function temp() {
var ask = prompt("If you would like to do Fahrenheit to Celsius, press 'f'. If you want Celsius to Fahrenheit, press 'c'.")
return ask
}
function k() {
    var a = prompt("what is the tempature?")
    return a
}

function ie() {
    var o = anam()
    var i = temp()
    var w = k()
    
    if (i == "c") {
        var math1 = (w * 9 / 5 + 32)
        alert(`The tempature is ${math1}`)
        
    
    } else if (i == "f") {
     var math = (w - 32 * 5 / 9)
     alert(`The tempature is ${math}` )
    } 
}

ie()   
  



