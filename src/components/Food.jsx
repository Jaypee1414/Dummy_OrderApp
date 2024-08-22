import React, { useEffect, useState } from 'react'
import {FetchFoodDisplay} from '../https/Http'
import FoodCard from './FoodCard'
import useFetch from '../hooks/useFetch'
import Error from '../UI/Error'
// const [fetchApi, setFetchApi]= useState([])
// const [loading, setLoading]= useState(false)
// const [error, setError]= useState('')

// useEffect(()=>{
//     async function displayMeal(){
//         try {
//            setLoading(true)
//            const response = await FetchFoodDisplay()
//            setFetchApi(response)
           
//         } catch (error) {
//             setError({message: "Failed in fetching meals data ... "  || error.message})
//             setLoading(false)
//         }
//     }
//     displayMeal()
// },[])
const config ={}
function Food() {
    const {error, isloading, data} =useFetch('http://localhost:3000/meals',config,[])
    let actions;
    if(error && !data.length){
    actions =  <Error title={"Found a error"} message={"There is a error fetching meals please try again later"}/>
    }
    if(isloading){
        return <h2>Loading meals Please wait ...</h2>
    }

  return (
    <ul id='meals'>
        {actions}
        {!actions && data.map((data)=>{
        return(
           <FoodCard meal={data} key={data.id}/>
        )})}
    </ul>
  )
}

export default Food
