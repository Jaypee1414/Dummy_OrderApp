export async function FetchFoodDisplay(){
    const data = await fetch('http://localhost:3000/meals') 
    const respose = await data.json()
    if(!data.ok){
     throw new Error("Fetching data failed")
    }
    return respose
}

export async function postCartMeal(items, customer){
    const response = await fetch('http://localhost:3000/orders',{
        method: 'POST',
        body: JSON.stringify({ order :{
            items,
            customer
        }}),
        headers: {
            'content-type' : 'application/json'
        }
    })
    const resdata = await response.json()

    if(!response.ok){
        throw new Error(resdata.message || "There is something wrong is something wrong. Please try again later")
    }

    return resdata.message
}