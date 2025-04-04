## What is Next.js?  

Next.js is a **React framework** that enables server-side rendering (SSR) and static site generation (SSG) for building **fast, scalable, and SEO-friendly** web applications. It is developed by **Vercel** and provides powerful features like:  

- **Server-side rendering (SSR)**  
- **Static site generation (SSG)**  
- **Incremental Static Regeneration (ISR)**  
- **API routes** (backend logic within the same project)  
- **Built-in CSS and image optimization**  
- **Middleware for request handling**  
- **File-based routing system** (No need for React Router)  

---

## Why Do We Need Next.js?  

### 1. **Better SEO (Search Engine Optimization)**  
React applications built with **Create React App (CRA)** render everything on the client-side, meaning search engines struggle to index the page properly. Next.js solves this problem by **pre-rendering** pages on the server before sending them to the browser.  

- **SSR** (Server-Side Rendering) generates HTML dynamically on each request, improving SEO.  
- **SSG** (Static Site Generation) creates pre-rendered pages at build time, making them load faster.  

🚀 **Result**: Better search engine rankings and increased organic traffic.  

---

### 2. **Faster Page Load Speed**  
Next.js optimizes performance by **pre-rendering pages** and **lazy loading assets**, which means:  

- Users get the **initial page load faster** (SSR or SSG).  
- Image optimization improves **performance and user experience**.  
- Built-in **code splitting** reduces unnecessary JavaScript loading.  

🚀 **Result**: Faster websites lead to better user engagement and retention.  

---

### 3. **File-Based Routing (No Need for React Router)**  
In a React app, we usually set up routing with `react-router-dom`. However, Next.js simplifies routing with a **file-based system**:  

📂 Example:  
```
pages/
 ├── index.js       → Homepage ("/")
 ├── about.js       → About page ("/about")
 ├── blog/
 │   ├── index.js   → Blog listing ("/blog")
 │   ├── [id].js    → Dynamic route ("/blog/:id")
```

**Key Benefits:**  
✅ No need for `react-router-dom`  
✅ Automatic route creation  
✅ Dynamic routes with `[id].js` (e.g., `/blog/1`, `/blog/2`)  

🚀 **Result**: Simpler, more maintainable routing system.  

---

### 4. **Built-in API Routes (Backend Inside Next.js)**  
Next.js allows us to create **backend APIs** directly within the project under the `pages/api/` directory. This eliminates the need for a separate backend server in many cases.  

📂 Example:  
```
pages/api/
 ├── hello.js       → "/api/hello"
 ├── users.js       → "/api/users"
```

📌 **API Example (pages/api/hello.js)**  
```js
export default function handler(req, res) {
  res.status(200).json({ message: "Hello from Next.js API!" });
}
```

🚀 **Result**: No need for an external backend (Express.js, Node.js) in many cases.  

---

### 5. **Server-Side Rendering (SSR) vs. Static Site Generation (SSG)**  
Next.js provides **two types of pre-rendering**:  

| Feature            | Server-Side Rendering (SSR) | Static Site Generation (SSG) |
|--------------------|---------------------------|-----------------------------|
| When HTML is generated? | On each request | At build time |
| Data is fetched?  | On every request | Once during build |
| Use cases | Real-time data (e.g., user dashboards) | Blogs, marketing pages |

📌 **SSR Example:**  
```js
export async function getServerSideProps() {
  const data = await fetch("https://api.example.com/posts").then(res => res.json());
  return { props: { posts: data } };
}
```

📌 **SSG Example:**  
```js
export async function getStaticProps() {
  const data = await fetch("https://api.example.com/posts").then(res => res.json());
  return { props: { posts: data } };
}
```

🚀 **Result**: We can choose the best rendering strategy based on project requirements.  

---

### 6. **Incremental Static Regeneration (ISR)**
Next.js allows us to update static pages **without rebuilding the entire site**.  

📌 **Example:**  
```js
export async function getStaticProps() {
  return { props: { time: new Date().toISOString() }, revalidate: 10 };
}
```
👆 This will **regenerate the page every 10 seconds**, keeping it up-to-date without affecting performance.  

🚀 **Result**: Perfect for blogs, e-commerce, and frequently updated pages.  

---

### 7. **Automatic Image Optimization**  
Next.js provides an optimized `<Image>` component that automatically resizes and optimizes images.  

📌 **Example:**  
```js
import Image from 'next/image';

export default function Home() {
  return <Image src="/image.jpg" width={500} height={300} alt="Example Image" />;
}
```

🚀 **Result**: Faster image loading and better performance.  

