# 🎾 JuegoTenis - Landing Page

Landing page moderna y responsive para **JuegoTenis**, una escuela de tenis en Buenos Aires. Diseñada con inspiración en OpenPark, adaptada a la temática de clases de tenis.

## 🚀 Stack Tecnológico

- **Framework:** Next.js 16 (App Router)
- **Lenguaje:** TypeScript (strict mode)
- **Estilos:** Tailwind CSS v4
- **Animaciones:** Framer Motion
- **Íconos:** Lucide React
- **Fuentes:** Geist Sans (optimizada con `next/font`)

## ✨ Características

- ✅ **Diseño Responsive** - Mobile-first, optimizado para todos los dispositivos
- ✅ **SEO Optimizado** - Metadata completa, Open Graph, y estructura semántica
- ✅ **Animaciones Suaves** - Transiciones y efectos con Framer Motion
- ✅ **Performance** - Optimización de imágenes, fuentes y código
- ✅ **Accesibilidad** - Contraste AAA, navegación por teclado, ARIA labels
- ✅ **Colores Personalizados** - Paleta naranja (#ff5c00), negro (#111111) y blanco

## 📁 Estructura del Proyecto

```
tenis/
├── app/
│   ├── layout.tsx          # Layout principal con Navbar y Footer
│   ├── page.tsx             # Página principal con todas las secciones
│   ├── metadata.ts          # Configuración SEO
│   └── globals.css          # Estilos globales y tokens Tailwind
├── components/
│   ├── layout/
│   │   ├── navbar.tsx       # Navegación principal
│   │   └── footer.tsx       # Footer con enlaces y redes
│   ├── sections/
│   │   ├── hero.tsx         # Sección hero con CTA
│   │   ├── services.tsx     # Clases para adultos y niños
│   │   ├── about.tsx        # Quiénes somos
│   │   ├── locations.tsx    # Sedes Núñez y Caballito
│   │   └── cta.tsx          # Call to action final
│   └── ui/
│       ├── button.tsx       # Componente botón reutilizable
│       ├── section-title.tsx # Título de sección animado
│       └── floating-whatsapp.tsx # Botón flotante WhatsApp (mobile)
├── lib/
│   ├── config/
│   │   └── site.ts          # Configuración centralizada (URLs, links, ubicaciones)
│   └── utils.ts             # Utilidades (cn helper para clases)
└── public/                  # Imágenes y assets estáticos
```

## 🎨 Paleta de Colores

- **Brand Primary:** `#ff5c00` (Naranja)
- **Brand Secondary:** `#ff7f11` (Naranja claro)
- **Neutral Dark:** `#111111` (Negro)
- **Neutral Light:** `#ffffff` (Blanco)

Los colores están definidos como tokens en `app/globals.css` y pueden usarse con las clases de Tailwind:

- `bg-brand-500`, `text-brand-500`, etc.
- `bg-neutral-950`, `text-neutral-50`, etc.

## 🛠️ Instalación y Uso

### Prerrequisitos

- Node.js 18+
- npm, yarn, pnpm o bun

### Instalación

```bash
# Instalar dependencias
npm install
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build de Producción

```bash
# Crear build optimizado
npm run build

# Iniciar servidor de producción
npm start
```

### Linting

```bash
# Ejecutar ESLint
npm run lint
```

## 📝 Configuración

### Personalizar Información

Edita `lib/config/site.ts` para actualizar:

- **Número de WhatsApp:** Cambia el número en `links.whatsapp`
- **Link de Instagram:** Actualiza `links.instagram`
- **URL del sitio:** Modifica `url`
- **Direcciones de sedes:** Edita `locations.nunez` y `locations.caballito`

### Agregar Imágenes

Reemplaza los placeholders con imágenes reales:

1. **Hero:** Imagen de clases de tenis (recomendado: 1920x1080px)
2. **Services:**
   - `/public/services/adultos.jpg` - Clases para adultos
   - `/public/services/ninos.jpg` - Clases para niños
3. **About:** Imagen de profesor enseñando
4. **Locations:** Imágenes de las sedes

## 🎯 Secciones

1. **Hero** - Presentación principal con llamadas a la acción
2. **Servicios** - Clases para adultos y niños/adolescentes
3. **Quiénes Somos** - Información sobre la escuela
4. **Sedes** - Ubicaciones en Núñez y Caballito
5. **CTA Final** - Llamada a la acción con enlace a WhatsApp

## 🔗 Enlaces Importantes

- **WhatsApp:** Configurado para contacto directo
- **Google Maps:** Enlaces a ubicaciones de las sedes
- **Instagram:** Link a redes sociales

## 📱 Características Mobile

- Menú hamburguesa en dispositivos móviles
- Botón flotante de WhatsApp (solo visible en mobile)
- Navegación suave entre secciones
- Imágenes optimizadas con `next/image`

## 🚀 Deploy

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Otros Proveedores

El proyecto puede desplegarse en cualquier plataforma que soporte Next.js:

- Netlify
- AWS Amplify
- Railway
- Render

## 📚 Recursos

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev)

## 🧩 Convenciones de Código

Este proyecto sigue las reglas definidas en `.cursorrules`:

- **Indentación:** Tabs
- **Strings:** Single quotes
- **Sin punto y coma** (excepto casos ambiguos)
- **Máximo 100 caracteres por línea**
- **Componentes:** PascalCase
- **Archivos:** kebab-case
- **TypeScript strict:** true

## 📄 Licencia

Proyecto privado para JuegoTenis.

---

**Desarrollado con ❤️ usando Next.js 16 y TypeScript**
"# tennis"
