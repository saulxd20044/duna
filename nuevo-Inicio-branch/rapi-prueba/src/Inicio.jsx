import React, { useState } from 'react';
import './styles/Inicio.css';
import './styles/FormularioEvaluacion.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Categories from './components/Categories.jsx';
import Offers from './components/Offers.jsx';
import Service from './components/Service.jsx';
import Cta from './components/Cta.jsx';
import Brand from './components/Brand.jsx';
import Footer from './components/Footer.jsx';


function Inicio() {
  
    return (
      <>
        <Header />
        <main>
          <article>
            <Hero />
            <Categories />
            <Offers/>
            <Service/>
            <Cta/>
            <Brand/>
            </article>
      </main>
      <Footer/>
    </>
  );
  }
export default Inicio;
