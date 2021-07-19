import { Image } from "./Image";

export interface Album {
    id: string;
    name: string;
    images: Image[]
}