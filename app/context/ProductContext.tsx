'use client';

import { createContext, useState, useContext, ReactNode } from 'react';

// Definimos el tipo de un producto
export interface Product {
  codigo: number;
  nombre: string;
  descripcion: string;
  cantidad: number;
  creacion: string;
}

// Definimos el tipo del contexto
interface ProductContextType {
  products: Product[];
  addProduct: (product: Product) => void;
  deleteProduct: (code: number) => void;
}

// Creamos el contexto
export const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Hook personalizado para acceder al contexto
export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext debe usarse dentro de un ProductProvider');
  }
  return context;
};

// Proveedor del contexto
export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setProducts((prev) => [...prev, product]);
  };

  const deleteProduct = (code: number) => {
    setProducts((prev) => prev.filter((product) => product.codigo !== code));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};