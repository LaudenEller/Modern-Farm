// // import harvested food array
// import { harvestPlants } from "./harvester";

// // store imported function to a new variable
// const harvestedFoodObjectArray = harvestPlants()

// export function that accepts harvested food array
export const Catalog = (harvestedFoodObjectArray) => {
    // Start building a string filled with HTML syntax
    let harvestedFoodObjectHTMLString = '<article class="harvestedFoodObject">'
    // iterate the array of food objects
    for (const foodObject of harvestedFoodObjectArray) {
        // append HTML rep of food item from array to inner HTML of <main>
        harvestedFoodObjectHTMLString += `<section class="plant">${foodObject.type}</section>
            `
    }
    harvestedFoodObjectHTMLString += `</article>`

// populate index.HTML with HTML string
const locationParentHTMLElement = document.querySelector(".container")

locationParentHTMLElement.innerHTML = harvestedFoodObjectHTMLString

    return harvestedFoodObjectHTMLString
}