### afroditaShopFront

- La aplicacion va a tener lo siguiente de forma publica
	1. Una parte publica donde se mostraran todos los productos paginados.
	2. Una vista-detalle del producto.
	3. Una home con un callToAction que me lleve a la lista de productos.
	4. Una pagina 404 para rutas no existentes.
	5. Un formulario de Login y otro de registro de usuarios.
	
- La aplicacion tendra en su parte privada(solo accesible mediante login):
	1. Una pagina de perfil donde visualizar y editar los datos del usuarios
	2. Distinguir entre usuario de tipo ADMIN y de tipo ROLE.
	3. El usuario de tipo ROLE solo podra editar su perfil
	4. El usuario de tipo ADMIN podra subir, actualizar y borrar productos.
	5. El usuario de tipo ADMIN podra subir, actualizar y borrar clientes.
	
### Tareas
 - No os olvides de crear las ramas en GIT
    - Crear una ram develop y de ahi ir sacando las feature. Consejo una feature por tarea/persona. Una vez temrinada la feature la volcamos en develop no en main y hacemos push de develop. Cuando vemos que todo funciona bien en develop mergeamos a main.

 - Crear componentes para la parte publica HOME, ERROR404, PRODUCTLIST, DETAILPRODUCT, LOGIN y REGISTER

 - Crear el servicio para los productos
 - Crear el interfaz para los productos
 - Rutas:
	/home -> HOMECOMPONENT
	/product-list -> PRODUCTLISTCOMPONENT
	/product/1 -> DETAILPRODUCTCOMPONENT
	cualquier otra error ERROR404

 - Crear en el servicio el metodo getAll y pintarlo en PRODUCTLIST llamando a las peticiones del BACK. "IMPORTANTE EL BACK TIENE QUE ESTAR LEVANTADO"