import PurchasingSector from "../styledComponents/shoppingCart/Index";
import Adding from "../styledComponents/shoppingCart/AddCart";
import SectorPurchasing from "../styledComponents/shoppingCart/Sectoradd";
import SectionTotal from "../styledComponents/shoppingCart/CartTotal";


function Cart({ list, funcao, setCurrentSale, currentSale }) {
    if (list.length > 0) {
      return (
        <SectorPurchasing>
          <h2>Carrinho de compras</h2>
          <div>
            {list.map((item, index) => (
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