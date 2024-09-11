export interface CardImages {
    id: string,
    image_url: string,
    image_url_small: string
}

export interface CardPrices {
    cardmarket_price: string
}

export interface Product {
    id: string,
    name: string,
    type: string,
    frameType: string
    desc: string,
    race: string,
    archetype: string,
    card_images: CardImages[],
    card_prices: CardPrices[]
}