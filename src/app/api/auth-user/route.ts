import { cookies } from 'next/headers';

export async function GET(request: Request) {
  const isLoggedIn = cookies().get('isLoggedIn');
  const token = cookies().get('token');

  return Response.json({
    isLoggesdIn: isLoggedIn?.value,
    token: token?.value,
  });
}
