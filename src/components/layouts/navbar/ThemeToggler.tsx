"use client";

import { useEffect, useState } from "react";

const ThemeToggler = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Отримуємо поточну тему з cookie або за замовчуванням "light"
    const savedTheme = document.cookie
      .split("; ")
      .find((row) => row.startsWith("theme="))
      ?.split("=")[1];

    if (savedTheme) {
      setTheme(savedTheme === "dark" ? "dark" : "light");
    } else {
      // якщо cookie не існує, можна вибрати початкову тему
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    // Оновлюємо cookie для збереження теми
    document.cookie = `theme=${newTheme}; path=/; max-age=31536000`;

    // Зміна класу на клієнті без перезавантаження
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    setTheme(newTheme); // Оновлюємо стан на клієнті
  };

  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
        className="peer sr-only"
      />
      <div className="h-10 w-20 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 transition-all duration-500 peer-checked:from-blue-400 peer-checked:to-indigo-500 after:absolute after:top-1 after:left-1 after:flex after:h-8 after:w-8 after:items-center after:justify-center after:rounded-full after:bg-white after:text-lg after:shadow-md after:transition-all after:duration-500 after:content-['☀️'] peer-checked:after:translate-x-10 peer-checked:after:content-['🌙']" />
    </label>
  );
};

export default ThemeToggler;
