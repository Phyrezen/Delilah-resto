ACAMICA
Trabajo Práctio N°3 "Delilah Restó"

Por: Pablo Luis Leandro Gutiérrez
Lista de archivos

.:
README.md

./database

./src

./node_modules

package.json

/Base de datos
links_delilah.sql
sessions.sql
history.sql
orders.sql
tobuy.sql
usersdelilah.sql

/src
./lib
./public
./routes
./views
database.js
index.js
keys.js

/src/lib
adm.js
auth.js
helpers.js
handlebars.js
passport.js

/src/public
./css
./img
./interactive

/src/public/CSS
style.css

/src/public/img
1.jpg
2.jpg
3.jpg
4.jpg
5.jpg
6.jpg
7.jpg
8.jpg
9.jpg
10.jpg
11.jpg
12.jpg
arrow.png
arrowdow.png
comeback.png
created.jpg
created.png
delete.png
delilah.png
delilah2.png
logo.png
modify.png
panel1.png
panel2.png
panel3.png
panel4.png
panel5.png
pointer.png
sumar.png
wp.jpg
ws.jpg
ws2.jpg
ws3.jpg
ws4.jpg

/src/public/Interactive
autorefresh.js
menu.js

/src/routes
authentication.js
index.js
links.js
menusql.js

/src/views
./auth
./layouts
./links
./partials
admin.hbs
confirm.hbs
confirmed.hbs
follow.hbs
history.hbs
information.hbs
index.hbs
profile.hbs

/src/views/auth
signin.hbs
signup.hbs

/src/views/layouts
main.hbs

/src/views/links
add.hbs
list.hbs

/src/views/partials
message.hbs
navigation.hbs

Instrucciones para inciar el servidor

    Eviar el proyecto de Git a la pc.
    Instalar y Ejecutar XAMPP o cualquier otro software de gestion de MySQL y Apache.
    Importar la base de datos "delilah.sql" que se encuentra dentro de la carpeta "Base de datos" del proyecto, a phpmyadmin. En la misma carpeta además están las tablas de la db, las cuales se pueden importar por separado
    Abrir consola DOS (cmd) de Windows
    Ingresar a la carpeta del proyecto: delilahpgutir
    Iniciar el proyecto con el comando nodemon src/index.js (o npm run dev en caso se ya estar iniciado)
    Si el servidor se inicia correctamente debería decir

[nodemon] 1.19.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching dir(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node src/index.js`
Server is in port 4000
DB is Connected

    Iniciar la aplicación desde la URL http://localhost:4000/ 

Configuración de acceso a la base de datos:

Para configurar el acceso a la base de datos, abrir el archivo keys.js dentro de /src y corroborar que los datos sean los siguientes:

        host: "localhost",
        port: "3306",
        user: 'root',
        database: 'database_links',

Indicaciones generales sobre la aplicación:

Video informativo de su uso y variables:

	https://www.youtube.com/watch?v=VpreRU5qI0k

Paths:

acceso para usuario y admin:
/signin
/signup  				registro de usuario
/delilahresto/information		modificacion de usuario existente para tener privilegios admin
/signin 				inicio de sesión
/delilahresto/information		perfil de usuario
/delilahresto/profile			listado de platos para elegir
/delilahresto/confirm			carrito de compras
/delilahresto/confirm			confirmación de compra
/delilahresto/follow?			seguimiento de compra

acceso único para admin:
/delilahresto/admin?  			pedidos en curso
/delilahresto/history?  		historial de pedidos
/delilahresto/add			edicion plato


	Para transformar un usuario en administrador, primero debe ser creado el usuario y luego en su perfil podremos brindarle los permisos (el video detalla este punto)

	Puede ocurrir que el usuario tenga 2 pedidos en curso y la página lo resolvería, pero por default tendrá solo uno (medida de seguridad para evitar spam).

	Una vez que el usuario genera el plato confirmándolo pierde la facultad de cancerlarlo, esto es así por que el pedido ya está en preparación y en caso de quererlo cancelar deberá comunicarse telefónicamente.

	Deslogear no te hará perder el pedido ni el acceso al mismo, por default los pedidos se actualizarán automátcamente desde el endpoint /delilahresto/follow?

	Deslogear no te hará perder los productos previamente seleccionados, en caso de quererlos sacar el usuario podrá hacerlo previo a confirmar

	Todos los accesos a las pantallas de maestro están restringidas en caso de no estar logeado con un usuario administrador

	Las pantallas de seguimiento y administración de pedidos se actualizarán automáticamente para brindar información detallada en tiempo real con margen de 10 segundos.

	Las pantallas se adaptan a formatos mas angostos, y limitando la amplitud, para mayor facilidad en su lectura.


    El usuario puede:

- Ver lista de productos
- Crear un pedido
- Borrar un pedido previo a confirmarlo
- Editar su información
- Cambiar sus permisos (hacerse administrador)

    El admin puede:

- Cambiar estado de un pedido
- Archivar un pedido
- Ver lista de productos
- Editar un producto
