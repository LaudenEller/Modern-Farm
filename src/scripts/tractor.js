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
    for (const arrayArrayInteger of yearsPlanArray) {
        // iterate through both arrays
        for (const arrayStringInteger of arrayArrayInteger) {
            // each integer on child array should invoke corresponding function
            if (arrayStringInteger === "Corn") {
                const cornSeed = createCorn()
                addPlant(cornSeed[0])
                addPlant(cornSeed[1])
            }
            else if (arrayStringInteger === "Asparagus") {
            const asparagusSeed = createAsparagus()
            // add seed to array of plants in field module
            addPlant(asparagusSeed)
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