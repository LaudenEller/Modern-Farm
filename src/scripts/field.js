// create variable with empty array of plants
const plantArray = []

// export a function that will add seed to field
export const addPlant = (seedObject) => {
    seedObject.push(plantArray)
}

// export a function that returns a copy of the array of plants
export const usePlants = () => {
    return plantArray
}

// investigate array.isArray method for corn array
