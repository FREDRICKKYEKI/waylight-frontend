// src/pages/api/v1/forms/contact-us.ts
import type { APIRoute } from "astro";
import { client } from "../../../../lib/sanity";

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.text();
    const params = new URLSearchParams(body);
    const name = params.get("name");
    const email = params.get("email");
    const message = params.get("message");

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        {
          status: 400,
        },
      );
    }

    // Save to Sanity
    const doc = {
      _type: "contactSubmission",
      name,
      email,
      message,
      submittedAt: new Date().toISOString(),
    };

    await client.create(doc);
    // return redirect response to same page ("/contact-us?success=true")
    return new Response(
      JSON.stringify({ success: true, message: "Submission successful." }),
      {
        status: 303,
        headers: {
          "Content-Type": "application/json",
          Location: "/contact-us?success=true",
        },
      },
    );
    // return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ status: "error", message: err }), {
      status: 500,
    });
  }
};
