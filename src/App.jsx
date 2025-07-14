import Guitar from "./component/Guitar";
import Header from "./component/Header";
import { useCart } from "./hook/useCart";

export default function App() {
  const { data, cart, addToCart, deleteItem, incrementItem, decrementItem, clearCart } = useCart();
  return (
    <>
      <Header
        cart={cart}
        clearCart={clearCart}
        deleteItem={deleteItem}
        decrementItem={decrementItem}
        incrementItem={incrementItem}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar key={guitar.id} guitar={guitar} addToCart={addToCart} />
          ))}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}
