
# Levare Music Store
### Coderhouse 2023 - React JS
#### Comisión 57985
##### Profesor: **Adrián Solimano**

## Demo
![gif](https://firebasestorage.googleapis.com/v0/b/levare-musicstore.appspot.com/o/refs%2Fnavegacion.gif?alt=media&token=dc839dc5-9fc4-4ceb-a1a5-8614901f2f3e)

## Autor

**Santiago Toselli**

[![github logo](https://firebasestorage.googleapis.com/v0/b/levare-musicstore.appspot.com/o/icons%2Fgithub_2111425.png?alt=media&token=a2656271-df6b-4913-9abe-f00d36dd6665)](https://www.github.com/santitoselli)

[![linkedin](https://firebasestorage.googleapis.com/v0/b/levare-musicstore.appspot.com/o/icons%2Flinkedin_3536505.png?alt=media&token=334e3d6c-58fa-419c-82d8-ccd7fcad75ac)](https://www.linkedin.com/in/santiago-toselli)

## Descripción

Para el proyecto final del curso de React, desarrollé un e-commerce llamado Levare Music Store. Es para la venta de instrumentos musicales y equipos de segunda mano. Está vinculada a una base de datos en Firebase y se comunica para traer y enviar información a la misma. Se puede navegar por categorías, entrar a la descripción de un producto, seleccionar una cantidad y agregar al carrito. Por último, en el carrito se ve la descripción de los items agregados con sus cantidades y precio; y para finalizar pide los datos del comprador para generar la orden de compra.
La idea es utilizar una single-page-application, en la cual según la interacción se van montando y desmontando componentes en una misma página. Utilizando Context mantenemos los estados del carrito para poder movernos dentro de la aplicación sin perder los items agregados.

Para el desarrollo se utilizó:
- NodeJs v18.17.1
- React v18.2.0
- React Router Dom v6.16.0
- Firebase v10.5.0
- HTML/CSS/JavaScript

## Services y Context

**firebaseConfig:** contiene el SDK de nuestra base de datos en Firebase que luego será exportada para utilizar en los componentes

**itemServices:** contiene la lógica para comunicar la base de datos con nuestra aplicación, sus funciones devuelven promesas de las cuales nuestra aplicación busca y trae datos específicos (items, categorías, ordenes de compra, etc)

**CartContext:** es el componente .js que contiene toda la lógica que va a necesitar el estado del carrito para poder utilizarse en varios componentes de la aplicación utilizando la misma información en el estado.

## Components

**NavBar:** Componente que contiene los links de navegación dentro de la app, el logotipo (también link al inicio) y el carrito de compras.

**CartWidget:** se encarga de contener el ícono del carrito y la cantidad de ítems (que sólo aparecen cuando hay algo agregado).

**Footer:** pie de página que se mantiene en la App principal por lo que se renderiza siempre.

**Item:** se encarga de generar el diseño de cada card de productos que serán listados en la página principal.

**ItemListContainer:** es el componente principal que llama a todos los productos de la base de datos y los renderiza en cards. Además contiene la lógica para filtrar por categorías al seleccionar desde la NavBar el desplegable de categorías.

**ItemDetail:** se encarga de renderizar el diseño del item detallado, con la imagen de mayor tamaño y llama al componente ItemCount necesario para el carrito.

**ItemCount:** componente que se encarga del renderizar los botones "+" y "-" con la cantidad a agregar. Llamando a la función onAdd para agregar la cantidad al estado del carrito.

**ItemDetailContainer:** se encarga de la lógica para traer un item por su ID y renderizarlo dentro de ItemDetail.

**CartItem:** es el componente que se encarga de renderizar los datos de un ítem listado del carrito y contiene la lógica para eliminar ese ítem.

**Cart:** es el componente que mapea los items agregados del estado del carrito y los renderiza como componentes Cart. Además tiene la lógica para vaciar el carrito, ir al inicio por si está vacío el carrito, o terminar la compra para acceder a la creación de orden de compra.

**Checkout:** es el componente que crea la orden de compra a través de un formulario que va a registrar los datos del comprador. Posee sus validaciones de inputs y va a generar un usuario de compra con los items a comprar, almacenando los datos en Firebase. Por último, muestra un mensaje de éxito (o error) con el número de ID de la compra.

## Evolución de la App

Este proyecto se creó con la intención de continuar desarrollándolo para uso real. Levare Music Store existe en las redes y se puede visitar en los siguientes links:

[![fb logo](https://firebasestorage.googleapis.com/v0/b/levare-musicstore.appspot.com/o/icons%2Ffacebook_5968764.png?alt=media&token=a1df0df3-af6c-4627-a248-31f7572958b1)](https://www.facebook.com/profile.php?id=100090128886283) [![ig logo](https://firebasestorage.googleapis.com/v0/b/levare-musicstore.appspot.com/o/icons%2Finstagram_4138124.png?alt=media&token=8b437713-f312-4d70-aecf-44195a5e5f91)](https://www.instagram.com/levare.musicstore/)

A pesar de que tiene el formato de e-commerce con stock y pedidos de compras, los productos reales suelen ser uno de cada tipo y el tipo de compra es por contacto con el vendedor. Por lo que en un futuro se realizará el componente para ponerse en contacto directo, resolver dudas, coordinar para prueba y/o entrega de equipos. También tendrá un login para el administrador, con funcionalidades que le permitirá agregar nuevos productos y subirlos a la base de datos, dar de baja o marcarlos como "vendidos", con información que sólo él puede ver (como datos de los vendedores, teléfonos, dirección, precios sugeridos, etc). A su vez tendrá una consola de información con un listado completo de productos, con la posibilidad de actualizar precios en una sola ventana y pudiendo hacer la cotización de USD al valor del día.

## Agradecimientos

Agradezco al profesor y los tutores por resolver nuestras dudas y brindarnos las herramientas, y a Coderhouse por la posibilidad de aprender de manera virtual y eficiente en este tiempo de cursado.
