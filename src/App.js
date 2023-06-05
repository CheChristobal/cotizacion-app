import React, { useState } from 'react';
import Autocomplete from 'react-autocomplete';
import './App.css';
import imagen from './logo.svg';

const App = () => {
  const [producto, setProducto] = useState('');
  const [resultados, setResultados] = useState([]);

  const handleProductoChange = (event) => {
    setProducto(event.target.value);
  
    const productosFiltrados = precios.filter(
      (precio) =>
        precio.producto.toLowerCase().includes(event.target.value.toLowerCase())
    );
  
    const resultados = productosFiltrados.slice(0, 3).map((precio, index) => ({
      tienda: precio.tienda,
      producto: precio.producto,
      precio: `$${precio.precio.toFixed(2)}`,
      imagen: precio.imagen,
    }));
  
    setResultados(resultados);
  };
  

  const precios = [
    {
      tienda: 'ElectroWorld',
      producto: 'Smartphone',
      precio: 10,
      imagen: imagen
    },
    {
      tienda: 'TecnoMax',
      producto: 'Smartphone',
      precio: 12,
      imagen: imagen
    },
    {
      tienda: 'GadgetLand',
      producto: 'Smartphone',
      precio: 9,
      imagen: imagen
    },
    {
      tienda: 'ElectroWorld',
      producto: 'Tablet',
      precio: 15,
      imagen: imagen
    },
    {
      tienda: 'TecnoMax',
      producto: 'Tablet',
      precio: 18,
      imagen: imagen
    },
    {
      tienda: 'GadgetLand',
      producto: 'Tablet',
      precio: 16,
      imagen: imagen
    },
    {
      tienda: 'ElectroWorld',
      producto: 'Smart TV',
      precio: 20,
      imagen: imagen
    },
    {
      tienda: 'TecnoMax',
      producto: 'Smart TV',
      precio: 25,
      imagen: imagen
    },
    {
      tienda: 'GadgetLand',
      producto: 'Smart TV',
      precio: 22,
      imagen: imagen
    },
    // Agrega los demás datos aquí...
  ];

  const handleCotizar = (event) => {
    event.preventDefault();
  
    const productosFiltrados = precios.filter(
      (precio) =>
        precio.producto.toLowerCase().includes(producto.toLowerCase())
    );
  
    const resultados = productosFiltrados.slice(0, 3).map((precio, index) => ({
      tienda: precio.tienda,
      producto: precio.producto,
      precio: `$${precio.precio.toFixed(2)}`,
      imagen: precio.imagen,
    }));
  
    setResultados(resultados);
  };
  

  const renderProductoItem = (item, isHighlighted) => (
    <div
      key={item.producto}
      style={{
        background: isHighlighted ? '#F0F7EE' : 'transparent',
      }}
    >
      {item.producto}
    </div>
  );

  return (
    <div className="container">
      <h1>Cotizador de Precios</h1>
      <form className="cotizacion-form" onSubmit={handleCotizar}>
        <label htmlFor="producto">Producto:</label>
        <Autocomplete
          items={precios}
          value={producto}
          onChange={handleProductoChange}
          getItemValue={(item) => item.producto}
          renderItem={renderProductoItem}
          menuStyle={{
            borderRadius: '5px',
            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
            background: '#f9f9f9',
            padding: '2px 0',
            fontSize: '90%',
            position: 'fixed',
            overflow: 'auto',
            maxHeight: '50%', // Ajusta la altura máxima del menú desplegable
          }}
        />
        <button type="submit">Cotizar</button>
      </form>

      <div className="resultados">
        <h2>Resultados</h2>
        {resultados.length > 0 ? (
          resultados.map((resultado, index) => (
            <div className="card" key={index}>
              <img className="card-image" src={resultado.imagen} alt={resultado.tienda} />
              <h3>{resultado.tienda}</h3>
              <h4>{resultado.producto}</h4>
              <p>Precio: {resultado.precio}</p>
            </div>
          ))
        ) : (
          <p>No se encontraron resultados</p>
        )}
      </div>
    </div>
  );
};

export default App;
