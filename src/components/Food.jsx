import React, { useEffect, useState } from 'react'
import {FetchFoodDisplay} from '../https/Http'
import FoodCard from './FoodCard'

function Food() {
    const [fetchApi, setFetchApi]= useState([])
    const [loading, setLoading]= useState(false)
    const [error, setError]= useState('')

    useEffect(()=>{
        async function displayMeal(){
            try {
               setLoading(true)
               const response = await FetchFoodDisplay()
               setFetchApi(response)
               
            } catch (error) {
                setError({message: "Failed in fetching meals data ... "  || error.message})
                setLoading(false)
            }
        }
        displayMeal()
    },[])
    

  return (
    <ul id='meals'>
        {!loading && <h3>{error.message}</h3>}
        {loading && (
            fetchApi.map((data)=>{
            return(
                <FoodCard meal={data} key={data.id}/>
            )
        })   
        )
        }     
    </ul>
  )
}

export default Food