---

### 8. **Middleware for Custom Request Handling**  
Middleware allows us to **run custom logic before a request is completed**.  

📌 **Example:** Redirect users based on authentication:  
```js
import { NextResponse } from "next/server";

export function middleware(req) {
  const loggedIn = checkUserAuth(req); // Custom function
  if (!loggedIn) {
    return NextResponse.redirect("/login");
  }
}
```

🚀 **Result**: More control over authentication, security, and logging.  

---

### 9. **Support for TypeScript & Tailwind CSS**  
Next.js has **built-in TypeScript support**, making it easier to build type-safe applications. It also integrates seamlessly with **Tailwind CSS** for styling.  

📌 **Enable TypeScript:**  
```sh
npx create-next-app@latest my-app --typescript
```

📌 **Tailwind CSS in Next.js:**  
```sh
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

🚀 **Result**: Easier development with TypeScript and Tailwind CSS.  

---

## When to Use Next.js?  
✅ When SEO is important (blogs, e-commerce, marketing websites)  
✅ When performance is a priority (faster page loads)  
✅ When we need SSR, SSG, or ISR  
✅ When we want built-in API routes  
✅ When we want a simpler file-based routing system  
✅ When we need image and performance optimizations  

---

## When NOT to Use Next.js?  
❌ If we are building a **small project** without SEO needs (Create React App may be enough)  
❌ If we need a **backend-heavy** project (better to use Express.js or Nest.js separately)  
❌ If we don't need SSR/SSG and just want a simple React SPA  

---

## Conclusion  
Next.js is a **powerful framework** that enhances React with **server-side rendering, static site generation, API routes, and performance optimizations**. It is ideal for **SEO-friendly, fast, and scalable web applications**.  

### 📂 Folder Structure of a **Basic Next.js 15** App  

When we create a new Next.js 15 app using:  
```sh
npx create-next-app@latest my-next-app
```
or  
```sh
npx create-next-app@latest my-next-app --typescript
```
It generates the following folder structure:  

```
my-next-app/
├── .next/                  # Build output (generated after running `next build`)
├── node_modules/           # Installed npm packages
├── public/                 # Static assets (images, fonts, icons, etc.)
├── src/                    # Main source folder (new in Next.js 13+)
│   ├── app/                # New App Router (Next.js 13+ with React Server Components)
│   │   ├── layout.tsx      # Root layout (persistent layout for all pages)
│   │   ├── page.tsx        # Homepage (`/`)
│   │   ├── about/page.tsx  # About page (`/about`)
│   │   ├── blog/           # Blog route
│   │   │   ├── page.tsx    # Blog listing page (`/blog`)
│   │   │   ├── [id]/page.tsx # Dynamic route for blog (`/blog/:id`)
│   │   ├── api/            # API routes (`/api/*`)
│   │   │   ├── hello.ts    # Example API route (`/api/hello`)
│   │   ├── globals.css     # Global CSS file
│   │   ├── layout.tsx      # Root layout
│   │   ├── loading.tsx     # Loading UI
│   │   ├── error.tsx       # Error handling page
│   ├── components/         # Reusable UI components
│   ├── styles/             # CSS, Tailwind, or SCSS styles
│   ├── lib/                # Utility functions, helpers, services
│   ├── hooks/              # Custom React hooks
│   ├── context/            # React Context API providers
├── .env.local              # Environment variables (API keys, secrets)
├── .gitignore              # Files to ignore in Git
├── next.config.js          # Next.js configuration file
├── package.json            # Project dependencies & scripts
├── tsconfig.json           # TypeScript configuration (if using TS)
└── README.md               # Project documentation
```

---

## 🔍 **Detailed Explanation of Key Folders & Files**

### 1️⃣ **`.next/`** (Generated after build)
- Contains the compiled output of our project.
- Not meant to be modified manually.
- Should be **ignored** in Git (`.gitignore`).

---

### 2️⃣ **`node_modules/`**
- Stores all installed npm dependencies.
- Automatically created when we run `npm install` or `yarn install`.

---

### 3️⃣ **`public/`**
- Contains static assets like images, fonts, and icons.
- Everything in this folder is **served as-is** from the root (`/`).

📌 Example:  
- If we put an image inside `public/images/logo.png`, we can access it in the browser as:
  ```
  /images/logo.png
  ```
- Inside React components, we use it as:
  ```tsx
  import Image from "next/image";

  export default function Logo() {
    return <Image src="/images/logo.png" width={100} height={50} alt="Logo" />;
  }
  ```

---

### 4️⃣ **`src/` (Main Source Folder)**
New in **Next.js 13+**, it contains all source code and the new **App Router (`app/` folder)**.

#### 📂 `app/` (Next.js 13+ App Router)
The **`app/` folder** introduces the new **React Server Components** model with file-based routing.  

📌 Example structure:  
```
app/
├── layout.tsx    # Root layout (applies to all pages)
├── page.tsx      # Homepage (`/`)
├── about/
│   ├── page.tsx  # About page (`/about`)
├── blog/
│   ├── page.tsx  # Blog listing (`/blog`)
│   ├── [id]/
│   │   ├── page.tsx  # Dynamic blog page (`/blog/:id`)
├── api/
│   ├── hello.ts  # API route (`/api/hello`)
├── globals.css   # Global styles
├── loading.tsx   # Loading indicator
├── error.tsx     # Error handling page
```

#### 📂 **`app/api/` (API Routes)**
Next.js allows us to create backend **API routes** inside `app/api/`.  

📌 Example: **API Route (`/api/hello`)**
```ts
export async function GET() {
  return Response.json({ message: "Hello, Next.js API!" });
}
```

---

### 5️⃣ **`components/`**
- Reusable **React components** used across the project.
- Helps keep the codebase clean.

📌 Example: **Button Component (`components/Button.tsx`)**
```tsx
export default function Button({ label }: { label: string }) {
  return <button className="bg-blue-500 text-white p-2">{label}</button>;
}
```

---

### 6️⃣ **`styles/`**
- Contains global CSS, TailwindCSS, or SCSS styles.

📌 Example: **Global CSS (`styles/globals.css`)**
```css
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
}
```

---

### 7️⃣ **`lib/`** (Utility Functions & Services)
- Stores **helper functions** or **services** like database connections.

📌 Example: **Helper Function (`lib/fetchData.ts`)**
```ts
export async function fetchData(url: string) {
  const res = await fetch(url);
  return res.json();
}
```

---

### 8️⃣ **`hooks/`** (Custom Hooks)
- Stores **custom React hooks** for state management.

📌 Example: **Custom Hook (`hooks/useTheme.ts`)**
```ts
import { useState, useEffect } from "react";

