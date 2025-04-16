import './App.css';
import Product from './ProductCard';

function App() {
  const products = [
    {
      productName: "Maşa ile Koca Ayı Peluş",
      price: "799",
      alt: "Oyuncak peluş ayıcık"
    },
    {
      productName: "Şirinler Peluş",
      price: "849",
      alt: "Şirinbaba"
    },
    {
      productName: "Tom ve Jerry Peluş",
      price: "999",
      alt: "Tom Peluş"
    }
  ];

  return (
    <div className="App">
      <h1>Ürün Kartları Listesi</h1>
      <div className="products-container">
  {products.map((item, index) => (
    <Product
      key={index}
      productName={item.productName}
      price={item.price}
      alt={item.alt}
    />
  ))}
</div>

     
      
    </div>
  );
}

export default App;
