# 🎸 GuitarLA - Tienda Virtual de Guitarras

**GuitarLA** es una tienda virtual de guitarras construida con **React + Vite + TypeScript**, enfocada en la gestión de un carrito de compras y la visualización de una colección de guitarras. El objetivo principal del proyecto es practicar conceptos fundamentales de React, manejo de estado, hooks personalizados y buenas prácticas en desarrollo frontend.

---

## ✨ Características Principales

- 🎸 **Visualización de productos**: Muestra una colección de guitarras con nombre, descripción, precio e imagen.
- 🛒 **Carrito de compras**: 
  - Agregar productos al carrito.
  - Incrementar y decrementar cantidades.
  - Eliminar productos o vaciar el carrito completamente.
- 💾 **Persistencia**: El carrito se guarda en `localStorage`, conservando el estado entre recargas de página.
- 🧩 **Componentización**: Interfaz compuesta por componentes reutilizables como `Header`, `Guitar`, etc.
- 🪝 **Hook personalizado**: `useCart` encapsula toda la lógica del carrito de manera reutilizable.
- 🎨 **Estilos personalizados**: Inspirados en utilidades de Bootstrap y definidos en CSS global.
- 🖼️ **Imágenes**: Se incluyen imágenes de guitarras y recursos gráficos personalizados.

---

## 🧠 Estructura del Proyecto

```
src/
├── App.tsx # Componente principal
├── component/
│ ├── Header.tsx # Encabezado y resumen del carrito
│ └── Guitar.tsx # Componente individual para cada guitarra
├── data/
│ └── db.ts # Base de datos simulada de guitarras
├── hook/
│ └── useCart.ts # Hook personalizado para lógica del carrito
├── types/
│ └── guitar.d.ts # Tipos TypeScript para guitarras y carrito
├── assets/ # Recursos gráficos adicionales
├── index.css # Estilos globales y utilidades
└── main.tsx # Punto de entrada de la aplicación
public/
└── img/ # Imágenes de guitarras, logo y carrito

```


---

## 🛠️ Herramientas y Dependencias

- ⚛️ **React 19**
- ⚡ **Vite** para desarrollo rápido y build optimizado
- 🟦 **TypeScript** para tipado estático robusto
- 📏 **ESLint** con reglas específicas para React y hooks
- 💽 **localStorage** para persistencia del carrito
- 🎨 **Bootstrap** (parcial, a través de utilidades CSS personalizadas)

---

## 📚 ¿Qué puedes aprender de este proyecto?

- Ejemplo práctico de carrito de compras con React + TS.
- Uso de hooks personalizados (`useCart`) y estados derivados.
- Tipado  con TypeScript y separación de responsabilidades.
- Organización de componentes, lógica y estilos de forma mantenible.
- Buenas prácticas en persistencia, estados y estructura del frontend.
- Código limpio,  y fácil de escalar.

---

## 🚀 Cómo iniciar el proyecto

```bash
# Clonar el repositorio
git clone https://github.com/DaimerBaron/guitar-shop-practice.git

# Entrar al proyecto
cd guitarla

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