export function useTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return { theme, setTheme };
}
```

---

### 9️⃣ **`context/`** (React Context API)
- Stores **global state** using React’s Context API.

📌 Example: **Theme Context (`context/ThemeContext.tsx`)**
```tsx
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
```

---

### 🔟 **Configuration & Other Files**
#### ✅ **`.env.local`** (Environment Variables)
- Stores **API keys, database URLs, secrets**.
- Example:
  ```
  DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/mydb
  ```

#### ✅ **`next.config.js`** (Next.js Configuration)
- Customizes Next.js settings.
- Example:
  ```js
  module.exports = {
    reactStrictMode: true,
    images: {
      domains: ["example.com"],
    },
  };
  ```

#### ✅ **`package.json`** (Dependencies & Scripts)
- Stores project dependencies & scripts.
- Example:
  ```json
  {
    "scripts": {
      "dev": "next dev",
      "build": "next build",
      "start": "next start"
    }
  }
  ```

---

## 🚀 **Conclusion**
Next.js 15 follows a **modern folder structure** with the `app/` directory, making it **easier to manage server components, pages, API routes, and reusable logic**.  

# 🔥 **React Server Components (RSC) - In-Depth Guide**

---

## 🚀 **What are React Server Components (RSC)?**
React Server Components (RSC) allow us to **render React components on the server** instead of the client. This helps in **reducing JavaScript bundle size, improving performance, and enabling direct access to databases, APIs, and files** without exposing sensitive logic to the browser.

✅ **Key Features of RSC:**  
- **No Client-Side JavaScript Execution** → Reduces JS sent to the browser.  
- **Direct Database & API Calls** → No need for fetching data on the client.  
- **Automatic Code Splitting** → Only sends required data to the frontend.  
- **SEO-Friendly** → Renders content on the server before sending it to the client.  
- **Improved Performance** → Faster page loads as less JavaScript is processed in the browser.  

---

## 📌 **How RSC Works?**
React now categorizes components into **two types**:  
1️⃣ **Server Components** → Run only on the server (default in Next.js 13+).  
2️⃣ **Client Components** → Run on both the server and browser but require JavaScript.  

---

## 🔍 **Differences Between Server and Client Components**

| Feature                 | Server Components (RSC) 🖥️ | Client Components 🖥️📱 |
|-------------------------|--------------------------|---------------------|
| Runs on                 | Server only              | Server + Client    |
| JavaScript in Browser?  | ❌ No                     | ✅ Yes              |
| Can Fetch Data?         | ✅ Yes (Directly)         | ✅ Yes (Via useEffect) |
| Can Use State (`useState`)? | ❌ No                     | ✅ Yes              |
| Can Use Effects (`useEffect`)? | ❌ No                     | ✅ Yes              |
| Can Use Event Handlers? | ❌ No                     | ✅ Yes (onClick, onChange, etc.) |
| Bundle Size Impact      | 🚀 Smaller (No JS sent)   | 📈 Larger (JS sent) |
| SEO Optimization        | ✅ Better                 | ❌ Worse           |

---

## 🎯 **When to Use Server vs. Client Components?**
✅ **Use Server Components when:**  
✔️ Fetching data from a database or API.  
✔️ Rendering static content (e.g., blog posts, articles, products).  
✔️ Improving SEO (Pre-rendered content).  
✔️ Reducing client-side JavaScript.  

✅ **Use Client Components when:**  
✔️ Using state (`useState`, `useReducer`).  
✔️ Handling user interactions (`onClick`, `onChange`).  
✔️ Using effects (`useEffect`, `useRef`).  
✔️ Implementing animations (e.g., `framer-motion`).  

---

## 📂 **Folder Structure in Next.js 15 with RSC**
Next.js 13+ follows the **App Router (`app/`)** pattern where all components are **Server Components by default**.

```
app/
├── layout.tsx       # Root layout (Server Component)
├── page.tsx         # Home page (Server Component)
├── about/page.tsx   # About page (Server Component)
├── components/
│   ├── Navbar.tsx   # Server Component
│   ├── Button.tsx   # Client Component (interactive)
│   ├── UserList.tsx # Server Component (fetches data)
├── api/
│   ├── hello.ts     # API Route (Server Side)
```

---

## ✅ **Creating Server Components (Default Behavior)**  
- **By default, all components in `app/` are Server Components** in Next.js 13+.
- **Can fetch data directly from a database/API without client-side fetching**.

📌 **Example: Fetching Data in a Server Component**
```tsx
// app/components/Users.tsx (Server Component)
import React from "react";

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

