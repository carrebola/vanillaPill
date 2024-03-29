---
title: Detalle proyecto
tags:
  - Bootstrap 5
  - html
  - css
sidebar_position: 7
---
## *DETALLE DEL PROYECTO Versíón escritorio* 

![](/imagenes/v1/prototipos/proyectos/detalleProyecto.png)

## *DETALLE DEL PROYECTO Versíón móvil* 

![](/imagenes/v1/prototipos/proyectos/detalleProyecto_movil.png)


## Procedimiento

Para maquetar la página `detalleProyecto.html` podemos partir de la página `editPerfil.html`. 

De manera resumida debemos seguir los siguientes pasos:
1. Creamos la estructura de filas y columnas necearia.
2. Insertaremos el título y el botón **Volver**
3. Insertamos la imagen (que fluirá con la columna) en la columna izquierda
4. Insertamos el texto en la columna derecha
5. Haremos que el ancho de las columnas varíe según la versión escritorio o móvil.
6. Insertaremos un botón en la parte inferior derecha con posicionamiento absoluto 

:::warning ¡NO TE OLVIDES DEL COMMIT!
Recuerda que mientras vas trabajando en el proyecto  debes ir guardando los cambios en Git y subirlos a github añadiendo cada vez un commit apropiado. Podrías empezar con algo así: 

	Crea la estructura básica de la página xxx:
  
		Agrega el esqueleto HTML y los estilos iniciales para la página xxx.html

Algunos consejos para escribir tus commits:

👉[Buenas prácticas creando mensajes 'commit'](/pildoras/25-commit)👈
:::
   
Aquí puedes ver el código utilizado: 👁‍🗨 ...

<div style={{display: ""}}>

```html title="detalleProyecto.html"

<!DOCTYPE html>
<html lang="es">
	<head>
		<!-- Required meta tags -->
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />

		<!-- Bootstrap CSS -->
		<link
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
			rel="stylesheet"
			integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
			crossorigin="anonymous"
		/>

		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.0/dist/yeti/bootstrap.min.css"
		/>

		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
		/>
		<link rel="stylesheet" href="styles.css" />

		<link rel="stylesheet" href="styles.css" />
		<title>Prototipos vanilla games</title>

		<style>
			/* Modificamos aspecto de nav-tabs y nav-links */
			.nav-tabs,
			.nav-link.active {
				border-bottom: 0;
				/* background-color: red; */
			}
		</style>
	</head>
	<body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">		
		<header>
			<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
				<div class="container">
					<a class="navbar-brand" href="#"
						><img
							src=".images/logo.svg"
							alt=""
							width="30"
							height="24"
							class="d-inline-block align-text-top"
						/>

						Vanilla Games</a
					>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav mx-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<a class="nav-link active" aria-current="page" href="#">Home</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" aria-current="page" href="#">TOP5 Proyectos</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" aria-current="page" href="#">A cerca de</a>
							</li>
						</ul>
						<ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
							<li class="nav-item">
								<a class="nav-link active" aria-current="page" href="#">PROYECTOS</a>
							</li>
							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									<img src=".images/avatar.svg" alt="" width="25">
								</a>
								<ul class="dropdown-menu me-0" style="left: -100px; width: 100px;">
									<li class="text-light text-center p-2">
										<p>user@email.com</p>
									</li>
									<li><hr class="dropdown-divider"></li>
									<li><a class="dropdown-item" href="#">Acciónn</a></li>
									<li><a class="dropdown-item" href="#">Otra acción</a></li>
									<li><hr class="dropdown-divider"></li>
									<li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
								</ul>
							</li>
							
						</ul>
						
					</div>
				</div>
			</nav>
		</header>
		<main>
			<div class="container">
				<h1 class="mt-5">Detalle del proyecto</h1>
				<div class="d-flex justify-content-end">
					<bottom class="btn btn-outline-secondary mt-5">
						<i class="bi bi-arrow-bar-left" style="font-size: 1em;"></i>
						Volver</bottom>
				</div>
				
				<div class="row mt-2">
					<div class="col-12 col-md-4 mb-3">
						<img src=".images/juego.jpg" alt="" class="img-fluid">
					</div>
					<div class="col-12 col-md-8">
						<p>
							<p><strong>Nombre: </strong><span id="nombre">TETRIS</span></p>
							<p><strong>Descripción: </strong><span id="nombre">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi dicta iste debitis recusandae perspiciatis quae. Eius impedit saepe autem velit voluptate, odio sequi expedita nisi est molestiae quo quisquam!</span></p>
							<p><strong>Estado: </strong><span id="nombre">Estado</span></p>
							<p><strong>Fecha: </strong><span id="nombre">12/12/2023</span></p>
							<p><strong>Enlace: </strong><span id="nombre">http://www.enlaceapp.com</span></p>
							<p><strong>Repositorio: </strong><span id="nombre">carrebola.github.com/123456</span></p>
						</p>
					</div>
				</div>
				<div
					class="container fixed-bottom d-flex justify-content-end"
					style="padding: 0px 0px 100px 0px"
				>
					<button
						class="btn btn-success rounded-circle fs-3 shadow"
						style="width: 50px"
					>
						<i class="bi bi-pencil"></i>
					</button>
				</div>
				
			</div>
		</main>
		<footer class="">
			<nav class="navbar bg-secondary fixed-bottom small">
				<div class="container">
					<a class="navbar-brand" href="http://www.fpllefia.com">
						<img
							src=".images/logo.svg"
							alt="fpllefia"
							width="30"
							height="24"
							class="d-inline-block align-text-top"
						/>
						FPLlefià
					</a>
					<span class="navbar-text">@Texto de header</span>
					<a href="#" class="nav-link">Vínculo header</a>
				</div>
			</nav>
		</footer>

		<!-- Option 1: Bootstrap Bundle with Popper -->
		<script
			src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
			integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
			crossorigin="anonymous"
		></script>
	</body>
</html>


```
</div>