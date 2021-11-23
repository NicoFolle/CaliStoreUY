import { stock } from "../data/stock"

export const getItem = (id) => {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve(stock)
        }, 2000)
    })
}
