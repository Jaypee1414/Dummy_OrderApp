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
        body: JSON.stringify({
            items,
            customer
        }),
        headers: {
            'content-type' : 'application/json'
        }
    })

    if(!response.ok){
        throw new Error("Posting new Meal Failed. Try again later")
    }

    return response
}