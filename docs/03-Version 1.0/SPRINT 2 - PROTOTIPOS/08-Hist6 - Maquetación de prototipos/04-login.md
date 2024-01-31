---
title: Login
tags:
  - Bootstrap 5
  - html
  - css
sidebar_position: 4
---
## *LOGIN Versíón escritorio* 

![](/imagenes/v1/prototipos/login/login.png)

## *LOGIN Versíón móvil* 


![](/imagenes/v1/prototipos/login/login_movil.png)

## Procedimiento

Para maquetar la página `login.html` podemos partir de la página `registro.html` haciendo una copia y modificando la etiqueta `main`. 

De manera resumida debemos seguir los siguientes pasos:
1. Modificamos la página home eliminando el botón *login* del menú y el contenido de la etiqueta `main` excepto el h1 que modificaremos.
2. Creamos un div con una anchura máxima de 400px usando el atributo `style` y dentro creamos un formulario con los campos correspondientes.
3. Finalmente añadimos un enlace para actualizar la contraseña y un botón para registrarte si no lo estás.

:::warning ¡NO TE OLVIDES DEL COMMIT!
Recuerda que mientras vas trabajando en el proyecto  debes ir guardando los cambios en Git y subirlos a github añadiendo cada vez un commit apropiado. Podrías empezar con algo así: 

	Crea la estructura básica de la página xxx:
  
		Agrega el esqueleto HTML y los estilos iniciales para la página xxx.html

Algunos consejos para escribir tus commits:

👉[Buenas prácticas creando mensajes 'commit'](/pildoras/25-commit)👈
:::

Aquí puedes ver el código utilizado: 👁‍🗨 ...

<div style={{display: ""}}>

```html title="registro.html"

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
		<title>Login</title>
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
				<h1 class="mt-5 text-center">Inicia sesión</h1>
				<div class="m-5 mx-auto" style="max-width: 400px">
					<form action="" class="form border shadow-sm p-3">
						<label for="email" class="form-label">Email:</label>
						<input type="text" class="form-control" />
						<label for="pass" class="form-label mt-3">Contraseña:</label>
						<input id="pass" type="password" class="form-control" />
						<div class="form-check mt-3">
							<input
								class="form-check-input"
								type="checkbox"
								value=""
								id="flexCheckChecked"
								checked
							/>
							<label class="form-check-label" for="flexCheckChecked">
								Recordar sesión
							</label>
						</div>
						<a class="d-block text-end" href="#">¿Has olvidado tu contraseña?</a>
						<a class="btn btn-primary w-100 mt-3" href="#">Iniciar sesión</a>
					</form>
					<a class="d-block mt-5 btn btn-secondary mx-auto" href="#"
						>¿Eres nuevo? Regístrate</a
					>
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