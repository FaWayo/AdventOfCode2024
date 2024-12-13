let reports = [];

async function getInputData() {
    await fetch("./day2/part1/input.txt")
        .then((res) => res.text())
        .then((text) => {
            const lines = text.split('\n')

            reports = lines.map(line => line.trimEnd().split(' ').map(Number))
        })
}

function checkIncreaseDecrease(arr) { 
    let increasing = true
    let decreasing = true

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) {
            increasing = false
        }
        if (arr[i] >= arr[i - 1]) {
            decreasing = false
        }
    }

    return increasing || decreasing
}

function checkDifference(numbers) { 
    for (let i = 0; i < numbers.length - 1; i++) {
        const diff = Math.abs(numbers[i] - numbers[i + 1])
        if (diff < 1 || diff > 3) {
            return false
        }
    }
    return true
}

async function run() {
    await getInputData()
    
    let safeReports = 0
    reports.forEach((report) => {
        if (checkIncreaseDecrease(report) && checkDifference(report)) {
            safeReports++
        }
    })
    
    console.log('Number of safe reports:', safeReports)
}

run()