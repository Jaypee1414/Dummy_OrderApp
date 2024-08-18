export default async function FetchFoodDisplay(){
    const data = await fetch('http://localhost:3000/meals') 
    const respose = await data.json()
    if(!data.ok){
     throw new Error("Fetching data failed")
    }
    return respose
}