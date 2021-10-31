import axios from 'axios'
const baseUrl = 'https://shelf-life-api.herokuapp.com/'
const proxy = 'https://server-al.herokuapp.com/' // CORS Bypass

/**
 * 
 * @param {String} itemName Name of item to search
 * @returns Array of objects with following fields: {"id":16447,"name":"Banana Liqueur, Commercially Bottled - Unopened or Opened","url":"https://www.stilltasty.com/fooditems/index/16447"}
 */
const getGroceryItems = async (itemName) => {
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

    return response.data
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