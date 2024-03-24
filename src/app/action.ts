'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export async function navigateUser(val: any) {
  cookies().set('isLoggedIn', 'true');
  cookies().set('token', val.token);

  redirect('/dashboard');
}

// export async function deleteUserCookies() {
//   cookies().delete('firstName');
//   cookies().delete('lastName');
//   cookies().delete('isLoggedIn');
// }
