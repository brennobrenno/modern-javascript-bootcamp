// students score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

const calcGrade = function (score, possibleScore=20) {
    const percent = (score / possibleScore) * 100
    let letterGrade
    if (percent >=90) {
        letterGrade = 'A'
    } else if (percent >= 80) {
        letterGrade = 'B'
    } else if (percent >= 70) {
        letterGrade = 'C'
    } else if (percent >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }

    return `You got a ${letterGrade} (${percent}%)!`
}

console.log(calcGrade(20))
console.log(calcGrade(15))
console.log(calcGrade(13))
console.log(calcGrade(10))
console.log(calcGrade(5))
console.log(calcGrade(0))
