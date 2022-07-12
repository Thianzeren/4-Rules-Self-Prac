export function add(input: string) {
    var numStrList = splitStringToNumList(input)
    var numList = numStrList.map((num) => {
        return +num
    })

    checkNegative(numList)

    var sum: number = 0;
    numList.forEach((num) => {
        sum += num;
    });

    return sum;
}

function checkNegative(input: Array<number>) {
    input.forEach((num) => {
        if(num < 0) {
            throw new Error()
        }
    })
}

function splitStringToNumList(input: string) {
    if (input.charAt(0) == "/") {
        var delimiter = input.charAt(input.indexOf("\n") - 1)
        var numStr = input.substring(input.indexOf("\n") + 1, input.length)
        return numStr.split(delimiter).join(",").split("\n").join(",").split(",");
    } else {
        return input.split("\n").join(",").split(",");
    }
}
