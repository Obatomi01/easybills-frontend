import { cookies } from 'next/headers';

export async function GET(request: Request) {
  cookies().delete('isLoggedIn');
  cookies().delete('token');

  return new Response('Cookies Updated', {
    status: 201,
  });
}
