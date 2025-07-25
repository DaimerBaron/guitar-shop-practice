import type { Guitar, CartItem } from '../types/guitar';

type HeaderProps = {
  cart: CartItem[];
  clearCart: () => void;
  deleteItem: (id: Guitar['id']) => void;
  incrementItem: (id: Guitar['id']) => void;
  decrementItem: (id: Guitar['id']) => void;
};
export default function Header({
  cart,
  clearCart,
  deleteItem,
  incrementItem,
  decrementItem,
}: HeaderProps) {
  const isCartEmtpy = cart.length === 0;
  const total = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="index.html">
              <img
                className="img-fluid"
                src="./public/img/logo.svg"
                alt="imagen logo"
              />
            </a>
          </div>
          <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
            <div className="carrito">
              <img
                className="img-fluid"
                src="./public/img/carrito.png"
                alt="imagen carrito"
              />

              <div id="carrito" className="bg-white p-3">
                {isCartEmtpy && (
                  <p className="text-center">No hay productos en el carrito</p>
                )}
                <table className="w-100 table">
                  <thead>
                    <tr>
                      <th>Imagen</th>
                      <th>Nombre</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <img
                            className="img-fluid"
                            src={`./public/img/${item.image}.jpg`}
                            alt={`imagen guitarra ${item.id}`}
                          />
                        </td>
                        <td>{item.name}</td>
                        <td className="fw-bold">${item.price}</td>
                        <td className="flex align-items-start gap-4">
                          <button
                            type="button"
                            className="btn btn-dark"
                            onClick={() => decrementItem(item.id)}
                          >
                            -
                          </button>
                          <span className="fs-2">{item.quantity || 1}</span>
                          <button
                            type="button"
                            className="btn btn-dark"
                            onClick={() => incrementItem(item.id)}
                          >
                            +
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            type="button"
                            onClick={() => deleteItem(item.id)}
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-end">
                  Total pagar: <span className="fw-bold">${total}</span>
                </p>

                <button
                  onClick={clearCart}
                  className="btn btn-dark w-100 mt-3 p-2"
                >
                  Vaciar Carrito
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
