const fs = require('fs');
const path = require('path');

const directoryPath = './src/pages/pildoras'; // Ruta de la carpeta que contiene las páginas

function generarLista(dir) {
  const files = fs.readdirSync(dir);
  const pageList = [];

  for (const file of files) {
    const filePath = path.join(dir, file);
    const fileStats = fs.statSync(filePath);

    if (fileStats.isDirectory()) {
      // Si es una carpeta, busca dentro de ella
      pageList.push(...generarLista(filePath));
    } else if (file.endsWith('.md')) {
      // Si es un archivo .md, agrega el título a la lista
      const content = fs.readFileSync(filePath, 'utf8');
      const titleMatch = content.match(/^#\s+(.+)/m); // Busca un encabezado de nivel 1 (#)
      const title = titleMatch ? titleMatch[1] : 'Título no encontrado';
      // Quitamos .md
      const enlace = filePath.split('.').length ? filePath.split('.')[0] : filePath

      pageList.push(`- [${title}](pildoras/${path.relative(directoryPath, enlace)})`);
    }
  }

  return pageList;
}

const pageListContent = generarLista(directoryPath);

const markdownContent = `# Lista de píldoras\n\n${pageListContent.join('\n')}`;

// Guarda el contenido generado en un archivo
fs.writeFileSync(path.join('./src/pages', 'listado.md'), markdownContent, 'utf8');

console.log('Lista de páginas creada exitosamente.');
