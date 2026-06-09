import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const nayoks = ["Razzak", "Salman Shah", "Sakib", "Shuvo"];
  const products = [
    { name: "Photoshop", price: "$90.99" },
    { name: "Illustrator", price: "$60.99" },
    { name: "PDF Reader", price: "$6.99" },
    { name: "Premier El", price: "$249.99" },
  ];

  const nayokNames = nayoks.map((nayok) => nayok);
  console.log(nayokNames);

  // const productNames = products.map((product) => product.name);
  // console.log(productNames);
  // var person = {
  // name: "Dr. Mahfuz",
  // job: "Singer",
  // };
  // var person2 = {
  // name: "Eva Rahman",
  // job: "Kokil kondi",
  // };
  // var style = {
  // color: "red",
  // backgroundColor: "yellow",
  // };
  nayoks.forEach((element) => {
    // console.log(element);
  });
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Counter></Counter>
        <Users></Users>
        {/* <ul> */}
        {/* {nayoks.map((nayok) => ( */}
        {/* // <li>{nayok}</li> */}
        {/* // ))} */}
        {/* {products.map((product) => ( */}
        {/* // <li>{product.name}</li> */}
        {/* // ))} */}
        {/* <li>{nayoks[0]}</li> */}
        {/* <li>{nayoks[1]}</li> */}
        {/* <li>{nayoks[2]}</li> */}
        {/* <li>{nayoks[3]}</li> */}
        {/* </ul> */}
        {products.map((pd) => (
          <Product product={pd}></Product>
        ))}
        {/* <Product product={products[0]}></Product> */}
        {/* <Product product={products[1]}></Product> */}
        {/* <Product product={products[2]}></Product> */}
        {/* {products.map((product, index) => ( */}
        {/* // <Product key={index} product={product} /> */}
        {/* // ))} */}
        {/* <Product name={products[0].name} price={products[0].price}></Product> */}
        {/* <Product name={products[1].name} price={products[1].price}></Product> */}
        {/* <Product name={products[2].name} price={products[2].price}></Product> */}
        {/* <Person name="Munna" profession="Football"></Person> */}
        {/* <Person name="Masum" profession="Dorshok"></Person> */}
        {/* <Person name={nayoks[0]} food="fuska" nayike="Moushumi"></Person> */}
        {/* <Person name="Jashim" food="vaat de" nayike="Shabana"></Person> */}
        {/* <Person name="BappaRaz" food="Cheka" nayike="Hena"></Person> */}
        {/* <Person name="Elias K" food="Faki" nayike="Bobita"></Person> */}

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p> */}
        {/* Edit done now <code>src/App.js</code> and save to reload. */}
        {/* </p> */}
        {/* <p>My first react Paragraph</p> */}
        {/* <h1 className="" style={style}> */}
        {/* my heading: {person.name} {person.job} */}
        {/* </h1> */}
        {/* <h1 style={{ backgroundColor: "cyan", color: "yellow" }}> */}
        {/* {" "} */}
        {/* my heading2: {person2.name} {person2.job} */}
        {/* </h1> */}

        {/* <a */}
        {/* // className="App-link" */}
        {/* // href="https://reactjs.org" */}
        {/* // target="_blank" */}
        {/* // rel="noopener noreferrer" */}
        {/* // > */}
        {/* Learn React */}
        {/* </a> */}
      </header>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(10);
  // const handleIncrease = () => setCount(count + 1);

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onMouseMove={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        // console.log(data);
      });

    // console.log("Calling Effect");
  }, []);
  return (
    <div>
      <h3>Dynamic Users : {users.length}</h3>
      <ul>
        {users.map((user) => (
          // <li>{user.name}</li>
          <li>{user.phone}</li>
        ))}
      </ul>
      {console.log(users)}
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: "200px",
    width: "200px",
    float: "left",
  };
  // console.log(props);
  // console.log(props.name);
  // console.log(props.product);
  // console.log(props.product.name);
  const { name, price } = props.product;
  console.log(name, price);
  return (
    <div style={productStyle}>
      <h2> {name}</h2>
      <h3> {price}</h3>
      <button>Buy Now</button>
    </div>
  );
}
function Person(props) {
  // console.log(props);
  return (
    <div style={{ border: "2px solid gold", width: "400px", margin: "10px" }}>
      <h3>My Name: {props.name}</h3>
      <h3>My Profession: {props.profession}</h3>
    </div>
  );
}
// function Person(props) {
// const personStyle = {
// border: "2px solid red",
// margin: "10px",
// padding: "10px",
// };
// console.log(props);
// return (
// <div style={personStyle}>
{
  /* <h1>Nayok: {props.name}</h1> */
}
{
  /* <h1>Nayika: {props.nayike}</h1> */
}
{
  /* <h1>Food: {props.food}</h1> */
}
// <h1>Name: Dick</h1>
// <h3>Hero</h3>
{
  /* </div> */
}
// );
// }
export default App;
