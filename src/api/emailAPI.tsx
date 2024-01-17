import { IEmailForm } from "../components/EmailForm/interface";

export async function sendEmail(data: IEmailForm) {
  try {
    const response = await fetch(
      "https://mytest.free.beeceptor.com/send-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data.email }),
      }
    );

    if (!response.ok) {
      throw new Error("Email sending failed");
    }

    return response;
  } catch (error) {
    throw console.error(error);;
  }
}
