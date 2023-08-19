---
Title: "Implementación del ORM"
---

```javascript title="Clase perfiles"

import { supabase } from './supabase.js';

export class Perfiles {
  constructor({
    id = null,
    created_at = null,
    user_id = null,
    nombre = null,
    apellidos = null,
    avatar = null,
    estado = null,
    rol = null,
  }) {
    this.id = id;
    this.created_at = created_at
    this.user_id = user_id
    this.nombre = nombre
    this.apellidos = apellidos
    this.avatar = avatar
    this.estado = estado
    this.rol = rol
  }

  static async getAll() {
    const { data: perfiles, error } = await supabase
      .from('perfiles')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      throw new Error(error.message)
    }

    return perfiles.map((perfil) => new Perfil(perfil))
  }

  static async getById(id) {
    const { data: perfil, error } = await supabase
      .from('perfiles')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw new Error(error.message)
    }

    return new Perfil(perfil)
  }

  static async getByUserId(id) {
    const { data: perfil, error } = await supabase
      .from('perfiles')
      .select('*')
      .eq('user_id', id)
      .single();

    if (error) {
      throw new Error(error.message)
    }

    return new Perfil(perfil)
  }

  static async create(perfilData) {
    const { error } = await supabase
      .from('perfiles')
      .insert(perfilData)
      .select();

    if (error) {
      throw new Error(error.message)
    }

    return true;
  }

  static async update(id, newData) {
    const { error } = await supabase
      .from('perfiles')
      .update(newData)
      .eq('id', id)

    if (error) {
      throw new Error(error.message)
    }

    return true
  }
}

```

Para crear la clase **proyectos** debemos hacer los mismo pero sustituyendo el nombre de la clase, tabla y propiedades por las correspondientes a la tabla proyectos.

:::warning ¡ES TU TURNO!

Crea la clase proyectos.

:::