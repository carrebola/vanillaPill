---
title: Editar perfil
tags:
  - Bootstrap 5
  - html
  - css
sidebar_position: 5
---
## *EDITAR PERFIL (MENÚ)* 

![](../../../static/imagenes/v1/prototipos/editarPerfil/menu.png)

## *EDITAR PERFIL (Ventana MODAL)* 

![](../../../static/imagenes/v1/prototipos/editarPerfil/edit.png)


## Procedimiento

Para maquetar la página `editPerfil.html` podemos partir de la página `home.html`.

En este caso lo que nos interesa es modificar el componente **navbar del header**. Fíjate que ahora el usuario ya está registrado, por lo que puede acceder a los datos de su perfil y modificarlos.

Por otro lado, cuando un usuario está registrado, aparece un nuevo menú en la parte superior derecha (con el item PROYECTOS), éste es **el menú ROL**. También debemos añadir el **menú usuario**, el cual desplegará las opciones para **editar perfil**, cerrar sesión, etc.


De manera resumida debemos seguir los siguientes pasos:
1. Insertamos el componente **modal** al final del `header`.
2. Añadimos un botón para abrir ese modal (esto podemos hacerlo en el main, aunque es un código que después desecharemos)
3. En el componente navbar del header
   1. Añadimos el **menú ROL** con el item PROYECTOS
   2. Añadimos el **menú USUARIO** con el item **Editar perfil**(entre otros). Este item será una copia del botón que permite abrir el modal.

:::warning ¡NO TE OLVIDES DEL COMMIT!
Recuerda que mientras vas trabajando en el proyecto  debes ir guardando los cambios en Git y subirlos a github añadiendo cada vez un commit apropiado. Podrías empezar con algo así: 

	Crea la estructura básica de la página xxx:
  
		Agrega el esqueleto HTML y los estilos iniciales para la página xxx.html

Algunos consejos para escribir tus commits:

👉[Buenas prácticas creando mensajes 'commit'](/blog/commit)👈
:::

Aquí puedes ver el código utilizado:

```html title="editPerfil.html"

<!DOCTYPE html>
<html lang="es">
	<head>
		<!-- Required meta tags -->
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />

		<!-- Bootstrap CSS -->
		<link
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
			rel="stylesheet"
			integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
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

		<title>Prototipos vanilla games</title>
	</head>
	<body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">
		<header>
			<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
				<div class="container">
					<a class="navbar-brand" href="#"
						><img
							src="./images/logo.svg"
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
						<!-- Menú general -->
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
						<!-- Menú ROL -->
						<ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
							<li class="nav-item">
								<a class="nav-link active" aria-current="page" href="#">PROYECTOS</a>
							</li>
							<li class="nav-item dropdown">
								<a
									class="nav-link dropdown-toggle"
									href="#"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									<img src="./images/avatar.svg" alt="" width="25" />
								</a>
								<!-- Menú usuario -->
								<ul class="dropdown-menu me-0" style="left: -100px; width: 100px">
									<li class="text-light text-center p-2">
										<p>user@email.com</p>
									</li>
									<li><hr class="dropdown-divider" /></li>
									<li>
										<button
											type="button"
											class="dropdown-item"
											data-bs-toggle="modal"
											data-bs-target="#exampleModal"
										>
											Editar perfil
										</button>
									</li>
									<li><a class="dropdown-item" href="#">Otra acción</a></li>
									<li><hr class="dropdown-divider" /></li>
									<li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			<!-- VEntana edición perfil -->

			<!-- Modal -->
			<div
				class="modal fade"
				id="exampleModal"
				tabindex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
			<!-- Formulario de edición de perfil -->
				<form action="">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<h1 class="modal-title fs-5" id="exampleModalLabel">
									Edición de perfil
								</h1>
								<button
									type="button"
									class="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button>
							</div>
							<div class="modal-body">
								<div class="form border shadow-sm p-3">
									<div class="m-1" style="max-width: 400px">
										<div class="imgPerfil border shadow-sm p-3 mb-3">
											<div
												class="imagen mx-auto mb-1 rounded-circle"
												style="
													background-image: url(./images/avatar.svg);
													width: 200px;
													height: 200px;
													background-size: cover;
													background-position: center;
												"
											></div>
											
											<!-- Imagen de perfil -->
											<label for="imagen" class="form-label mt-3">URL imagen:</label>
											<input
												id="imagen"
												type="url"
												class="form-control"
												value="http://imagenavatar.png"
											/>
										</div>

										<div class="">
											
											<!-- Nombre -->
											<label for="nombre" class="form-label">Nombre:</label>
											<input required id="nombre" type="text" class="form-control" />
											
											<!-- Apellidos -->
											<label for="apellidos" class="form-label">Apellidos:</label>
											<input id="apellidos" type="text" class="form-control" />
											
											<!-- Email -->
											<label for="email" class="form-label">Email:</label>
											<input required id="email" type="email" class="form-control" />
											
											<!-- Contraseña -->
											<label for="pass" class="form-label mt-3">Contraseña:</label>
											<input required id="pass" type="password" class="form-control" />
										</div>
									</div>
								</div>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
									Cancelar
								</button>
								<button type="button" class="btn btn-primary">Guardar cambios</button>
							</div>
						</div>
					</div>
				</form>

			</div>
		</header>
		<main>
			<div class="container">
				<h1 class="mt-5">Modal para editar perfil en header</h1>
				<!-- Button trigger modal -->
				<button
					type="button"
					class="btn btn-primary"
					data-bs-toggle="modal"
					data-bs-target="#exampleModal"
				>
					Launch demo modal
				</button>
			</div>
		</main>
		<footer class="">
			<nav class="navbar bg-secondary fixed-bottom small">
				<div class="container">
					<a class="navbar-brand" href="http://www.fpllefia.com">
						<img
							src="./images/logo.svg"
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
			src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
			integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
			crossorigin="anonymous"
		></script>
	</body>
</html>


```