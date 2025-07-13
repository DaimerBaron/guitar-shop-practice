import Guitar from "./component/Guitar"
import Header from "./component/Header"
import { useState } from "react"
import {db} from "./data/db"
export default function App() {
  const [guitars] = useState(db)
  const [cart, setCart] = useState([])
  const max_items = 5
  const total = cart.reduce ( (total, item) => total + (item.price * (item.quantity || 1)), 0)
  const addToCart = (guitar) => {
    const itemExists = cart.findIndex( item => item.id === guitar.id)
    
    if(itemExists !== -1 ) {
      const updatedCart = cart.map( item =>{
        if(item.id === guitar.id && item.quantity < max_items){
          return {...item, quantity: item.quantity + 1}
        }
        return item
      })
      setCart(updatedCart)
    }else{
      guitar.quantity = 1
      setCart([...cart, guitar])
    }
  }

  const deleteItem = (id) => {
    const updatedCart = cart.filter((item)=> item.id!== id)
    setCart(updatedCart);
  }

  const emptyCart = () => {
    setCart([]);
  }

  const incrementItem = (id) => {
    const updatedCart = cart.map( prevCart => {
      if(prevCart.id === id && prevCart.quantity < max_items) {
        return {...prevCart, quantity: prevCart.quantity + 1}
      }
      return prevCart
    })
    setCart(updatedCart)
  }
  
  const decrementItem = (id) => {
    const updatedCart = cart.map( prevCart => {
      if(prevCart.id === id && prevCart.quantity > 1) {
        return {...prevCart, quantity: prevCart.quantity - 1}
      }
      return prevCart
    })
    setCart(updatedCart)
  }

  return (
    <>

      <Header cart={cart} total={total} emptyCart={emptyCart} deleteItem={deleteItem} decrementItem={decrementItem} incrementItem={incrementItem} />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {guitars.map((guitar) => (
            <Guitar key={guitar.id} guitar={guitar} addToCart={addToCart}  />
          ))}
        </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )


}
