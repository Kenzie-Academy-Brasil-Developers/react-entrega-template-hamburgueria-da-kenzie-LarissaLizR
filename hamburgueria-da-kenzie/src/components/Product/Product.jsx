import  GreenButton  from "../styledComponents/button/Index";
import { DivImg } from "../styledComponents/card/Index";
import { CardProduct } from "../styledComponents/card/Index";

function Product({ array, func }) {
  return (
    <CardProduct>
      <div>
        <DivImg>
          <img className={array.name} src={array.img} alt={array.name} />
        </DivImg>
        <h2>{array.name}</h2>
        <p>{array.category}</p>
        <h3>R$ {array.price.toFixed(2)}</h3>
        <GreenButton
         
          id={array.id}
          onClick={() => {
            func(array.id);
          }}
        >
          Adicionar
        </GreenButton>
      </div>
    </CardProduct>
  );
}

export default Product;