export default async function Users() {
  const users = await fetchUsers();

  return (
    <div>
      <h2>User List (Fetched on Server)</h2>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
```
✅ **No `useEffect` needed** to fetch data.  
✅ **No extra JavaScript sent to the client**.  

---

## ✅ **Creating Client Components (`"use client"`)**
- **Client Components must be explicitly marked** using `"use client"`.
- Used for **interactivity, state, event handlers, and effects**.

📌 **Example: Client Component with State**
```tsx
// app/components/Counter.tsx
"use client"; // 👈 Marks this as a Client Component
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```
✅ Can use `useState`, `useEffect`, and event handlers.  
✅ JavaScript is **sent to the browser**, increasing bundle size.  

---

## 🎯 **Mixing Server & Client Components**
- **Client Components can import Server Components, but NOT vice versa.**  
- This allows **fetching data on the server and passing it to client components**.

📌 **Example: Hybrid Approach**
```tsx
// app/components/UserList.tsx (Server Component)
import React from "react";
import Counter from "./Counter"; // ✅ Importing a Client Component

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

export default async function UserList() {
  const users = await fetchUsers();

  return (
    <div>
      <h2>Users:</h2>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <Counter /> {/* ✅ Client Component for Interactivity */}
    </div>
  );
}
```
✅ **Users fetched on the server** (no client-side fetching).  
✅ **Counter is interactive** (uses `useState`).  

---

## 🚀 **Benefits of RSC in Next.js**
✅ **Smaller Bundle Size:** No unnecessary JavaScript is sent to the browser.  
✅ **Better Performance:** Fetch data on the server without affecting UI.  
✅ **Improved SEO:** Content is rendered before reaching the browser.  
✅ **Security:** Prevents exposing database queries or API calls to the client.  

---

## 🛑 **Limitations of Server Components**
❌ **No Client-Side State (`useState`)** → Must wrap with a Client Component.  
❌ **No Event Handlers (`onClick`, `onChange`)** → Must wrap with a Client Component.  
❌ **No `useEffect`, `useRef`, `useContext`** → Only works in Client Components.  

---

## 🔥 **Summary**
| Feature | Server Component (Default) | Client Component (`"use client"`) |
|---------|---------------------------|------------------------------|
| State (`useState`) | ❌ No | ✅ Yes |
| Event Handlers (`onClick`) | ❌ No | ✅ Yes |
| Fetch Data | ✅ Yes (Directly) | ✅ Yes (`useEffect`) |
| SEO Optimization | ✅ Yes | ❌ No |
| Bundle Size Impact | ✅ Small | 📈 Larger |

---

## 🎯 **Final Thoughts**
- Next.js **defaults to Server Components**, making it easier to **fetch data, optimize performance, and improve SEO**.  
- **Client Components** are only needed for **state, events, and interactivity**.  
- The **best approach is to mix both** → Fetch data on the server, then pass it to a Client Component for interactions.  

# 🚀 **Routing in Next.js 15 (App Router) – A Complete Guide**  

Next.js 15 uses the **App Router (`app/`)**, which is a **file-based routing system**. This makes navigation in Next.js easier and more powerful.  

---

## 🔥 **1. Understanding App Router in Next.js 15**
- The **App Router (`app/`)** replaces the old **Pages Router (`pages/`)**.  
- Routing is based on the **file structure** inside the `app/` directory.  
- Every file named **`page.tsx` or `page.jsx`** automatically becomes a **route**.  
- **Nested directories** create **nested routes**.  

📌 **Example Folder Structure**:
```
app/
├── layout.tsx     # Root Layout (Shared UI)
├── page.tsx       # Home Page → "/"
├── about/
│   ├── page.tsx   # About Page → "/about"
├── blog/
│   ├── page.tsx   # Blog Page → "/blog"
│   ├── [id]/      # Dynamic Route
│   │   ├── page.tsx # Blog Post → "/blog/:id"
├── dashboard/
│   ├── layout.tsx # Dashboard Layout
│   ├── page.tsx   # Dashboard Home → "/dashboard"
│   ├── settings/
│   │   ├── page.tsx # Dashboard Settings → "/dashboard/settings"
```

✅ **Each `page.tsx` represents a route**  
✅ **Folders represent URL structure**  
✅ **Dynamic routing (`[id]`) is supported**  

---

## 🔥 **2. Creating Routes in Next.js 15**
Routes in Next.js 15 are defined using `page.tsx` inside folders.

📌 **Example: Home Page (`/`)**
```tsx
// app/page.tsx
export default function HomePage() {
  return <h1>Welcome to Next.js 15!</h1>;
}
```

📌 **Example: About Page (`/about`)**
```tsx
// app/about/page.tsx
export default function AboutPage() {
  return <h1>About Us</h1>;
}
```
✅ **Simple, file-based routing without extra configuration**  

---

## 🔥 **3. Nested Routes & Layouts**
Next.js 15 allows us to **share layouts** between multiple pages using `layout.tsx`.

📌 **Example: Shared Layout for Dashboard**
```
app/
├── dashboard/
│   ├── layout.tsx  # Shared layout for dashboard
│   ├── page.tsx    # "/dashboard"
│   ├── settings/
│   │   ├── page.tsx # "/dashboard/settings"
```

📌 **dashboard/layout.tsx**
```tsx
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>Dashboard Navbar</nav>
      <main>{children}</main>
    </div>
  );
}
```
📌 **dashboard/page.tsx**
```tsx
export default function DashboardPage() {
  return <h1>Dashboard Home</h1>;
}
```
📌 **dashboard/settings/page.tsx**
```tsx
export default function DashboardSettings() {
  return <h1>Dashboard Settings</h1>;
}
```
✅ **Navbar will persist across all dashboard pages**  
✅ **Shared layouts improve code reuse**  

---

## 🔥 **4. Dynamic Routes (`[id]`)**
We can create **dynamic routes** by wrapping a folder name in **square brackets `[ ]`**.

📌 **Example: Blog Post Route (`/blog/:id`)**
```
app/
├── blog/
│   ├── [id]/  # Dynamic Route
│   │   ├── page.tsx
```
📌 **blog/[id]/page.tsx**
```tsx
export default function BlogPost({ params }: { params: { id: string } }) {
  return <h1>Blog Post ID: {params.id}</h1>;
}
```
✅ Access dynamic **parameters** using `{ params.id }`  
✅ `/blog/1` → Shows "Blog Post ID: 1"  
✅ `/blog/nextjs` → Shows "Blog Post ID: nextjs"  

---

## 🔥 **5. Catch-All Routes (`[[...slug]]`)**
If we need a **route that matches multiple segments**, use `[[...slug]]`.

📌 **Example: Catch-All Route**
```
app/
├── docs/
│   ├── [[...slug]]/
│   │   ├── page.tsx
```
📌 **docs/[[...slug]]/page.tsx**
```tsx
export default function DocsPage({ params }: { params: { slug?: string[] } }) {
  return <h1>Docs: {params.slug ? params.slug.join("/") : "Home"}</h1>;
}
```
✅ `/docs/` → "Docs: Home"  
✅ `/docs/nextjs/15` → "Docs: nextjs/15"  

---

## 🔥 **6. Navigating Between Pages (`next/link`)**
Use **`next/link`** for client-side navigation.

📌 **Example: Navbar with Links**
```tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog/1">Blog Post 1</Link>
    </nav>
  );
}
```
✅ **Fast navigation without page reloads**  

---

## 🔥 **7. API Routes (`app/api/`)**
We can create **API routes** directly inside the `app/api/` folder.

📌 **Example: API Route (`/api/hello`)**
```
app/
├── api/
│   ├── hello/
│   │   ├── route.ts
```
📌 **api/hello/route.ts**
```ts
export async function GET() {
  return new Response(JSON.stringify({ message: "Hello from API!" }), {
    headers: { "Content-Type": "application/json" },
  });
}
```
✅ Visit `/api/hello` to get `{ "message": "Hello from API!" }`  

---

## 🔥 **8. Middleware (`middleware.ts`)**
Middleware allows us to **modify requests before they reach a route**.

📌 **Example: Redirect `/old` to `/new`**
```ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/old") {
    return NextResponse.redirect(new URL("/new", request.url));
  }
}
```
✅ **Used for authentication, redirects, logging, etc.**  

---

## 🎯 **Summary**
| Feature | App Router (Next.js 15) |
|---------|-------------------------|
| **Routing Type** | File-based routing |
| **Nested Routes** | ✅ Yes |
| **Dynamic Routes (`[id]`)** | ✅ Yes |
| **API Routes (`app/api/`)** | ✅ Yes |
| **Middleware** | ✅ Yes |
| **Layouts** | ✅ Yes |
| **Navigation (`next/link`)** | ✅ Yes |

---

## 🚀 **Final Thoughts**
- Next.js 15 **automatically creates routes** based on the `app/` directory.  
- **Layouts** make it easy to **reuse UI** across multiple pages.  
- **Dynamic routes** allow flexible URL handling (`/blog/:id`).  
- **API routes** can handle backend logic without needing a separate server.  
- **Client-side navigation** (`next/link`) ensures fast performance.  

# 🚀 **Catch-All Segments in Next.js 15 (App Router)**
Catch-all segments in Next.js 15 allow us to **capture multiple URL segments** in a **single dynamic route**. This is useful for handling flexible or deeply nested paths without defining each one manually.

---

## 🔥 **1. Syntax: Using `[...]` for Catch-All Segments**
To create a catch-all route, we wrap a folder name inside **square brackets with three dots** (`[...]`).

📌 **Example: Catch-All Route (`/docs/*`)**
```
app/
├── docs/
│   ├── [...slug]/
│   │   ├── page.tsx
```
📌 **app/docs/[...slug]/page.tsx**
```tsx
export default function DocsPage({ params }: { params: { slug?: string[] } }) {
  return <h1>Docs Path: {params.slug ? params.slug.join("/") : "Home"}</h1>;
}
```

✅ **Routes and Their Outputs**  
| URL | `params.slug` | Output |
|-----|-------------|--------|
| `/docs` | `undefined` | Docs Path: Home |
| `/docs/nextjs` | `["nextjs"]` | Docs Path: nextjs |
| `/docs/nextjs/15` | `["nextjs", "15"]` | Docs Path: nextjs/15 |
| `/docs/nextjs/15/features` | `["nextjs", "15", "features"]` | Docs Path: nextjs/15/features |

🔹 **`params.slug` will always be an array of strings**, representing the URL segments.

---

## 🔥 **2. Optional Catch-All Segments (`[[...slug]]`)**
If we want the route to **match even when no segments are provided**, we use **double square brackets** (`[[...slug]]`).

📌 **Example: Handling `/docs` as well**
```
app/
├── docs/
│   ├── [[...slug]]/
│   │   ├── page.tsx
```
📌 **app/docs/[[...slug]]/page.tsx**
```tsx
export default function DocsPage({ params }: { params: { slug?: string[] } }) {
  return <h1>Docs: {params.slug ? params.slug.join("/") : "Home"}</h1>;
}
```

✅ **Difference Between `[...]` and `[[...]]`**
| URL | `[...]` (Required) | `[[...]]` (Optional) |
|-----|--------------------|----------------------|
| `/docs` | ❌ **404 Error** | ✅ "Docs: Home" |
| `/docs/nextjs` | ✅ "Docs: nextjs" | ✅ "Docs: nextjs" |

🔹 Use `[[...slug]]` when the route should work **without extra segments**.

---

## 🔥 **3. Real-World Example: Breadcrumb Navigation**
We can use catch-all segments to generate **breadcrumbs** dynamically.

📌 **Example: Breadcrumb Component**
```tsx
export default function Breadcrumbs({ params }: { params: { slug?: string[] } }) {
  const path = params.slug || [];

  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        {path.map((segment, index) => {
          const href = "/" + path.slice(0, index + 1).join("/");
          return <li key={href}><a href={href}>{segment}</a></li>;
        })}
      </ul>
    </nav>
  );
}
```

✅ **Visiting `/docs/nextjs/15` shows:**
```
Home > docs > nextjs > 15
```

---

## 🎯 **Summary**
| Feature | `[...]` (Required) | `[[...]]` (Optional) |
|---------|--------------------|----------------------|
| Captures multiple segments | ✅ Yes | ✅ Yes |
| Works without segments (`/docs`) | ❌ No (404) | ✅ Yes |
| Returns `params.slug` as an array | ✅ Yes | ✅ Yes |

📌 **Use cases:**
- **Dynamic documentation pages (`/docs/[...slug]`)**
- **E-commerce categories (`/products/[...category]`)**
- **Breadcrumb navigation**
- **URL rewriting and redirection handling**

# 🚀 **Different Ways to Implement a `notFound` Error Page in Next.js 15**  
In Next.js 15 (App Router), we can implement custom **404 Not Found** error pages in different ways, depending on the context. Let's go through each approach in detail.  

---

## 🔥 **1. Global `not-found.tsx` for a Custom 404 Page**  
If a user visits a non-existing route, we can create a global `not-found.tsx` inside the `app` directory.  

📌 **Example: `app/not-found.tsx`**  
```tsx
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-lg mt-4">Sorry, we couldn’t find the page you’re looking for.</p>
      <a href="/" className="mt-6 px-4 py-2 bg-blue-600 text-white rounded">Go Home</a>
    </div>
  );
}
```
✅ **When is this triggered?**  
- If the user visits a route that **does not exist** (`/random-page` → 404).  
- **Works automatically** when a page is not found.  

---

## 🔥 **2. Programmatically Triggering a 404 Error Inside a Page**  
We can use Next.js’s built-in `notFound()` function inside a route to **conditionally trigger a 404 page**.

📌 **Example: `app/products/[id]/page.tsx`**
```tsx
import { notFound } from "next/navigation";

export default function ProductPage({ params }: { params: { id: string } }) {
  const validProducts = ["101", "102", "103"]; // Fake product list
  if (!validProducts.includes(params.id)) {
    notFound(); // Triggers the 404 page
  }

  return <h1>Product ID: {params.id}</h1>;
}
```
✅ **When is this triggered?**  
- If the user visits `/products/999` (an invalid product), it will **redirect them to the 404 page**.

---

## 🔥 **3. Handling 404 Errors in Fetch Requests (Server Components Only)**  
If we are fetching data from an API, we can **return `notFound()` when no data exists**.

📌 **Example: Fetching user data from an API**
```tsx
import { notFound } from "next/navigation";

async function getUser(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    notFound(); // Redirects to the 404 page if user is not found
  }
  return res.json();
}

export default async function UserPage({ params }: { params: { id: string } }) {
  const user = await getUser(params.id);
  return <h1>User: {user.name}</h1>;
}
```
✅ **When is this triggered?**  
- If we visit `/users/999` and the API **returns a 404**, it will automatically show our **custom 404 page**.

---

## 🔥 **4. Custom 404 Handling in Layouts (Not Recommended)**  
We can also **handle 404 pages inside layouts** by checking the route params, but this is **not recommended** because it might cause unwanted redirects.

📌 **Example: `app/products/layout.tsx`**
```tsx
import { notFound } from "next/navigation";

export default function ProductLayout({ children, params }: { children: React.ReactNode, params: { id: string } }) {
  const validProducts = ["101", "102", "103"];
  if (!validProducts.includes(params.id)) {
    notFound();
  }

  return <>{children}</>;
}
```
✅ **When is this triggered?**  
- If a product is invalid, it **redirects all subpages (`/products/999`) to 404**.

---

## 🎯 **Summary Table**
| Method | Use Case | Example |
|--------|---------|---------|
| **Global `not-found.tsx`** | Shows a global 404 page for non-existing routes | `app/not-found.tsx` |
| **`notFound()` inside a page** | Conditionally show 404 when data is missing | `app/products/[id]/page.tsx` |
| **API-based 404 Handling** | If an API request fails, trigger `notFound()` | Fetching user/product data |
| **404 in Layouts (Not Recommended)** | Handling 404 inside layouts for groups of pages | `app/products/layout.tsx` |

---

### 🚀 **Which One Should You Use?**
✅ **Use `not-found.tsx`** → For a **global 404 page**.  
✅ **Use `notFound()` in pages** → When handling **dynamic routes or data fetching errors**.  
✅ **Use API-based 404 Handling** → When fetching **external data** and the resource is missing.  

# 🔥 **`usePathname` Hook in Next.js 15**  

### 📌 **What is `usePathname`?**  
`usePathname` is a **React Server Component (RSC) hook** in Next.js 15 that lets us access the **current URL path** in a client component. It’s useful when we need to:  
✅ Show active navigation styles  
✅ Conditionally render UI based on the route  
✅ Generate breadcrumbs  
✅ Perform analytics or logging  

📌 **Importing `usePathname`**
```tsx
import { usePathname } from "next/navigation";
```

---

## 🚀 **1. Basic Usage: Display Current Path**  
We can use `usePathname` to **get the current URL path** and display it in our component.

📌 **Example: `components/CurrentPath.tsx`**
```tsx
"use client"; // Required for usePathname

import { usePathname } from "next/navigation";

export default function CurrentPath() {
  const pathname = usePathname();

  return (
    <div>
      <h1>Current Path: {pathname}</h1>
    </div>
  );
}
```
✅ **Visiting `/about` will display:**  
```
Current Path: /about
```

---

## 🚀 **2. Highlight Active Navigation Link**  
We can use `usePathname` to apply **active styles** to the current page link.

📌 **Example: `components/Navbar.tsx`**
```tsx
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex space-x-4">
      {["/", "/about", "/contact"].map((path) => (
        <Link
          key={path}
          href={path}
          className={`px-4 py-2 ${
            pathname === path ? "bg-blue-500 text-white" : "text-gray-700"
          }`}
        >
          {path === "/" ? "Home" : path.replace("/", "").toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
```
✅ **If we visit `/about`, the About link is highlighted.**  
```
[ Home ]  [ ABOUT ]  [ Contact ]
```
🔹 **Only the active link gets the blue background.**

---

## 🚀 **3. Breadcrumb Navigation Using `usePathname`**
We can use `usePathname` to generate **breadcrumb links** dynamically.

📌 **Example: `components/Breadcrumbs.tsx`**
```tsx
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <nav className="mt-4">
      <ul className="flex space-x-2">
        <li><Link href="/">Home</Link></li>
        {pathSegments.map((segment, index) => {
          const href = "/" + pathSegments.slice(0, index + 1).join("/");
          return (
            <li key={href}>
              / <Link href={href} className="text-blue-500">{segment}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
```
✅ **Visiting `/docs/nextjs/hooks` generates:**  
```
Home / docs / nextjs / hooks
```

---

## 🚀 **4. Redirect Users Based on Pathname**  
We can use `usePathname` with `useEffect` to **redirect users** under certain conditions.

📌 **Example: Redirect to login if not authenticated**
```tsx
"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthRedirect() {
  const pathname = usePathname();
  const router = useRouter();
  const isAuthenticated = false; // Assume user is not logged in

  useEffect(() => {
    if (!isAuthenticated && pathname !== "/login") {
      router.push("/login");
    }
  }, [pathname]);

  return null;
}
```
✅ **If the user is not logged in and tries to visit `/dashboard`, they will be redirected to `/login`.**

---

## 🎯 **Summary Table**
| Feature | Use Case | Example |
|---------|---------|---------|
| **Get Current Path** | Show path in UI | `usePathname()` |
| **Highlight Active Link** | Change nav styles | Navbar component |
| **Breadcrumbs** | Generate links from URL | `/docs/nextjs/hooks → docs > nextjs > hooks` |
| **Redirect Users** | Protect routes | Redirect to `/login` if not authenticated |

---

## 🚀 **Final Thoughts**
- ✅ **Use `usePathname` in client components** (`"use client"` is required).  
- ✅ **It works well for UI-based logic** (menus, breadcrumbs, redirects).  
- ❌ **Don’t use it inside Server Components**, since it only works in client-side rendering.