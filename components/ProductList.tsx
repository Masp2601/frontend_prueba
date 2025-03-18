'use client';

import { useState } from 'react';
import { useProductContext } from '../app/context/ProductContext';

export default function ProductList() {
  const { products, deleteProduct } = useProductContext(); // Usamos el hook personalizado
  const [sortBy, setSortBy] = useState(''); // Estado para almacenar el criterio de ordenación

  // Función para ordenar los productos según el criterio seleccionado
  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'cantidad') return a.cantidad - b.cantidad;
    if (sortBy === 'creacion') return new Date(a.creacion).getTime() - new Date(b.creacion).getTime();
    if (sortBy === 'codigo') return a.codigo - b.codigo;
    if (sortBy === 'nombre') return a.nombre.localeCompare(b.nombre);
    return 0; // Sin ordenación si no hay criterio seleccionado
  });

  return (
    <div className="mt-8">
      {/* Encabezado */}
      <h2 className="text-xl font-bold mb-4">Lista de Productos</h2>

      {/* Botones de Filtro */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => setSortBy('cantidad')}
          className={`px-4 py-2 rounded ${
            sortBy === 'cantidad' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Ordenar por Cantidad
        </button>
        <button
          onClick={() => setSortBy('creacion')}
          className={`px-4 py-2 rounded ${
            sortBy === 'creacion' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Ordenar por Creación
        </button>
        <button
          onClick={() => setSortBy('codigo')}
          className={`px-4 py-2 rounded ${
            sortBy === 'codigo' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Ordenar por Código
        </button>
        <button
          onClick={() => setSortBy('nombre')}
          className={`px-4 py-2 rounded ${
            sortBy === 'nombre' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Ordenar por Nombre
        </button>
      </div>

      {/* Lista de Productos */}
      <ul className="space-y-4">
        {sortedProducts.map((product) => (
          <li key={product.codigo} className="flex justify-between items-center bg-gray-100 p-4 rounded">
            <div>
              <p className="font-bold">{product.nombre}</p>
              <p>{product.descripcion}</p>
              <p>Cantidad: {product.cantidad}</p>
              <p>Creación: {product.creacion}</p>
            </div>
            <button
              onClick={() => deleteProduct(product.codigo)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}