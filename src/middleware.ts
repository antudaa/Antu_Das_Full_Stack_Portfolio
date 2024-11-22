import { NextResponse, NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";

// Public routes that do not require authentication
const PUBLIC_ROUTES = ["/auth"];

// Middleware to handle authentication and role-based routing
export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Retrieve the refresh token from cookies
    const accessToken = request.cookies.get("refreshToken");

    // Initialize user data
    let user: { role: string; userId: string } | null = null;

    // Decode the token to extract user info if available
    if (accessToken) {
        try {
            user = jwtDecode<{ role: string; userId: string }>(accessToken.value);
        } catch (error) {
            console.error("Error decoding access token:", error);
        }
    }

    // Check if the current route is public
    const isPublicRoute = PUBLIC_ROUTES.includes(pathname);

    // Handle unauthenticated users
    if (!user) {
        if (isPublicRoute) {
            // Allow access to public routes
            return NextResponse.next();
        }
        // Redirect unauthenticated users to the login page
        return NextResponse.redirect(new URL("/auth", request.url));
    }

    // Handle authenticated users trying to access public routes
    if (user && isPublicRoute) {
        // Redirect authenticated users away from public routes to the dashboard
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    // Allow access to authenticated users on protected routes
    return NextResponse.next();
}

// Middleware configuration to apply to specific routes
export const config = {
    matcher: ["/dashboard/:path*", "/auth/:path*"], // Match both protected and public routes
};
