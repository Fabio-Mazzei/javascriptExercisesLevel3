// Kaprekar's Routine. Create a variable that, upon receiving any number between 1000 and 9999, returns which iteration resulted in the number 6174, according to Kaprekar's Routine.

let arr1 = [], arr2 = [], arr3 = [], arr4 = [], arr5 = [], arr6 = [], arr7 = [], arr8 = [] ,arr9 = [], arr10 = []
OriginalNumber = 5062
i = 1

while (OriginalNumber != 6174) {
    if (i === 10) {
        break
    }
    let digitToArray = String(OriginalNumber).split("")
    function ascendant(arr) {
        arr.sort((a, b) => {return a-b})
        ascendantNumber = Number(arr.join(""))
        return ascendantNumber
    }
    numberAsc = ascendant(digitToArray)
    function descendant(arr) {
        arr.sort((a, b) => {return b-a})
        descendantNumber = Number(arr.join(""))
        return descendantNumber
    }
    numberDesc = descendant(digitToArray)
    result = numberDesc - numberAsc
    
    if (result === 6174 && i === 1) {
        arr1.push(result)
    } else if (result === 6174 && i === 2) {
        arr2.push(result)
    } else if (result === 6174 && i === 3) {
        arr3.push(result)
    } else if (result === 6174 && i === 4) {
        arr4.push(result)
    } else if (result === 6174 && i === 5) {
        arr5.push(result)
    } else if (result === 6174 && i === 6) {
        arr6.push(result)
    } else if (result === 6174 && i === 7) {
        arr7.push(result)
    } else if (result === 6174 && i === 8) {
        arr8.push(result)
    } else if (result === 6174 && i === 9) {
        arr9.push(result)
    }
    OriginalNumber = result
    i += 1
}
console.log("\n1) " + arr1, 
            "\n2) " + arr2, 
            "\n3) " + arr3, 
            "\n4) " + arr4, 
            "\n5) " + arr5, 
            "\n6) " + arr6, 
            "\n7) " + arr7, 
            "\n8) " + arr8, 
            "\n9) " + arr9)