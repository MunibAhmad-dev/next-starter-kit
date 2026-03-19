// Import the validated env object instead of using process.env directly
import { env } from "@/env"; 

export async function createCustomer(email: string) {
  // Use env.LAGO_URL and env.LAGO_API_KEY
  const res = await fetch(`${env.LAGO_URL}/api/v1/customers`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.LAGO_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      customer: { 
        external_id: email,
        email: email,
      },
    }),
  });

  return res.json();
}