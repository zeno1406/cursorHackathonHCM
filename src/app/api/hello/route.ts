import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'Welcome to Cursor Hackathon HCM API!',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    endpoints: {
      hello: '/api/hello',
    },
  });
}
