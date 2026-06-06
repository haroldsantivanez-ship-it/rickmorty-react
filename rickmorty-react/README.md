# 🛸 Rick & Morty Universe

Aplicación React que consume la [Rick and Morty API](https://rickandmortyapi.com/) para explorar personajes del multiverso.

## 🚀 Tecnologías

- **React 19** + **Vite**
- **React Router DOM** — navegación entre rutas
- **Tailwind CSS** — estilos utilitarios
- **Rick and Morty API** — datos públicos

## 📦 Instalación y ejecución

```bash
git clone https://github.com/TU_USUARIO/rickmorty-react
cd rickmorty-react
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173)

## 🗂️ Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Hero con nombre del proyecto + listado de personajes con paginación |
| `/entities` | Listado de personajes mostrando nombre, especie, género, estado y origen |

## 🔗 Links

- **Deploy:** [https://rickmorty-react.vercel.app](https://rickmorty-react.vercel.app) ← *actualiza con tu URL*
- **Video demo:** [https://youtu.be/XXXXXXX](https://youtu.be/XXXXXXX) ← *actualiza con tu video*

## 📁 Estructura

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── CharacterCard.jsx
│   └── Loader.jsx
├── hooks/
│   └── useCharacters.js
├── pages/
│   ├── Home.jsx
│   └── Entities.jsx
├── App.jsx
└── index.css
```
