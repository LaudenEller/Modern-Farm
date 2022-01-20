console.log("Welcome to the main module")

// import function from another seed
import { createPlan } from "./plan.js"

// store imported function to new variable
const yearlyPlan = createPlan()

// print function to developer console
console.log(yearlyPlan)

// temporary test code of module logic
import { createAsparagus } from "./seeds/asparagus.js"

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

import { createCorn } from "./seeds/corn.js"

const cornSeed = createCorn()
console.log(cornSeed)

import { createPotato } from "./seeds/potato.js"

const potatoSeed = createPotato()
console.log(potatoSeed)

import { createSoybean } from "./seeds/soybean.js"

const soybeanSeed = createSoybean()
console.log(soybeanSeed)

import { createSunflower } from "./seeds/sunflower.js"

const sunflowerSeed = createSunflower()
console.log(sunflowerSeed)

import { createWheat } from "./seeds/wheat.js"

const wheatSeed = createWheat()
console.log(wheatSeed)

import { plantSeeds } from "./tractor.js"

import { usePlants } from "./field.js"

const hereIsTheArray = usePlants()
const plantSeedsVariable = plantSeeds(yearlyPlan)
console.log(plantSeedsVariable)