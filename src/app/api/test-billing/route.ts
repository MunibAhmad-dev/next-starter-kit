import { createCustomer } from "@/modules/billing/lago";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Using a dummy email to test the Docker connection
    const data = await createCustomer("test-user@example.com");
    
    return NextResponse.json({ 
      message: "Connection to Lago successful!", 
      lagoResponse: data 
    });
  } catch (error: any) {
  console.error("LAGO CONNECTION ERROR:", error.message); // Check your VS Code terminal!
  return NextResponse.json({ 
    message: "Failed to connect to Lago", 
    error: error.message || "Unknown Error" 
  }, { status: 500 });
}
}