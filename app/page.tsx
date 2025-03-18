import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      {/* Contenedor principal */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Encabezado */}
        <header className="bg-blue-600 text-white py-6 px-8 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold">Gestión de Productos</h1>
          <p className="mt-2 text-xs sm:text-sm">Crea, organiza y elimina productos de manera eficiente.</p>
        </header>

        {/* Formulario de creación */}
        <section className="p-6 sm:p-8 border-b border-gray-200">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center">Crear Nuevo Producto</h2>
          <ProductForm />
        </section>

        {/* Lista de productos */}
        <section className="p-6 sm:p-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center">Lista de Productos</h2>
          <ProductList />
        </section>
      </div>
    </div>
  );
}