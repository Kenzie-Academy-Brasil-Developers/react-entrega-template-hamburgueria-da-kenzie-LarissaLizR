import Product from "../product/product";

import CardUl from "../styledComponents/UlProduct/Index";

function Productslist({ lista, funcao }) {
  return (
    <CardUl>
      {lista.map((item, index) => (
        <Product key={index} array={item} func={funcao} />
      ))}
    </CardUl>
  );
}
export default Productslist;
