export type Guitar = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

export type CartItem = Guitar&{
    quantity: number;
}