import { headers } from 'next/headers';

export const serverOrigin = () => {
  const headersList = headers();
  const protocol = headersList.get('x-forwarded-proto') || 'http'; // fallback to http if protocol is missing
  const host = headersList.get('host');

  return `${protocol}://${host}`;
};
