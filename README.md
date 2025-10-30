## NovaBuy

NovaBuy is a modern e-commerce web application tailored for shoppers in Nigeria. It features product discovery, cart and checkout, secure payments via Paystack, customer authentication, and a lightweight admin experience for product management. Built with Next.js App Router and a clean component architecture, it’s optimized for fast loads, accessibility, and SEO.

### Demo
- Production URL: `https://novabuy-stores.vercel.app/`

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

## Project Structure
```
src/
  app/                   # Next.js App Router pages and layouts
    products/            # Product category routes and dynamic [id]
    dashboard/           # Admin dashboard (add/edit/view product)
    auth/                # Auth routes and layout
    payment/             # Checkout payment page
    success/             # Post-payment success page
  components/
    ui/                  # Shadcn-style UI primitives (button, input, sheet, etc.)
    products/            # Product details, skeletons, add-to-bag
    shopping-bag/        # Cart UI
    check-out/           # Checkout summary and total
    payment/             # Payment form with Paystack trigger
    context/             # Providers for auth and products
    navbar/, footer.tsx  # Layout components
  hooks/                 # Custom hooks (e.g., use-products)
  lib/                   # Firebase config, utils
  providers/             # Store providers for Zustand
  stores/                # Zustand stores (cart, counter, auth)
public/
  images/                # Static images and SEO assets
```

## Environment Variables
Create a `.env.local` file in the project root and provide the following keys. Do not commit this file.

```bash
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...

# Paystack
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_test_************************
```

Notes:
- Firebase config is read in `src/lib/firebase.ts` and used to initialize Auth and Firestore.
- Paystack public key is used in `src/components/payment/payment-form.tsx` to initialize `usePaystackPayment`.

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

## Key Workflows

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

## Roadmap (Ideas)
- Order history and receipts
- Inventory management and stock levels
- Reviews and ratings
- Address book and delivery tracking

## Contributing
1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit changes: `git commit -m "feat: add your feature"`
4. Push: `git push origin feat/your-feature`
5. Open a Pull Request

## License
This project is proprietary to the NovaBuy team unless otherwise stated. Reach out to the maintainers for usage terms.
