import Header from './Header';
import React from 'react';
import ObjectExample from './ObjectExample';
import UseEffectExample from './UseEffectExample';
import Project from './Project';
import Accordion from './Accordion';
import Modelbox from './Modelbox';
import Spread from './Spread';
import Task from './Task';
import Shop from './Shop';
import Sma from './Sma';
import Errorhandling from './Errorhandling';
import Product from './Product';
import Home from './Home';
import { Route,Link,Routes } from 'react-router-dom';
import adidas from './shoe.jpg'
import puma from  './puma.avif'
import nike from './nike.avif'
import s1 from './sock1.webp'
import s2 from './sock2.webp'
import s3 from './sock3.webp'
import Home_task from './Task/Home_task';
import Login_task from './Task/Login_task';
import Contact_task from './Task/Contact_task';
import Accordion_task from './Task/Accordion_task';
import Skills_task from './Task/Skills_task'
import Projects_task from './Task/Projects_task';
import About_task from './Task/About_task';
import Counter from './Counter';
import Login2 from './Login2';
import Getdata from './Getdata';
import Theme from './Theme';
import Assesment from './Assesment';
function App() {
  const productObj = [{
    name: "Adidas",
    price: "3000",
    strikePrice: "5000",
    image:adidas

    
  },
  {
    name: "Puma",
    price: "2500",
    strikePrice: "3500",
    image:puma

  },
  {
    name: "Nike",
    price: "4000",
    strikePrice: "6000",
    image:nike

  }]
  const productSOCK = [{
    name: "Cotton SOCKS",
    price: "150",
    strikePrice: "200",
    image:s1

  },
  {
    name: "LINEN",
    price: "200",
    strikePrice: "250",
    image:s2

  },
  {
    name: "VELVET",
    price: "250",
    strikePrice: "280",
    image:s3

  }]
  return (
    <>
     {/* <Header/><br/> */}
     {/* <ObjectExample/> */}
     {/* { <UseEffectExample/>}  */}
     {/* <Project/> */}
     {/* <Accordion/> */}
     {/* <Modelbox/> */}
     {/* <Spread/> */}
     {/* <Task/>  */}
     {/* <Shop/> */}
     {/* <Sma/> */}
     {/* <Errorhandling data={obj}/> */}
     {/* <Product/> */}
     {/* <Login2/> */}
     {/* <center>
      <Link to='/'>Home</Link><br/>
      <Link to='/shoes'>shoes</Link><br/>
      <Link to='/socks'>Socks</Link>
      </center>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shoes' element={<Product productObj={productObj}/>}/>
        <Route path='/socks' element={<Product productObj={productSOCK}/>}/>
      </Routes> */}
      {/* <header>
         <center>
      <Link to='/'>Home</Link>&nbsp;&nbsp;
      <Link to='/login'>Login</Link>&nbsp;&nbsp;
      <Link to='/contact'>Contact</Link>&nbsp;&nbsp;
      <Link to='/accordion'>Accordion</Link>&nbsp;&nbsp;
      <Link to='/skills'>Skills</Link>&nbsp;&nbsp;
      <Link to='/projects'>Projects</Link>&nbsp;&nbsp;
      <Link to='/about'>About</Link>&nbsp;&nbsp;
      </center>
      </header>
      <Routes>
        <Route path='/' element={<Home_task/>}/>
        <Route path='/login' element={<Login_task/>}/>
        <Route path='/contact' element={<Contact_task/>}/>
        <Route path='/accordion' element={<Accordion_task/>}/>
        <Route path='/skills' element={<Skills_task/>}/>
        <Route path='/projects' element={<Projects_task/>}/>
        <Route path='/about' element={<About_task/>}/>
      </Routes>
      */}
      {/* <Counter/> */}
      {/* <Getdata/> */}
      {/* <Theme/> */}
      <Assesment/>
     </>
    
  )
}

export default App;
