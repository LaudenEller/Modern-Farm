// import plant array
import { addPlant } from "./field.js"
// import seeds
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

// export a function that accepts a parameter
export const plantSeeds = (yearsPlanArray) => {
    // create an array of arrays
    // for (let i = 0; i < yearsPlanArray.length; i++) {
    //     for (let j = 0; j < yearsPlanArray[i].length; j++) {

    for (const arrayArrayInteger of yearsPlanArray) {
        // iterate through both arrays
        for (const arrayStringInteger of arrayArrayInteger) {
            // each integer on child array should invoke corresponding function
            if (arrayStringInteger === "Asparagus") {
                // add seed to array of plants in field module
                addPlant(createAsparagus())
            }
            else if (arrayStringInteger === "Potato") {
                addPlant(createPotato())
            }
            else if (arrayStringInteger === "Soybean") {
                addPlant (createSoybean())
            }
            else if (arrayStringInteger === "Sunflower") {
                addPlant(createSunflower())
            }
            else if (arrayStringInteger === "Wheat") {
                addPlant(createWheat())
            }
            else if (arrayStringInteger === "Corn") {
                const cornSeed = createCorn()
                addPlant(cornSeed[0])
                addPlant(cornSeed[1])
            }
        }
    }
}