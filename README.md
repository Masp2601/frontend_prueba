Next.js Project

Este es un proyecto de Next.js creado con create-next-app.

📌 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

Node.js (versión recomendada: 18 o superior)

npm / yarn / pnpm / bun

Un editor de código como VS Code

🚀 Instalación

Clona el repositorio y entra en el directorio del proyecto:

git clone https://github.com/Masp2601/frontend_prueba.git
cd frontend_prueba

Instala las dependencias:

npm install

▶️ Ejecución del Servidor de Desarrollo

Inicia el servidor de desarrollo con:

npm run dev


Luego, abre http://localhost:3000 en tu navegador para ver la aplicación.

🛠️ Estructura del Proyecto

/
├── app/             # Páginas y componentes principales
│   ├── layout.tsx   # Layout principal
│   ├── page.tsx     # Página principal
├── public/          # Archivos estáticos
├── styles/          # Archivos de estilos globales
├── components/      # Componentes reutilizables
├── lib/             # Funciones y helpers
├── .env.local       # Variables de entorno
├── package.json     # Dependencias y scripts
└── tsconfig.json    # Configuración de TypeScript

🐞 Depuración

Para depurar el proyecto en VS Code:

Instala la extensión Debugger for Chrome.

Agrega la siguiente configuración en .vscode/launch.json:

{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}"
    }
  ]
}

Ejecuta npm run dev y luego inicia la depuración en VS Code.

📚 Recursos Adicionales

Documentación de Next.js

Tutorial interactivo de Next.js

Repositorio de Next.js en GitHub

🚀 Despliegue en Vercel

Para desplegar en Vercel:

Instala la CLI de Vercel:

npm install -g vercel

Ejecuta:

vercel

y sigue las instrucciones.

Consulta la documentación de despliegue para más detalles.
