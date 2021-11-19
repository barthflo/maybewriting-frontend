interface IBase {
    id : number,
    created_at : string,
    updated_at : string,
    published_at ?: string
}
interface IFormat {
    name : string,
    hash : string,
    ext: string,
    mime: string,
    width: number,
    height: number,
    size: number,
    path : string | null,
    url: string
}

export interface IMedia extends IBase {
    name : string,
    alternativeText : string,
    caption: string,
    width: number,
    height: number,
    formats : {
        thumbnail : IFormat
    } | null,
    hash : string,
    ext:string,
    mime: string,
    size : number,
    url: string,
    previewUrl : string | null,
    provider:string,
    provider_metadata : any,
}