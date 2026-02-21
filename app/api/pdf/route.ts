import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const filename = searchParams.get('file');

  if (!filename) {
    return new NextResponse('File parameter is required', { status: 400 });
  }

  // Разрешенные файлы прайса
  const allowedFiles = [
    'cake-price-ukr.pdf',
    'cake-price-rus.pdf',
    'cake-price-en.pdf',
    'cake-price-esp.pdf',
  ];

  if (!allowedFiles.includes(filename)) {
    return new NextResponse('File not found', { status: 404 });
  }

  try {
    const filePath = path.join(process.cwd(), 'public', filename);
    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    return new NextResponse('File not found', { status: 404 });
  }
}
