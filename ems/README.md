# Employee Management System (EMS)

A web-based Employee Management System built with React and Vite. This application allows administrators to manage employees and their tasks, while employees can view and update their assigned tasks.

## Features
- Admin and Employee login
- Admin can create and assign tasks to employees
- Employees can view, accept, and update the status of their tasks
- Task status tracking: New, Active, Completed, Failed
- Dashboard views for both Admin and Employees
- Persistent data using localStorage

## Getting Started

### Prerequisites
- Node.js (v14 or above)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd ems
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) to view the app.

## Usage
- **Admin Login:**
  - Email: `admin@me.com`
  - Password: `123`
- **Employee Login:**
  - Use one of the employee emails and password `123` (see `src/utils/localStorage.tsx` for sample users)

## Project Structure
- `src/components/` - React components (Auth, Dashboard, TaskList, etc.)
- `src/context/` - Context providers (authentication, user data)
- `src/utils/` - Utility functions (localStorage management)

## Customization
- To add more employees or tasks, edit `src/utils/localStorage.tsx`.

## License
This project is for educational/demo purposes.
