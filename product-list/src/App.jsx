import { useReducer, useState } from 'react'
import data from './data.json'

const INITIAL_STATE = {
    cart : [],
    price : 0
  }

function App() {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)
  
  function cartReducer(state, action){
    switch (action.type) {
      case "ADD":
      console.log(state.cart)
      let newCart
      const foundProduct = data.find(product => product.name === action.payload)
      const inCart = state.cart.find(item => item.name === foundProduct.name)
      
        if(inCart){
          newCart = state.cart.map(item => item.name === foundProduct.name
            ? {...item, quantity: item.quantity + 1}
            : item
          )
        }else{
          newCart = [...state.cart, {...foundProduct, quantity: 1}]
        } 
        const newPrice = newCart.reduce((total, item) => total + item.quantity * item.price,0)
        console.log(newCart, newPrice)
        return {cart: newCart, price: newPrice}

      case "CLEAR":
        return INITIAL_STATE

      default:
        break;
    }
  }

  const totalPrice = () =>{
    return cart.reduce((sum, item) => sum + item.quantity * item.price,0)
  }

  const handleAddCart = (productName) =>{

    // const foundProduct = data.find(product => product.name === productName)
    // setCart( prev => {
    //   const inCart = prev.find(item => item.name === productName)
    //   if(inCart){
    //     return prev.map(item => item.name === productName
    //       ? {...item, quantity: item.quantity + 1}
    //       : item
    //     )
    //   }else{
    //     return [...prev,{...foundProduct, quantity: 1}]
    //   }
    // })

    dispatch({type : "ADD", payload: productName})
  }

  const clearCart = () =>{
    // setCart([])
    dispatch({type: "CLEAR"})
  }

  return (
    <main className='p-10'>
      <h2 className='text-4xl mb-7'>Desserts</h2>
      <div className='flex flex-col sm:flex-row gap-3 justify-between items-start'>
        <div className='products flex flex-col'>
          <div className='products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          {data.map(product => {
                return(
                  <div key={product.name} className='rounded-lg'>
                    <div className='relative'>
                      <img className='w-full rounded-lg mb-7' src={product.image.desktop} alt={product.name} />
                      <button onClick={()=>{handleAddCart(product.name)}} className='font-medium py-2 px-5 bg-[var(--rose50)] rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-[-50%] w-full sm:max-w-40 active:bg-[var(--red)] active:text-white'>Add to Cart</button>
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
        <div className={`sm:w-2xl cart p-5 bg-[var(--rose50)] ${state.cart.length !==0 ? 'border-2 border-[var(--red)]' : ''} rounded-lg flex flex-col gap-5 `}>
          <div className="flex justify-between items-center">
            <h3 className='text-[var(--red)] font-bold'>Your Cart</h3>
            { state.cart.length>0 &&
              <button onClick={()=>{clearCart()}} className='py-1 px-3 bg-[var(--red)] rounded-full text-[var(--rose50)] text-sm'>Clear</button>
            }
          </div>
          <div className="flex flex-col justify-center gap-3">
            {state.cart.length!==0
              ? (
                  <>
                    {state.cart.map(item => {
                      return <div key={item.name} className='flex justify-between'>
                        <p className='text-sm font-bold'>{item.name}</p>
                        <p>{item.quantity}x {item.price}€</p>
                      </div>
                    })}
                    <p className='text-sm'>Total price: <span className='font-bold'>{state.price.toFixed(2)}€</span></p>
                  </>
                )
              : (
                <div className="flex flex-col gap-3 items-center">
                  <h4>Your added items will appear here</h4>
                  <img src="/illustration-empty-cart.svg" alt="empty cart" />
                </div>
              )
              }
          </div>
          <div className='bg-[var(--rose100)] flex justify-center gap-2 p-4 rounded-lg' >
            <img src="/icon-carbon-neutral.svg" alt="" />
            <p className='text-sm'>this is a <span className='font-bold'>carbon-neutral</span> delivery</p>
          </div>
          { state.cart.length !== 0 &&
            <button className='py-3 px-5 bg-[var(--red)] rounded-full text-[var(--rose50)]'>Confirm Order</button>
          }
        </div>
        
      </div>
      <div className="attribution text-center">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
      Coded by <a href="https://github.com/FranckHeCai" target='_blank'>Franck Cai</a>.
      </div>
    </main>
    
  )
}

export default App
