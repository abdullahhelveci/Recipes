import {TbClockHour8} from 'react-icons/tb'
import { Link } from 'react-router-dom'

const Card = ({recipe}) => {
  return (
    <Link to={`/tarif/${recipe.id}`} className="bg-white rounded-lg p-5">
        <div className='relative'>
            <img src={recipe.image} alt={recipe.recipeName} className="rounded-lg h-[150px] w-full object-cover" />
            <div className='bg-red-500 font-semibold text-white rounded-lg py-1 px-2 flex justify-start items-center absolute right-1 top-1'>
            <TbClockHour8 />
            <p>{recipe.recipeTime} dakika</p>
            </div>
        </div>
        <div>
            <h2 className='my-2 text-xl font-semibold'>{recipe.recipeName}</h2>
            <p className='text-gray-500'>{recipe.category}</p>
            <p className='flex gap-3 mt-3'>
                <span className='bg-gray-300 rounded-md p-1 line-clamp-1'>{recipe.ingredients[0]}</span>
                <span className='bg-gray-300 rounded-md p-1 line-clamp-1'>{recipe.ingredients[1]}</span>
            </p>
        </div>
    </Link>
  )
}

export default Card