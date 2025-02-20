import { useState } from 'react'
import data from './data.json'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='p-10 flex flex-col sm:flex-row gap-3 justify-between items-start'>
        <div className='products flex flex-col'>
          <h2 className='text-4xl mb-7'>Desserts</h2>
          <div className='products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          {data.map(product => {
                return(
                  <div className='rounded-lg'>
                    <div className='relative'>
                      <img className='w-full rounded-lg mb-7' src={product.image.desktop} alt={product.name} />
                      <button className='font-medium py-2 px-5 bg-[var(--rose50)] rounded-full absolute top-43 left-9.5'>Add to Cart</button>
                    </div>
                    <p className='text-black/50'>{product.name}</p>
                    <p className='font-bold'>{product.category}</p>
                    <p className='font-bold text-[var(--red)]' >{product.price}€</p>
                  </div>
                )
              })
              }
          </div>
        </div>
        <div className='sm:w-2xl cart p-5 bg-[var(--rose50)] rounded-lg flex flex-col gap-5'>
          <h3 className='text-[var(--red)] font-bold'>Your Cart</h3>
          <h4>Your added items will appear here</h4>
          <div className='bg-[var(--rose100)] flex justify-center gap-2 p-4 rounded-lg' >
            <img src="/icon-carbon-neutral.svg" alt="" />
            <p className='text-sm'>this is a <span className='font-bold'>carbon-neutral</span> delivery</p>
          </div>
          <button className='py-3 px-5 bg-[var(--red)] rounded-full text-[var(--rose50)]'>Confirm Order</button>
        </div>
        
      </main>
      <div className="attribution text-center">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
      Coded by <a href="https://github.com/FranckHeCai" target='_blank'>Franck Cai</a>.
      </div>
    </>
    
  )
}

export default App
