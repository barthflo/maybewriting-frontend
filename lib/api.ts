import axios from 'axios'

export const getStrapiUrl = (path:string = '') => {
    return `https://maybewriting-backend.herokuapp.com` + path
}

export const fetchApi = async (path : string) => {
    try{
        const requestUrl = getStrapiUrl(path)
        // const response = await fetch(requestUrl)
        const {data} = await axios.get<any>(requestUrl)
        // const data = await response.json()
        return data
    }catch(err){
        console.error(err)
    }
}