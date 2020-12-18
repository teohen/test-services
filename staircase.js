// function staircase(n) {
//     let line = [];
//     for (let j = 0; j < n; j++) {
//         line[j] = ' '
//     }
//     for (let i = n - 1; i >= 0; i--) {
//         line[i] = '#'
//         console.log(line.join(''))
//     }
// }

function staircase(n) {
    let text = ""
    for (let j = 0; j < n; j++) {
        text += '#'
        console.log(text.padStart(n, ' '))
    }
}

staircase(6)