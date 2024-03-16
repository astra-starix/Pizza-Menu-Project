/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import './index.css'
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "photos/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "photos/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "photos/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "photos/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "photos/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "photos/prosciutto.jpg",
    soldOut: false,
  },
];
function App(){
  return(
    <div className='container'>
    <Header/>
    <Menu/>
    <Footer/>
    </div>
  )
}
function Header() {

  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
}
function Menu(){
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return(
    <main className='menu'>
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>Authentic Italian Cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
          <ul className='pizzas'>
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key ={pizza.name}/>
            ))}
          </ul>
      </>
      ) : (
        <p>We're cuurently working on our menu, please come back later.</p>
      )}
      {/* <Pizza
        name = "Pizza Margherita"
        photoName = "public\photos\margherita.jpg"
        ingredients = "Tomato and mozarella"
        price = {10}
      />
      <Pizza
        name = "Pizza Funghi"
        photoName = "/photos/funghi.jpg"
        ingredients = "Tomato and mozarella"
        price = {10}
      /> */}
    </main>
  )
}
function Pizza({pizzaObj}){
  console.log(pizzaObj);
  return(
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>₹{pizzaObj.price*10 - 1}</span>
        )}
        {/* <span> {pizzaObj.soldOut ? 'Sold Out' : pizzaObj.price*10 - 1}</span> */}
      </div>
    </li>
  )
}
function Footer(){
  // eslint-disable-next-line react/no-unescaped-entities
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour


  // we can use aonther return keyword with some condition...is condition satisfies then this return keyword will executed else the other return keyword will executed..we can use javascript because we are outside of jsx..

  // if(!isOpen) return(
  //   <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00 </p>
  // )

  return (
    <footer className='footer'>
      {isOpen ? <Order openHour={openHour} closeHour={closeHour} /> : (
        <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00 </p>
      )}
    </footer>
  )
}

function Order({openHour, closeHour}){
 return (
  <div className='order'>
    <p>We're open from {openHour}:00 until {closeHour}:00. Come visit us or Order online.</p>
    <button className='btn'>Order</button>
  </div>
 )
}

export default App
