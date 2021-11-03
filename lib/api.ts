import axios, { AxiosResponse } from 'axios'

export const getStrapiUrl = (path:string = ''):string => {
    return `${process.env.STRAPI_URL || 'http://localhost:1337'}${path}`
}

export const fetchApi = async (path : string) => {
    try{
        const requestUrl = getStrapiUrl(path)
        const response = await fetch(requestUrl)
        const data = await response.json()
        console.log(data)
        return data
    }catch(err){
        console.error(err)
    }
}