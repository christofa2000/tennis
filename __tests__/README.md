# Tests - JuegoTenis

## Estructura

```
__tests__/
  components/
    sections/
      hero.test.tsx          # Tests unitarios Jest
      services.test.tsx
      about.test.tsx
      locations.test.tsx
      cta.test.tsx
playwright/
  e2e.spec.ts                # Tests E2E (separados de Jest)
```

## Comandos

```bash
# Ejecutar todos los tests unitarios (Jest)
npm test

# Modo watch
npm run test:watch

# Con cobertura
npm run test:coverage

# Tests E2E (Playwright - requiere Node 18+)
npm run test:e2e

# Tests E2E con UI
npm run test:e2e:ui
```

## Separación Jest / Playwright

- **Jest** ejecuta solo tests unitarios en `__tests__/`
- **Playwright** ejecuta tests E2E en `playwright/`
- Jest ignora automáticamente la carpeta `playwright/` para evitar conflictos

## Cobertura

Los tests están configurados para mantener un mínimo de 70% de cobertura en:
- Branches
- Functions
- Lines
- Statements

## Notas

- Los tests usan mocks de `framer-motion` para mejor rendimiento
- `next/image` y `next/link` están mockeados
- Los tests de accesibilidad usan `jest-axe`
- Los tests E2E requieren Node.js 18+ para `TransformStream`
- Jest y Playwright están completamente separados para evitar conflictos

