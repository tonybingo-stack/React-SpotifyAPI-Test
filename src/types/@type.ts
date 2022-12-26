export interface Type_Album {
    album_type: string,
    // artists: Type_Artist,
    // available_markets: string,
    // external_urls: string[],
    href: string,
    id: string,
    images: string[],
    name: string,
}
export interface Type_Albums {
    href: string,
    items: Type_Album[],
    limit: string,
    next: string,
    offset: string,
    previous: string,
    total: string,
}
export interface Type_fetch_Data {
    albums: Type_Albums
}