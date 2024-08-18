import React, { useContext } from 'react'
import Button from '../UI/Button'
import {currencyFormat} from '../UI/NumberFormatting'
import Context from '../Context/Context'
function FoodCard({meal}){

  const cartContext = useContext(Context)

  function handleBuyButton(){
    cartContext.addItem(meal)
  }
  return (
    <li className='meal-item' key={meal.id}>
        <article>
            <img src={`http://localhost:3000/${meal.image}`} alt="Meal Image" />
            <h3>{meal.name}</h3>
            <div>
                <p className='meal-item-price'> {currencyFormat.format(meal.price)} </p>
                <p className='meal-item-description'>{meal.description}</p>
            </div>
            <p className='meal-item-actions'>
                <Button onClick={handleBuyButton}>buy Meal</Button>
            </p>
        </article>
    </li>
  )
}

export default FoodCard
