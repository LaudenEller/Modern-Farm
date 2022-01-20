// import plant array
import { addPlant } from "./field.js"

// export a function that accepts a parameter
export const plantSeeds = (yearsPlanArray) => {
    // create an array of arrays
    for (arrayArrayInteger of yearsPlanArray) {
        // iterate through both arrays
        for (arrayStringInteger of arrayArrayInteger) {
            // each integer on child array should invoke corresponding function
            if (arrayStringInteger === "asparagus") {
                const asparagusSeed = createAsparagus()
                // add seed to array of plants in field module
                addPlant(asparagusSeed)
            }
            else if (arrayStringInteger === "Corn") {
                const cornSeed = createCorn()
                addPlant(cornSeed)
            }
            else if (arrayStringInteger === "Potato") {
                const potatoSeed = createPotato()
                addPlant (potatoSeed)
            }
            else if (arrayStringInteger === "Soybean") {
                const soybeanSeed = createSoybean()
                addPlant (soybeanSeed)
            }
            else if (arrayStringInteger === "Sunflower") {
                const sunflowerSeed = createSunflower()
                addPlant(sunflowerSeed)
            }
            else if (arrayStringInteger === "Wheat") {
                const WheatSeed = createWheat()
                addPlant(WheatSeed)
            }
        }
    }
}