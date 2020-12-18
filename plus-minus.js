function plusMinus(arr) {
    let c_pos = 0;
    let c_neg = 0;
    let c_zer = 0;

    arr.forEach((item) => {
        if (item < 0)
            c_neg += 1;
        else if (item > 0)
            c_pos += 1
        else
            c_zer += 1
    })
    console.log((c_pos / arr.length).toFixed(6))
    console.log((c_neg / arr.length).toFixed(6))
    console.log((c_zer / arr.length).toFixed(6))
}

//-4 3 -9 0 4 1         


const val = [-4, 3, -9, 0, 4, 1]


plusMinus(val)
