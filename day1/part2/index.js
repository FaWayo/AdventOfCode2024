//figure out how ofte each number from the left list appears in the right list.
//calcualte a total similarity score by:
//adding up each number in the left list after multiplying it by the number of times that number appears in the right list

//1. pick first value and check number of times it appears in group 2
//2. multiply value by number or times it appears and push into new array
//3. add all values in new array
import { rearrangeInputData, group1LocationIds, group2LocationIds } from '../part1/index.js'

let scores = []

async function appearanceFrequency() {
    await rearrangeInputData()

    group1LocationIds.forEach((id1) => {
        let appearedIn2ndList = 0

        group2LocationIds.forEach((id2) => {
            if (id1 === id2) {
                appearedIn2ndList++
            }
        })

        scores.push(id1 * appearedIn2ndList)

    })
}

async function getSimilarityScore() {
    await appearanceFrequency()

    let similarityScore = 0

    for (let i = 0; i < scores.length; i++) {
        similarityScore += scores[i]
    }

    return similarityScore

}

getSimilarityScore()