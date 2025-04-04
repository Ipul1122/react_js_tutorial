PROJECT BELAJAR REACT JS SEDERHANA

Dokumentasi Pembelajaran React.js

1. Pengenalan React.js
React.js adalah library JavaScript yang digunakan untuk membangun antarmuka pengguna (UI) yang dinamis dan interaktif. React bersifat declarative, component-based, dan menggunakan Virtual DOM untuk meningkatkan performa rendering.
Konsep Utama React:

1.1 Component: Blok penyusun UI yang dapat digunakan kembali.

1.2 Props (Properties): Data yang dikirim dari parent component ke child component.

1.3 State: Data internal dalam komponen yang dapat berubah seiring waktu.

1.4 Hooks: Fungsi khusus di React untuk menggunakan state dan fitur React lainnya tanpa membuat class.

==========================================================================
2. State dan Lifecycle dengan useState & useEffect

2.1 useState
Digunakan untuk mengelola state di dalam komponen fungsional.

Contoh Penggunaan useState:

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Jumlah: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  );
} 

2.2 useEffect

Digunakan untuk menjalankan efek samping seperti mengambil data, berinteraksi dengan API, atau mengatur event listener.

Contoh Penggunaan useEffect:

import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return <p>Waktu: {time} detik</p>;
}
============================================================================
3. Manajemen Navigasi dengan React Router

React Router digunakan untuk mengelola navigasi dalam aplikasi React.
3.1 Instal React Router
npm install react-router-dom
3.2 Gunakan BrowserRouter, Routes, dan Route dalam App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
} 
======================================================================
4. Styling di React: TailwindCSS

TailwindCSS adalah framework CSS berbasis utility-first yang memudahkan styling komponen.
4.1 Instalasi TailwindCSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

4.2 Konfigurasi Tailwind di tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
}; 

4.3 Contoh Penggunaan TailwindCSS di Komponen
function Button() {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Klik Saya
    </button>
  );
}
======================================================================
5. Membuat Navbar yang Responsif dengan TailwindCSS
Navbar harus dapat menyesuaikan tampilan untuk desktop, tablet, dan mobile.

Struktur File Navbar

📂 src/components/Navbar.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-yellow-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold">REACT JS</h1>

        {/* Tombol Hamburger */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="text-white">Home</Link></li>
          <li><Link to="/fetch" className="text-white">Fetch API</Link></li>
          <li><Link to="/axios" className="text-white">Axios API</Link></li>
        </ul>

        {/* Menu Mobile */}
        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-yellow-600 p-4 space-y-2 md:hidden">
            <li><Link to="/" className="text-white block">Home</Link></li>
            <li><Link to="/fetch" className="text-white block">Fetch API</Link></li>
            <li><Link to="/axios" className="text-white block">Axios API</Link></li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;


