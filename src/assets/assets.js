import kid_1 from './kid_1.jpg'
import kid_2 from './kid_2.jpg'
import kid_3 from './kid_3.jpg'
import kid_4 from './kid_4.jpg'
import men_1_1 from './men_1_1.jpg'
import men_1_2 from './men_1_2.jpg'
import men_1_3 from './men_1_3.jpg'
import men_1_4 from './men_1_4.jpg'
import men_1_5 from './men_1_5.jpg'

import logo from './logo.png'

export const assets = {
    logo
    /* icon1,
    icon2,
    icon3,
    icon4 */
}

export const products = [
    {
        _id: "aaaaa",
        name: "Kids Green Shirt",
        description: " A lightweight shirt nice for summer!",
        price: 100,
        image: [kid_1],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaab",
        name: "Men Grey Shirt",
        description: " A hoodie-like shirt with a hood and a pocket.",
        price: 200,
        image: [men_1_1,men_1_2,men_1_3,men_1_4,men_1_5],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaac",
        name: "Kids Yellow Shirt",
        description: " A lightweight shirt suitable for summer!",
        price: 120,
        image: [kid_2],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: false
    }
]