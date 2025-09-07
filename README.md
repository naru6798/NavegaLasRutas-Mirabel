# Proyecto: Hecteon - Tienda Online de Productos de Neón y Resina

## Descripción

Hecteon es una **página web de comercio electrónico** desarrollada con **React**, que permite a los usuarios explorar, seleccionar y comprar productos de decoración y artesanías, incluyendo **carteles de neón, cuadros y muebles**.

La aplicación utiliza **Firebase** como backend para almacenar productos y registrar órdenes de compra. El diseño es **interactivo y responsivo**, incluyendo un **carrito de compras**, un **checkout funcional** y **notificaciones** para mejorar la experiencia del usuario.

---
## Tecnologías utilizadas

* **Frontend:** React, JSX, CSS
* **Routing:** React Router DOM
* **Estado global:** Context API
* **Base de datos:** Firebase Firestore
* **Autenticación y servicios:** Firebase
* **Componentes visuales:** React-Bootstrap (Spinner)
* **Notificaciones:** React-Toastify
* **Despliegue:** Local o mediante hosting (Firebase Hosting u otro)

---
## Funcionalidades

1. **Catálogo de productos**

   * Filtrado por categoría.
   * Visualización de productos individuales con detalle.

2. **Carrito de compras**

   * Agregar productos desde el detalle.
   * Eliminar productos o vaciar carrito.
   * Visualización de cantidad total y precio acumulado.

3. **Checkout**

   * Formulario de datos del usuario (nombre, apellido, teléfono, email).
   * Validación de campos completos y coincidencia de emails.
   * Registro de orden en Firebase.
   * Mensaje de confirmación con ID de orden.
   * Limpieza automática del carrito al finalizar la compra.

4. **Spinner de carga**

   * Indica al usuario que los productos se están cargando desde Firebase.

5. **Notificaciones**

   * Confirmación visual de agregado al carrito mediante React-Toastify.

---
## Uso

* Navegar por categorías y productos.
* Agregar productos al carrito.
* Acceder al carrito desde el ícono superior.
* Completar el checkout para registrar la orden.
* Recibir confirmación de la orden y ver su ID.

---
## Dependencias principales

* react
* react-dom
* react-router-dom
* firebase
* react-bootstrap
* bootstrap
* react-toastify

---
## Estilos

* CSS modularizado por componente.
* Diseño moderno, centrado en la experiencia del usuario.
* Spinner para indicar carga de productos.
* Colores y botones personalizados para destacar acciones importantes.

---
## Mejoras futuras

* Autenticación de usuarios (Firebase Auth).
* Historial de órdenes por usuario.
* Integración con pasarela de pago.
* Mejoras en el responsive para dispositivos móviles.
* Filtros avanzados por precio o stock.

---
## Contacto

* Autor: Naren Mirabel
* Email: mirabelnaren@hotmail.com

