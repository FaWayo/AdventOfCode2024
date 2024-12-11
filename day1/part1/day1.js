//1. Get input data and split into groups
//2. Arrange each array in ascending order
//3. Compare indexes and subtract the smallest value from the biggest value for each index
//4. Do for each comparison and push into a new array for differences
//5. Calculate each value in the difference array to find the total distance


let group1LocationIds = []
let group2LocationIds = []
let differences = []

async function getInputData() {
    await fetch("./day1/part1/input.txt")
        .then((res) => res.text())
        .then((text) => {
            const lines = text.split('\n')

            lines.forEach((line) => {
                if (line.trim() === '') return
                const values = line.trim().split(/\s+/)

                group1LocationIds.push(parseFloat(values[0]))
                group2LocationIds.push(parseFloat(values[1]))


            })
        })
        .catch((e) => console.error(e, 'error'))
}

async function rearrangeInputData() {
    await getInputData()

    group1LocationIds.sort((a, b) => a - b)
    group2LocationIds.sort((a, b) => a - b)

    console.log(group1LocationIds, 'group 1 list')
    console.log(group2LocationIds, 'group 2 list')
}

async function compareGroups() {
    await rearrangeInputData()

    group1LocationIds.map((id1, i) => {
       const id2 = group2LocationIds[i]

       const difference = Math.abs(id1 - id2)
       console.log(id1, id2, i, difference)

       differences.push(difference)
    })
}

async function getTotalDistanceOfLists() {
    let totalDistance = 0
    await compareGroups()

    for(let i = 0; i < differences.length; i++){
        totalDistance += differences[i]
    }

    console.log(totalDistance, 'distance')
    return totalDistance
}

getTotalDistanceOfLists()
