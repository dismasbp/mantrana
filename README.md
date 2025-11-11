# 🏢 Mantrana — Company Profile Website

A modern company profile website built with Laravel 12 and React.js using Inertia.js.  
Mantrana showcases company information, services, and portfolio in a responsive, minimal design powered by Tailwind CSS.

---

## 🧠 Tech Stack

**Frontend:**
- React.js *(from Laravel Starter Kit, likely React 18)*  
- Inertia.js  
- Tailwind CSS

**Backend:**
- Laravel 12 (PHP 8.2.0)
- MySQL Database

**Server:**
- Apache

---

## ⚙️ Installation

```bash
# Clone repository
git clone https://github.com/dismasbp/mantrana.git

cd mantrana

# Install backend dependencies
composer install

# Install frontend dependencies
npm install

# Copy environment file
cp .env.example .env

# Generate app key
php artisan key:generate

# Set up database
php artisan migrate --seed

# Run local servers
php artisan serve
npm run dev
