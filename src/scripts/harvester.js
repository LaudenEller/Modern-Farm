// export harvester that accepts plant array as input
export const harvestPlants = (plantArray) => {
    const arrayOfSeedObjects = []

    // interate array of growins plants
    for (const plant of plantArray) {
        // get value of output property
        if (plant.type === "Corn") {
            // if corn, add half of corresponding amount of plant objects to returned array
            for (let i = 0; i < plant.output / 2; i++) {
                arrayOfSeedObjects.push(plant)
            }
        }
        // if not corn, add corresponding amount of plant objects to returned array
        else {
            for (let i = 0; i < plant.output; i++) {
                arrayOfSeedObjects.push(plant)
            }
        }
    }
    // return array of seed objects
    return arrayOfSeedObjects
}