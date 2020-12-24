let val

//Numbers to Strings
val = String(84)

val = String(84 + 1)

//boolean to a string
val = String(true)
//Date() to a string
val = String(new Date())

val = String([1, 2, 3, 4])

//toString()
val = (5).toString()
val = true.toString()

// String to Numbers
val = Number("100.55") // 5
val = Number(true)
val = Number(false)
val = Number(null)
val = Number("hello") //NaN   not a number
val = Number([1, 2, 3])

val = parseInt("100.54352345") //100
val = parseFloat("100.5552354325234523452345") //100.55

console.log(val)
console.log(typeof val)
console.log(parseFloat(val.toFixed(2)))
