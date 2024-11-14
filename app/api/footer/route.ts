import { footerData } from '@/data/footer';

// Routes
export async function GET() {
  return Response.json(footerData);
}
