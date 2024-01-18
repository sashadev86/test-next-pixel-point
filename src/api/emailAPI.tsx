import { IEmailForm } from "../components/shared/EmailForm/interface";

export async function sendEmail(data: IEmailForm) {
  const URLS = {
    myTest: "https://mytest.free.beeceptor.com",
    sendEmail: "/send-email",
  };

  try {
    const response = await fetch(`${URLS.myTest}${URLS.sendEmail}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: data.email }),
    });

    if (!response.ok) {
      throw new Error("Email sending failed");
    }

    return response;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        `An error occurred when sending an email: ${error.message}`
      );
    } else {
      throw new Error(`An unknown error occurred while sending the email`);
    }
  }
}
