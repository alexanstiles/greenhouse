import axios from 'axios'
import imageService from './imageSearch'
const baseUrl = 'https://shelf-life-api.herokuapp.com/'
const proxy = 'https://server-al.herokuapp.com/' // CORS Bypass

/**
 * 
 * @param {String} itemName Name of item to search
 * @returns Array of objects with following fields: {"id":16447,"name":"Banana Liqueur, Commercially Bottled - Unopened or Opened","url":"https://www.stilltasty.com/fooditems/index/16447"}
 */
const getGroceryItems = async (itemName) => {
    if (itemName.length < 3) {
        throw new Error("itemName must be at least 3 chars long")
    }
    const options = {
        method: "GET",
        url: proxy + baseUrl + 'search/',
        params: {
            q: itemName
        },
        headers: {
            "X-Requested-With": "XMLHttpRequest"
        }
    }
    const response = await axios.request(options)
    console.log("🚀 ~ file: grocerySearch.js ~ line 25 ~ getGroceryItems ~ response", response)

    let groceryItems = response.data
    groceryItems = groceryItems.slice(0, 2)
    for (const item of groceryItems) {
        item.image = await imageService.getImage(item.name)
        item.shelfLife = await getShelfLife(item.id)
        if (!item.shelfLife) {
            // If no shelf life was found, set to a default of 3 days
            item.shelfLife = 3
        }
        await new Promise(resolve => setTimeout(resolve, 100))
    }

    return groceryItems
}

/**
 * 
 * @param {String} itemId ID of grocery item from getGroceryItems()
 * @returns Shelf life of item in days
 */
const getShelfLife = async (itemId) => {
    console.log("🚀 ~ file: grocerySearch.js ~ line 32 ~ getShelfLife ~ itemId", itemId)
    const options = {
        method: "GET",
        url: proxy + baseUrl + 'guides/' + itemId + "/", 
        headers: {
            "X-Requested-With": "XMLHttpRequest"
        }
    }
    let shelfLife
    try {
        const response = await axios.request(options)
        shelfLife = Math.ceil((response.data[0].expirationTime)/86400)
    } catch (e) {
        // The API was unable to find the shelf life
        shelfLife = null
    }
    console.log("🚀 ~ file: grocerySearch.js ~ line 23 ~ getShelfLife ~ shelfLife", shelfLife)
    return shelfLife
}

export default { getGroceryItems, getShelfLife }