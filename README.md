### Pasos

    1. Descargue o clone el repositorio
    
    2. Ejecutar el siguiente comando para instalar las dependencias necesarias para que funcione => npm i
    
    3. Configurar archivo .env en la raiz del proyecto y  como esta en el .envexample
    
    4. Ejecutar el proyecto => npm run dev
    
    5. Probar EndPoints


​    
### Importante


En primer lugar simularemos un inicio de sesion con los correos disponibles en la tabla usuario con el fin de poner aprueba el conocimiento sobre jwt

    POST => http://127.0.0.1:5001/usuario/login
    
    Datos de entrada: 
        {
        ​	"email":"juan.perez@example.com"
        }
    
    Si deseas salir para probar con otro usuario  o verificar el acceso a los recursos sin un usuario autenticado
    
    GET => http://127.0.0.1:5001/usuario/lagout


### EndPoints


    1. Obtener todos los autores y su nacionalidad => GET http://127.0.0.1:5001/autor/getAutores

    2. Listar todas las categorías disponibles. => GET http://127.0.0.1:5001/categoria/getCategorias

    3. Mostrar todas las editoriales y sus direcciones => GET http://127.0.0.1:5001/editorial/getEditoriales

    4. Obtener los estados de los libros y sus descripciones => GET http://127.0.0.1:5001/libro/getEstadoLibros

    5. Mostrar todos los libros con su título, autor y editorial. => GET http://127.0.0.1:5001/libro/getLibrosAutorEditorial

    6. Listar los préstamos realizados con fecha de préstamo, fecha de devolución y estado. => GET http://127.0.0.1:5001/prestamo/getPrestamos

    7. Obtener todas las reservas realizadas con su fecha de reserva y estado => GET http://127.0.0.1:5001/reserva/getReservas

    8. Mostrar los libros disponibles para préstamo con su título y autor. => GET http://127.0.0.1:5001/libro/getLibrosDisponibles

    9. Obtener los libros prestados y su fecha de devolución => GET http://127.0.0.1:5001/libro/getLibrosPrestados

    10. Listar los usuarios y sus correos electrónicos. => GET http://127.0.0.1:5001/usuario/getUsuarios

    11. Mostrar los libros escritos por un autor específico (ejemplo:Gabriel García) =>  GET http://127.0.0.1:5001/libro/getLibrosAutorEspecifico/Gabriel

    12. Obtener los libros de cierta categoría (ejemplo: Novela). => GET http://127.0.0.1:5001/libro/getLibrosCategoria/Novela

    13. Listar los préstamos realizados por un usuario (ejemplo: Juan Pérez). => GET http://127.0.0.1:5001/prestamo/getPrestamosUsuarioEspecifico?nombreApellido=Juan Perez

    14. Mostrar los libros con más de 500 páginas y su autor. => GET http://127.0.0.1:5001/libro/getLibrosMayoresPagina

    15. Obtener los libros prestados a un usuario específico (ejemplo: María Gómez). http://127.0.0.1:5001/libro/getLibrosPrestadosUsuarioEspecifico?nombreApellido=María Gómez

    16. Listar los autores de nacionalidad española => http://127.0.0.1:5001/autor/getAutoresEspanioles

    17.Obtener los libros de cierta editorial (ejemplo: Editorial Planeta).



