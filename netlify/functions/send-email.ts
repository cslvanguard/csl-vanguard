import type { Handler } from "@netlify/functions";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { name, email, company, service, budget, message } = JSON.parse(
      event.body || "{}",
    );

    const { data, error } = await resend.emails.send({
      from: "Potential CSL Vanguard Client <hello@cslvanguard.com>", // change after verifying your domain
      to: "hello@cslvanguard.com",
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
      
      <!-- Header -->
      <div style="background: #0f172a; padding: 32px; text-align: center; border-radius: 8px 8px 0 0;">
        <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.5px;">
          CSL Vanguard
        </h1>
        <p style="color: #94a3b8; margin: 6px 0 0; font-size: 13px;">New Contact Form Submission</p>
      </div>

      <!-- Body -->
      <div style="padding: 32px; background: #f8fafc; border: 1px solid #e2e8f0;">

        <p style="margin: 0 0 24px; font-size: 15px; color: #334155;">
          You have a new message from <strong>${name}</strong>.
        </p>

        <!-- Info Cards -->
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
          <tr>
            <td style="width: 50%; padding: 4px 8px 4px 0;">
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px;">
                <p style="margin: 0 0 4px; font-size: 11px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Name</p>
                <p style="margin: 0; font-size: 14px; color: #0f172a; font-weight: 600;">${name}</p>
              </div>
            </td>
            <td style="width: 50%; padding: 4px 0 4px 8px;">
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px;">
                <p style="margin: 0 0 4px; font-size: 11px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Email</p>
                <p style="margin: 0; font-size: 14px; color: #0f172a; font-weight: 600;">${email}</p>
              </div>
            </td>
          </tr>
          <tr>
            <td style="width: 50%; padding: 4px 8px 4px 0;">
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px;">
                <p style="margin: 0 0 4px; font-size: 11px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Company</p>
                <p style="margin: 0; font-size: 14px; color: #0f172a; font-weight: 600;">${company || "N/A"}</p>
              </div>
            </td>
            <td style="width: 50%; padding: 4px 0 4px 8px;">
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px;">
                <p style="margin: 0 0 4px; font-size: 11px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Service</p>
                <p style="margin: 0; font-size: 14px; color: #0f172a; font-weight: 600;">${service}</p>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="2" style="padding: 4px 0;">
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px;">
                <p style="margin: 0 0 4px; font-size: 11px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Budget</p>
                <p style="margin: 0; font-size: 14px; color: #0f172a; font-weight: 600;">${budget || "N/A"}</p>
              </div>
            </td>
          </tr>
        </table>

        <!-- Message -->
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-left: 4px solid #6366f1; border-radius: 8px; padding: 20px; margin-top: 8px;">
          <p style="margin: 0 0 8px; font-size: 11px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Message</p>
          <p style="margin: 0; font-size: 14px; color: #334155; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>

        <!-- Reply Button -->
        <p style="text-align: center; font-size: 13px; color: #94a3b8;">
          Reply directly to this email to contact ${name} at ${email}
        </p>
      </div>

      <!-- Footer -->
      <div style="padding: 20px; text-align: center; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0; border-top: none;">
        <p style="margin: 0; font-size: 12px; color: #94a3b8;">
          This email was sent from the contact form on cslvanguard.com
        </p>
      </div>
    </div>
  `,
  });

    if (error) {
      console.error("Resend error:", JSON.stringify(error, null, 2));
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to send email", details: error }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully!", id: data?.id }),
    };
  } catch (err) {
    console.error("Internal error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Internal server error",
        details: err instanceof Error ? err.message : String(err),
      }),
    };
  }
};

export { handler };