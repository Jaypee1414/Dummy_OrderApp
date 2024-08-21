import React, { useEffect, useState } from 'react'
import {FetchFoodDisplay} from '../https/Http'
import FoodCard from './FoodCard'
import useFetch from '../hooks/useFetch'
import Modal from '../UI/Modal'

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


    let action = <Modal></Modal>
    if(isloading){
        return <h2>Loading meals Please wait ...</h2>
    }

  return (
    <ul id='meals'>
    {data.map((data)=>{
            return(
                <FoodCard meal={data} key={data.id}/>
            )
        })}     
    </ul>
  )
}

export default Food
