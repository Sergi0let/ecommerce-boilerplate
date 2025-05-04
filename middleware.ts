import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Отримуємо значення з cookie, або "light" по замовчуванню
  const theme = request.cookies.get("theme")?.value || "light";

  const response = NextResponse.next();
  // Прокидаємо тему в заголовки відповіді
  response.headers.set("x-theme", theme);

  return response;
}

export const config = {
  matcher: "/:path*", // Застосуємо до всіх сторінок
};
