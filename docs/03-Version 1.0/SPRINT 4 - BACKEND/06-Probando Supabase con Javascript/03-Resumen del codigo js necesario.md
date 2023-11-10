---
title: Resumen del código JS necesario para la comunicación con la BD
---

Este es el código que, a priori, necesitamos para conectar y comunicar nuestra app con la BD.
Lo he copiado de la API Docs de Supabase para tenerlo como referencia para utilizarlo más adelante, cuando empecemos a programar la lógica para comunicar nuestro frontEnd con la base de datos:

## APIS extraidas de API Docs de Supabase para gestion de usuarios

```js title="USER SIGNUP"
let { data, error } = await supabase.auth.signUp({
 email: 'someone@email.com',
 password: 'TGeycKCsmEIyrHPhWiYF'
})
```

```js title="USER LOGIN"
let { data, error } = await supabase.auth.signInWithPassword({
 email: 'someone@email.com',
 password: 'TGeycKCsmEIyrHPhWiYF'
})
```

```js title="GET USER"
const { data: { user } } = await supabase.auth.getUser()
```

```js title="PASSWORD RECOVERY"
let { data, error } = await supabase.auth.resetPasswordForEmail(email)
```

```js title="UPDATE USER"
const { data, error } = await supabase.auth.updateUser({
 email: "new@email.com",
 password: "new-password",
 data: { hello: 'world' }
})
```

```js title="USER LOGOUT"
let { error } = await supabase.auth.signOut()
```

```js title="INVITE USER"
let { data, error } = await supabase.auth.api.inviteUserByEmail('someone@email.com')
```

## APIS para tablas
### Tabla perfiles

```js title="READ ALL ROWS"
let { data: perfiles, error } = await supabase
 .from('perfiles')
 .select('*')
```

```js title="READ SPECIFIC COLUMNS"
let { data: perfiles, error } = await supabase
 .from('perfiles')
 .select('some_column,other_column')
```
```js title="WITH PAGINATION"
let { data: perfiles, error } = await supabase
 .from('perfiles')
 .select('*')
 .range(0, 9)
```

```js title="WITH FILTERING"
let { data: perfiles, error } = await supabase
 .from('perfiles')
 .select("*")
 // Filters
 .eq('column', 'Equal to')
 .gt('column', 'Greater than')
 .lt('column', 'Less than')
 .gte('column', 'Greater than or equal to')
 .lte('column', 'Less than or equal to')
 .like('column', '%CaseSensitive%')
 .ilike('column', '%CaseInsensitive%')
 .is('column', null)
 .in('column', ['Array', 'Values'])
 .neq('column', 'Not equal to')

 // Arrays
 .cs('array_column', ['array', 'contains'])
 .cd('array_column', ['contained', 'by'])
```

### Tabla proyectos
```js title="READ ALL ROWS"
let { data: proyectos, error } = await supabase
 .from('proyectos')
 .select('*')
```

```js title="READ SPECIFIC COLUMNS"
let { data: proyectos, error } = await supabase
 .from('proyectos')
 .select('some_column,other_column')
```

```js title="READ FOREIGN TABLES"
let { data: proyectos, error } = await supabase
 .from('proyectos')
 .select(`
   some_column,
   other_table (
     foreign_key
   )
 `)
```

```js title="WITH PAGINATION"
let { data: proyectos, error } = await supabase
 .from('proyectos')
 .select('*')
 .range(0, 9)
```

```js title="WITH FILTERING"
let { data: proyectos, error } = await supabase
 .from('proyectos')
 .select("*")
 // Filters
 .eq('column', 'Equal to')
 .gt('column', 'Greater than')
 .lt('column', 'Less than')
 .gte('column', 'Greater than or equal to')
 .lte('column', 'Less than or equal to')
 .like('column', '%CaseSensitive%')
 .ilike('column', '%CaseInsensitive%')
 .is('column', null)
 .in('column', ['Array', 'Values'])
 .neq('column', 'Not equal to')
 // Arrays
 .cs('array_column', ['array', 'contains'])
 .cd('array_column', ['contained', 'by'])
```

## Funciones
```js title="INVOKE FUNCTION perfil_detalle"
let { data, error } = await supabase
 .rpc('perfil_detalle', {
   userid
 })

if (error) console.error(error)
else console.log(data)
```

```js title="INVOKE FUNCTION perfil_detalle_todos
let { data, error } = await supabase
 .rpc('perfil_detalle_todos')

if (error) console.error(error)
else console.log(data)
```

```js title="INVOKE FUNCTION proyecto_detalle
let { data, error } = await supabase
 .rpc('proyecto_detalle', {
   proyecto_id
 })

if (error) console.error(error)
else console.log(data)
```

```js title="INVOKE FUNCTION proyecto_detalle_todos
let { data, error } = await supabase
 .rpc('proyecto_detalle_todos')

if (error) console.error(error)
else console.log(data)
```