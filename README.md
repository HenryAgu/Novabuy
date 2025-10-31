## NovaBuy

NovaBuy is a modern e-commerce web application tailored for shoppers in Nigeria. It features product discovery, cart and checkout, secure payments via Paystack, customer authentication, and a lightweight admin experience for product management. Built with Next.js App Router and a clean component architecture, it’s optimized for fast loads, accessibility, and SEO.

### Demo
- Production URL: `https://novabuy-stores.vercel.app/`

### Images
<img width="1919" height="907" alt="Screenshot 2025-10-31 133617" src="https://github.com/user-attachments/assets/3e60a457-71e9-4de9-9e48-43adb6ed83ca" />
<img width="1919" height="909" alt="Screenshot 2025-10-31 133602" src="https://github.com/user-attachments/assets/955a3dac-0b39-4c9a-86c8-dfd247bb284c" />
<img width="1919" height="913" alt="Screenshot 2025-10-31 133549" src="https://github.com/user-attachments/assets/ce0a7035-843c-493f-bdf0-bb35032588f3" />
<img width="1919" height="912" alt="Screenshot 2025-10-31 133537" src="https://github.com/user-attachments/assets/96dfd4eb-c09d-491b-8d3f-195b23f84edb" />



## Tech Stack
- **Framework**: Next.js 15 (App Router, React 19)
- **Language**: TypeScript
- **UI**: Tailwind CSS v4, Radix UI primitives, shadcn-inspired UI components
- **State**: Zustand stores, React Context providers
- **Data & Auth**: Firebase (Auth, Firestore)
- **Payments**: Paystack (`react-paystack`)
- **Forms & Validation**: React Hook Form, Zod, `@hookform/resolvers`
- **Async/Server State**: TanStack Query
- **Notifications**: Sonner

## Features
- **Product browsing**: Home hero, featured sections, carousels, category pages (men, shoes, accessories)
- **Product details**: Dedicated product route with `/[id]`
- **Cart & checkout**: Cart management, pricing summary, delivery options, and order total
- **Payments**: Paystack integration with custom trigger button and success route
- **Auth**: Email/password and Google auth via Firebase; gated admin routes
- **Admin dashboard**: Add, edit, and view products
- **Responsive & accessible**: Components built on Radix primitives and Tailwind
- **SEO**: Rich metadata, Open Graph, and Twitter cards set in root layout

## Getting Started (Local Development)

1) Install dependencies (uses pnpm by default):
```bash
pnpm install
```

2) Run the dev server:
```bash
pnpm dev
```
Then open `http://localhost:3000`.

3) Build and start (production):
```bash
pnpm build && pnpm start
```

### Authentication
- Firebase Auth is initialized in `src/lib/firebase.ts` and provided via `AuthContextProvider` in `src/app/layout.tsx`.
- Protected routes (admin) use a guard component under `src/components/auth/protected-route.tsx`.

### Products Data
- The `ProductsProvider` wraps the app in `src/app/layout.tsx` and exposes product data via context.
- Example usage in `src/components/examples/products-context-example.tsx`.

### Cart & Checkout
- Zustand store in `src/stores/cart-stores.ts` with a `CartStoreProvider` wrapper in `src/providers/cart-store-providers.tsx`.
- UI components live in `src/components/shopping-bag` and `src/components/check-out`.

### Payments (Paystack)
- Implementation in `src/components/payment/payment-form.tsx`.
- Amount is passed in Kobo (NGN cents): total × 100.
- On success, the app navigates to `/success`. On close, an error toast appears.

## Styling & UI
- Tailwind CSS v4 with PostCSS config in `postcss.config.mjs`.
- Radix UI primitives for accessible components.
- Shadcn-inspired UI components in `src/components/ui` (e.g., `button.tsx`, `dialog.tsx`, `sheet.tsx`).

## SEO & Metadata
- Defined in `src/app/layout.tsx` (`metadata` export) including `openGraph` and `twitter` objects.
- Social preview image at `public/images/open-graph.png`.

## Scripts
```json
{
  "dev": "next dev --turbopack",
  "build": "next build --turbopack",
  "start": "next start"
}
```

## Linting & Type Safety
- ESLint config in `eslint.config.mjs` (Next.js + TypeScript).
- TypeScript config in `tsconfig.json`.

## Deployment
- Recommended: Vercel (first-class Next.js support).
- Ensure environment variables are configured in your hosting provider.
- Set `NEXT_PUBLIC_*` variables as public runtime env vars.

## Assets & Branding
- Images and icons reside in `public/` and `public/images/`.
- Payment logos (Visa, MasterCard, PayPal, Paystack) are used in checkout UI.
