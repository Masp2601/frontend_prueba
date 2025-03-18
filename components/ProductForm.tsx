'use client';

import { useForm } from 'react-hook-form';
import { useProductContext } from '../app/context/ProductContext';
import { format } from 'date-fns';

interface FormData {
  codigo: number;
  nombre: string;
  descripcion: string;
  cantidad: number;
}

export default function ProductForm() {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const { addProduct } = useProductContext(); // Usamos el hook personalizado

  const onSubmit = (data: FormData) => {
    const newProduct = {
      codigo: data.codigo,
      nombre: data.nombre,
      descripcion: data.descripcion,
      cantidad: data.cantidad,
      creacion: format(new Date(), 'yyyy-MM-dd'),
    };
    addProduct(newProduct);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-xl font-bold">Crear Producto</h2>
      <div>
        <label>Código</label>
        <input
          type="number"
          {...register('codigo', { required: true })}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label>Nombre</label>
        <input
          type="text"
          {...register('nombre', { required: true })}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label>Descripción</label>
        <input
          type="text"
          {...register('descripcion', { required: true })}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label>Cantidad</label>
        <input
          type="number"
          {...register('cantidad', { required: true })}
          className="w-full p-2 border rounded"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Crear Producto
      </button>
    </form>
  );
}