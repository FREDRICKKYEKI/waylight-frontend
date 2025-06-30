// src/pages/api/v1/forms/getQuote.ts
import type { APIRoute } from "astro";
import { client } from "../../../../lib/sanity";
import { sub } from "date-fns";

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.text();
    const params = new URLSearchParams(body);
    /**Example of expected form data:
     * {
     *  "fullName": "Fredrick Kyeki",
     *  "phone": "xxxxxx",
     *  "email": "xxxxx",
     *  "location": "xxxx",
     *  "propertyType": "Residential",
     *  "carCapacity": "3",
     *  "additionalInfo": "sdvcsdvsd",
     *  "shadeType": "Cantilever",
     *  "contactMethod": "Call"
     * }
     */
    const fullName = params.get("fullName");
    const phone = params.get("phone");
    const email = params.get("email");
    const location = params.get("location");
    const propertyType = params.get("propertyType");
    const carCapacity = params.get("carCapacity");
    const additionalInfo = params.get("additionalInfo");
    const shadeType = params.getAll("shadeType");
    const contactMethod = params.get("contactMethod");

    // Save to Sanity
    const doc = {
      _type: "getQuoteForm",
      fullName,
      phoneNumber: phone,
      email,
      location,
      propertyType,
      numberOfCarsToCover: carCapacity, // Ensure carCapacity is a number
      additionalDetails: additionalInfo,
      typeOfShade: shadeType.join(", "), // Join array into a string
      preferredContactMethod: contactMethod,
      submittedAt: new Date().toISOString(),
    };

    await client.create(doc);
    // Return a redirect response to the same page with a success query parameter

    return new Response(
      JSON.stringify({ success: true, message: "Submission successful." }),
      {
        status: 303,
        headers: {
          "Content-Type": "application/json",
          Location: "/get-quote?success=true",
        },
      },
    );
  } catch (error) {
    console.error("Error processing form submission:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
