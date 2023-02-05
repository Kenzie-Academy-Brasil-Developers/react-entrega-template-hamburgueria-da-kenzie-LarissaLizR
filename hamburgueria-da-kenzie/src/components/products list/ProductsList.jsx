import Product from "../Product/Product";

import CardUl from "../styled components/UlProduct/index";

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
