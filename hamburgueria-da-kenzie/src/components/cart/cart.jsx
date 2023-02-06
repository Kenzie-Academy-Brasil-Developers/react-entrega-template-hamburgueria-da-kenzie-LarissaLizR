import PurchasingSector from "../styledComponents/ShoppingCart/Index";
import Adding from "../styledComponents/ShoppingCart/AddCart";
import SectorPurchasing from "../styledComponents/ShoppingCart/Sectoradd";
import SectionTotal from "../styledComponents/ShoppingCart/CartTotal";


function Cart({ lista, funcao, setCurrentSale, currentSale }) {
    if (lista.length > 0) {
      return (
        <SectorPurchasing>
          <h2>Carrinho de compras</h2>
          <div>
            {lista.map((item, index) => (
              <Cartproduct key={index} array={item} func={funcao} />
            ))}
          </div>
          <CartTotal currentSale={currentSale} setCurrentSale={setCurrentSale} />
        </SectorPurchasing>
      );
    } else {
      return (
        <PurchasingSector>
          <h2>Carrinho de compras</h2>
          <div>
            <h3>Sua sacola está vazia</h3>
            <p>Adicione Itens</p>
          </div>
        </PurchasingSector>
      );
    }
  }
  

  function CartTotal({ setCurrentSale, currentSale }) {
    return (
      <SectionTotal>
        <div>
          <h3>Total</h3>
          <span>
            R${""}
            {currentSale
              .reduce((acu, valor) => (acu + valor.price), 0)
              

              .toFixed(2)}
          </span>
        </div>
        <button
          onClick={() => {
            setCurrentSale([]);
          }}
        >
          Remover Todos
        </button>
      </SectionTotal>
    );
  }

  function Cartproduct({ array, func }) {
    return (
      <Adding>
        <img  src={array.img} alt="imagem carrinho" />
        <div>
          <h3>{array.name}</h3>
          <h4>{array.category}</h4>
        </div>
        <div>
          <button
           
            onClick={() => {
              func(array.id);
            }}
          >
            Remover
          </button>
        </div>
      </Adding>
    );
  }

  export default Cart;