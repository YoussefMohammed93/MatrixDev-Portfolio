import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Define the contact form schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();

    // Validate the request body against the schema
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      // Return validation errors
      return NextResponse.json(
        { success: false, errors: result.error.format() },
        { status: 400 }
      );
    }

    // In a real application, you would send an email here
    // For now, we'll just simulate a successful submission

    // Simulate a delay to mimic sending an email
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Return a success response
    return NextResponse.json(
      {
        success: true,
        message:
          "Your message has been sent successfully! I'll get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);

    // Return a server error response
    return NextResponse.json(
      {
        success: false,
        message:
          "There was an error sending your message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
