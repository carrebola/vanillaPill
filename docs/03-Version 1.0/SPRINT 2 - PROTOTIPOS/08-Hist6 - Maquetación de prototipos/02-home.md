---
title: Home
tags:
  - Bootstrap 5
  - html
  - css
sidebar_position: 2
---
## *HOME Versíón escritorio* 

![](/imagenes/v1/prototipos/home/home.png)

## *HOME Versíón móvil* 


![](/imagenes/v1/prototipos/home/home_movil.png)

## Entorno de desarrollo
Vamos a comenzar a maquetar los prototipos para nuestro proyecto.

En primer lugar abre el VSCode y arrastra tu carpeta del proyecto. Si no recuerdo mal, se llamaba `vanillagames10`

Ahora deberías ver en la parte inferior izquierda de vscode el **nombre de la rama en la que estás situado**. Deberías estar en la rama `prototipos`, si no es así, puedes cambiar de rama haciendo clic (con el botón izquierdo) sobre el nombre de la rama.

:::danger ¡Cuidado!
Un error muy habitual es **olvidarnos de cambiar de rama** cuando comenzamos a trabajar. Ten cuidado ya que esto se puede convertir en un problema grave de organización, y podría ¡¡¡generar muchos dolores de cabeza 🥴!!!
:::

Si todo es correcto deberías ver en la columna izquierda la carpeta prototipos con un archivo `home.html` y un archivo `readme.md`.

Abre el archivo `home.html` y comencemos a trabajar...
## Procedimiento

Comenzamos a maquetar la página **home**. De manera resumida debemos seguir los siguientes pasos:
1. Creamos plantilla html
   1. Modificamos `lang` y `title`
   2. Vinculamos la libreria css para bootstrap y bootswatch
   3. Vinculamos la librería de iconos de boostrap
   4. Vinculamos el js de bootstrap.
2. Creamos la estructura de la web dentro del body con las etiquetas header, main y footer
2. Copiamos el componente menú de la documentación de bootstrap (**navbar**) y lo modificamos para que se ajuste a nuestro prototipo. Lo usamos tanto en el header como en el footer.
3. Creamos, en el main, un h1 y una imagen.


:::warning ¡NO TE OLVIDES DEL COMMIT!
Recuerda que mientras vas trabajando en el proyecto  debes ir guardando los cambios en Git y subirlos a github añadiendo cada vez un commit apropiado. Podrías empezar con algo así: 

	Crea la estructura básica de la página HOME:
  
		Agrega el esqueleto HTML y los estilos iniciales para la página home.html

Algunos consejos para escribir tus commits:

👉[Buenas prácticas creando mensajes 'commit'](/blog/commit)👈
:::

Aquí puedes ver el código utilizado: 👁‍🗨 ...

<div style={{display: "none"}}>

```html title="home.html"

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
		<!-- Bootswatch CSS -->
		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.0/dist/yeti/bootstrap.min.css"
		/>
		<!-- Bootstrap icons -->
		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
		/>
		<!-- Mis estilos personales  -->
		<link rel="stylesheet" href="styles.css" />

		<title>Vanilla Games</title>
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
								<button class="ms-2 btn btn-success">
									Iniciar sesión
									<i class="bi bi-box-arrow-in-right"></i>
								</button>
							</li>
							<li class="nav-item">
								<button class="ms-2 btn btn-outline-light">
									Regístrate
									<i class="bi bi-box-arrow-in-right"></i>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
		<main>
			<div class="container">
				<h1 class="mt-5 text-center fw-bold" style="font-size: 100px;">Vanilla Games</h1>
				<div class="m-5 mx-auto" style="max-width: 400px">
					<img
							src=".images/logo.svg"
							alt="fpllefia"
							class="img-fluid"
						/>
				</div>
			</div>
		</main>
		<footer class="">
			<nav class="navbar bg-secondary fixed-bottom small">
				<div class="container">
					<a class="navbar-brand fs-6" href="http://www.fpllefia.com">
						<img
							src=".images/logo.svg"
							alt="fpllefia"
							width="30"
							height="24"
							class="d-inline-block align-text-top"
						/>
						FPLlefià
					</a>
					<span class="navbar-text">DAW - Asignatura de proyectos</span>
					<a href="#" class="nav-link">carrebola GITHUB</a>
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