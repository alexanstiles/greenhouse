import axios from 'axios'
const baseUrl = 'https://bing-image-search1.p.rapidapi.com/images/'
const token = '185242e051msh5295af43960ebd6p1869a9jsn7eb793faef1b'

const getImage = async (itemName) => {
    const options = {
        method: 'GET',
        url: baseUrl + 'search',
        params: { q: itemName },
        headers: {
            'x-rapidapi-host': 'bing-image-search1.p.rapidapi.com',
            'x-rapidapi-key': token
        }
    }
    const response = await axios.request(options)
    const imageUrl = response.data.value[0].thumbnailUrl
    console.log("🚀 ~ file: imageSearch.js ~ line 21 ~ getImage ~ imageUrl", imageUrl)
    return imageUrl
}

export default { getImage }