import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const allowedOrigins = process.env.NEXT_PUBLIC_ALLOWED_ORIGINS
	? process.env.NEXT_PUBLIC_ALLOWED_ORIGINS.split(',')
	: [];

export function middleware(request: NextRequest) {
	const origin = request.headers.get('origin');
	const isAllowedOrigin = origin && allowedOrigins.includes(origin);

	// Handle preflight OPTIONS request
	if (request.method === 'OPTIONS' && isAllowedOrigin) {
		const response = new NextResponse(null, { status: 204 });
		response.headers.set('Access-Control-Allow-Origin', origin!);
		response.headers.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
		response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
		response.headers.set('Access-Control-Allow-Credentials', 'true');
		return response;
	}

	const response = NextResponse.next();
	if (isAllowedOrigin) {
		response.headers.set('Access-Control-Allow-Origin', origin!);
		response.headers.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
		response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
		response.headers.set('Access-Control-Allow-Credentials', 'true');
	}
	return response;
}

export const config = {
	matcher: '/api/:path*',
};
