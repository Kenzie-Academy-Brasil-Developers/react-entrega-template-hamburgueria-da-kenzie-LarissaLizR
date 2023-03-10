
import './App.css';
import { useState, useEffect } from "react"
import Productslist from "./components/productsList/ProductsList";
import Logohamburgueria from "./components/logo/logo";
import Inputsearch from "./components/input/input";
import Cart from "./components/cart/cart";



import HeaderStyled from "./components/styledComponents/header/Index";
import BodySite from './components/styledComponents/body/BodySite';



function App() {

  
const [products, setProducts] = useState([]);
const [filteredProducts, setFilteredProducts] = useState([]);
const [currentSale, setCurrentSale] = useState([])




  useEffect(() =>{

    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
    .then((response) => response.json())
    .then((response) => { setProducts(response);
    })
  }, [])

    
    function handleClick(id) {
      console.log(id);
      const newProductList = currentSale.filter((item) => {
        return item.id !== id;
      });
      setCurrentSale(newProductList);
    }
  
    function filtro(str) {
      const filtragem = products.filter((item) => {
        return item.name.toLowerCase().includes(str.toLowerCase());
      });
      setFilteredProducts(filtragem);
    }
  
    function showProducts(id) {
      const found = products.find((item) => {
        return item.id === id;
      });
      for (let i = 0; i < currentSale.length; i++) {
        if (currentSale[i] === found) {
          return;
        }
      }
      setCurrentSale([...currentSale, found]);
    }
  


  
    return (
   
   
      <section className="App">
 
        <HeaderStyled>
          <Logohamburgueria />
          <Inputsearch  funcao={filtro} />
        </HeaderStyled>

        <BodySite >
          <div>
            <Productslist
              lista={filteredProducts.length > 0 ? filteredProducts : products}
              funcao={showProducts}
            />
          </div>
          <div>
            <Cart
              lista={currentSale}
              funcao={handleClick}
              setCurrentSale={setCurrentSale}
              currentSale={currentSale}
            />
          </div>
        </BodySite>
      </section>
     



  );
}

export default App;




