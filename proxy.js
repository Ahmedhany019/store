// middleware.js
import { NextResponse } from 'next/server'

export function proxy(request) {
  const token = true
  
  if (!token && request.nextUrl.pathname.startsWith('/')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  
  if (token && request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL('/', request.url))
  }
  
  return NextResponse.next()
}

// تحديد المسارات التي سيتم تطبيق الـ middleware عليها
export const config = {
  matcher: ["/:path"]
}