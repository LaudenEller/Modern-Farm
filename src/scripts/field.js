// create variable with empty array of plants
const plantArray = []

// export a function that will add seed to field
export const addPlant = (seedObject) => {
    plantArray.push(seedObject)
}

// export a function that returns a copy of the array of plants
export const usePlants = () => {
    const plantArrayCopy = plantArray.map(plant => ({...plant}))
    
    // // investigate array.isArray method for corn array
    // Array.isArray(plantArrayCopy)
    
    return plantArrayCopy
}