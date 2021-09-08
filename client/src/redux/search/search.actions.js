import axios from 'axios'




export const fetchProductsStart = () => ({
    type: "FETCH_PRODUCTS_START"
})

export const fetchProductsStartAsync = () => {
    return (dispatch) => {

        dispatch(fetchProductsStart())
        const collectionRef = 
    }
}