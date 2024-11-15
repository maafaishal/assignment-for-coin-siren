import { mainData } from '@/data/main';

// Routes
export async function GET() {
  return Response.json(mainData);
}
