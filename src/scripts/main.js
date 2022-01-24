// print welcome message
console.log("Welcome to the main module")

// import function that generates a yearly plan
import { createPlan } from "./plan.js"

// import function that populates field according to plan from tractor
import { plantSeeds } from "./tractor.js"

// import function that prints the "crops" in proper amounts
import { harvestPlants } from "./harvester.js"

// import function that returns a copy of the populated array
import { usePlants } from "./field.js"

// import function that prints harvested plants to a grid
import { Catalog } from "./catalog.js"

// save imported function to new variable
const yearlyPlan = createPlan()

// update the array in Field by calling the tractor function with the plan function passed as an argument
plantSeeds(yearlyPlan)

// save imported function to a new variable
const populatedPlantArray = usePlants()

// store imported function to new variable
const harvestedPlantsArray = harvestPlants(populatedPlantArray)

// populate index.HTML with HTML string
const locationParentHTMLElement = document.querySelector(".container")

locationParentHTMLElement.innerHTML = Catalog(harvestedPlantsArray)

// print catalog of harvested plants
console.log(Catalog)

// print function to developer console
// console.log(yearlyPlan)

// // temporary test code of module logic
// import { createAsparagus } from "./seeds/asparagus.js"

// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)

// import { createCorn } from "./seeds/corn.js"

// const cornSeed = createCorn()
// console.log(cornSeed)

// import { createPotato } from "./seeds/potato.js"

// const potatoSeed = createPotato()
// console.log(potatoSeed)

// import { createSoybean } from "./seeds/soybean.js"

// const soybeanSeed = createSoybean()
// console.log(soybeanSeed)

// import { createSunflower } from "./seeds/sunflower.js"

// const sunflowerSeed = createSunflower()
// console.log(sunflowerSeed)

// import { createWheat } from "./seeds/wheat.js"

// const wheatSeed = createWheat()
// console.log(wheatSeed)


// console.log(plantSeedsVariable)

// const seedObject = {};

// addPlant(seedObject)

// console.log(addPlant)