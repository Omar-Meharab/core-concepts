import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Razzak', 'Jasim', 'Alamgir', 'Salman', 'Shuvo', 'Bappi']
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'},
    {name: 'Premiere EL', price: '$399.99'}
  ]
  const friends = [
    {name:'Sajjad', status: 'Single'},
    {name:'Tanmoy', status: 'Single'},
    {name:'Abrar', status: 'Single'},
    {name:'Shil', status: 'Single'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
          {
            friends.map(friends => <li>{friends.name}</li>)
          }
        </ul>
        {
          products.map(product => <Product product = {product}></Product>)
        }
        {
            friends.map(friends => <Friend friends = {friends}></Friend> )
        }
      </header>
    </div>
  );
}

function Friend(props){
  const friendStyle = {
    border: '1px solid grey',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height:'200px',
    width: '200px',
    float: 'left'
  }
  const {name, status} = props.friends;
  console.log(props.friends)
  return(
    <div style={friendStyle}>
      <h3>{name}</h3>
      <h5>{status}</h5>
      <button>Brothers</button>
    </div>
  );
}

function Users(){
  const[users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
      <div>
        <h3>Dynamic User: {users.length}</h3>
        <ul>
          {
            users.map(users => <li>{users.name}</li>)
          }
        </ul>
      </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick = { () => setCount(count +1)}>Increase</button>    
      <button onClick = { () => setCount(count - 1)}>Decrease</button>    
    </div>
  );
}

function Product(props){
  const productStyle = {
    border: '1px solid grey',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height:'200px',
    width: '200px',
    float: 'left'
  }
  const {name, price} = props.product;
  console.log(props.product)
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Person (props){
  const personStyle = {
    border: '2px solid red',
    margin: '10px',
    padding: '10px',
    width: '300px',
    borderRadius: '5px',
    boxShadow: '5px 5px 10px white'
  }
  return (
  <div style ={personStyle}>
    <h1>Name: {props.name}</h1>
    <h3>Hero of {props.nayika}</h3>
  </div>)
}

export default App;
