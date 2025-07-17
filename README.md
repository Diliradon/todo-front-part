# Todo App - React + Electron

A modern, feature-rich Todo application built with React and Electron, featuring a beautiful dark-themed UI with animated WebGL background effects.

## ✨ Features

- **CRUD Operations**: Create, read, update, and delete todos
- **Todo Filtering**: Filter todos by status (completed/pending)
- **Form Validation**: Robust form handling with validation
- **Dark Theme**: Beautiful dark theme with animated WebGL background [[memory:3524319]]
- **Desktop App**: Cross-platform desktop application via Electron
- **Responsive Design**: Optimized for different screen sizes
- **Real-time Updates**: State management with optimistic updates

## 🛠️ Technologies

### Frontend
- **React 19.1.0** - UI library with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

### State Management & Data Fetching
- **TanStack Query (React Query)** - Server state management
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **Axios** - HTTP client

### UI Components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Custom UI Components** - shadcn/ui style component library

### Graphics & Animations
- **OGL** - WebGL library for background effects
- **Custom Shaders** - GLSL shaders for animated backgrounds

### Desktop
- **Electron** - Cross-platform desktop application
- **Electron Builder** - Application packaging

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Concurrently** - Run multiple commands
- **Cross-env** - Cross-platform environment variables

## 📁 Project Structure

```
src/
├── entities/todos/          # Todo business logic
│   ├── api.ts              # API functions
│   ├── api.types.ts        # TypeScript types
│   └── index.ts            # Exports
├── pages/todo-page/         # Main todo page
│   ├── ui/                 # Page-specific components
│   │   ├── create-todo.tsx # Todo creation form
│   │   ├── filter-todo.tsx # Todo filtering
│   │   └── todo-list.tsx   # Todo list display
│   └── todo-page.tsx       # Main page component
├── shared/                  # Shared utilities and components
│   ├── api/queries/todos/   # React Query hooks
│   ├── lib/                # Utility libraries
│   ├── providers/          # React providers
│   └── ui/                 # Reusable UI components
└── App.tsx                 # Main application component
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd todo-front-part
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory:
   ```env
   VITE_API_URL=http://localhost:3001
   ```

### Development

#### Web Development
```bash
npm run start-vite
```
This starts the Vite development server at `http://localhost:5173`

#### Electron Development
```bash
npm run dev
```
This concurrently starts both the Vite dev server and Electron app

#### Individual Commands
- **Vite only**: `npm run start-vite`
- **Electron only**: `npm run start-electron`

### Building

#### Web Build
```bash
npm run build
```
Creates optimized production build in `dist/` folder

#### Electron Distribution
```bash
npm run dist
```
Builds and packages the Electron app for distribution

### Other Scripts

- **Linting**: `npm run lint`
- **Preview**: `npm run preview` - Preview production build locally

## 🎨 UI Components

The application uses a custom component library built on top of Radix UI primitives:

- **Button** - Various button variants and sizes
- **Card** - Container components
- **Form** - Form components with validation
- **Input/Textarea** - Form input fields
- **Toggle/Toggle Group** - Toggle button components
- **Dark Veil** - Animated WebGL background component

## 📡 API Integration

The app expects a REST API with the following endpoints:

### Todo Endpoints
- `GET /api/todos` - Fetch all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo

### Todo Data Structure
```typescript
type Todo = {
  id: number;
  title: string;
  completed: boolean;
  description: string;
  createdAt: string;
  updatedAt: string;
};
```

## ⚙️ Configuration

### Environment Variables
- `VITE_API_URL` - Backend API base URL

### Build Configuration
- **Vite Config**: `vite.config.js`
- **TailwindCSS**: `tailwind.config.js`
- **TypeScript**: `tsconfig.json`
- **ESLint**: `eslint.config.js`
- **Electron Builder**: Configured in `package.json`

## 🎯 Development Guidelines

1. **Component Organization**: Follow the feature-based structure
2. **Type Safety**: Use TypeScript for all components and APIs
3. **State Management**: Use React Query for server state, React Hook Form for form state
4. **Styling**: Use TailwindCSS utility classes
5. **Icons**: Use Lucide React icons consistently
6. **Validation**: Use Zod schemas for form validation

## 📱 Desktop App Features

- **Window Size**: 800x600 default
- **Security**: Context isolation enabled, node integration disabled
- **Platform Support**: Windows, macOS, Linux
- **Auto-updater**: Ready for implementation with electron-builder

## 🤝 Contributing

1. Follow the existing code style and patterns
2. Use TypeScript for type safety
3. Write meaningful commit messages
4. Test your changes in both web and Electron environments

## 📄 License

This project is private and not open source.
