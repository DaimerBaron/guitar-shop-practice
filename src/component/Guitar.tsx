import type { Guitar } from '../types/guitar';

type GuitarProps = {
    guitar: Guitar;
    addToCart: (guitar: Guitar) => void;
}
export default function Guitar({ guitar, addToCart }: GuitarProps) {
    const { id, name, description, price, image } = guitar;
    return(
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img className="img-fluid" src={`./public/img/${image}.jpg`} alt={`imagen guitarra ${id}`} />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                <p>{description}</p>
                <p className="fw-black text-primary fs-3">${price}</p>
                <button
                    type="button"
                    className="btn btn-dark w-100"
                    onClick={() => addToCart(guitar)}
                >Agregar al Carrito</button>
            </div>
        </div>
    )
}