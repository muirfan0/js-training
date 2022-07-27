var age = null;
// tyoeof age


// -------------------- OPERATORS ------------------------
// && ---> both condtions must be true
// || ---> one of them should be true
// == ---> compare without datatypes
// === --> compare with datatypes



// Eligibility only if age is greater than 18 and less then 30


// if (age > 18 && age < 30) {
//     console.log('Eligible')
// } else {
//     console.log('Not Eligible')
// }

// var age = '18'
// if (age == 18) {
//     console.log('true')
// } else {
//     console.log('false')
// }



// --------------------- CONPARISON ------------------------
// if (undefined == null) {
//     console.log('true')
// } else {
//     console.log('false')
// }

// if (null ==  0) {
//     console.log('true')
// } else {
//     console.log('false')
// }

// console.log(typeof null)



// --------------------- FALSE CASES ------------------------
// 0 ---> false
// '' ---> false
// undefined ---> false
// null ----> false



// --------------------- NULL & UNDEFINED COMPARISON --------
// null >= 0 ------------> true
// null == 0 ------------> false
// null > 0 -------------> false
// undefined == 0 -------> false
// null == undefined ----> true


// --------------------- SWITCH CASE ------------------------
color = 'red';

switch(color) {
    case 'blue':
        console.log('false');
        break
    case 'red':
        console.log('true: red');
        break;
    case 'green':
        console.log('false');
        break;
    default:
        console.log('not defined')
}