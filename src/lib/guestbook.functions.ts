import { createServerFn } from "@tanstack/react-start";

const OWNER_EMAIL = "faivorius@gmail.com";

export type GuestBookInput = { name: string; email?: string; message: string };

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    c === "&" ? "&amp;" : c === "<" ? "&lt;" : c === ">" ? "&gt;" : c === '"' ? "&quot;" : "&#39;",
  );

export const sendGuestBookMessage = createServerFn({ method: "POST" })
  .inputValidator((input: GuestBookInput) => {
    const name = clean(input?.name, 80);
    const message = clean(input?.message, 2000);
    const email = clean(input?.email, 160);
    if (!name || !message) throw new Error("Name and message are required.");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Invalid email.");
    return { name, message, email };
  })
  .handler(async ({ data }) => {
    const lovableKey = process.env["LOVABLE_API_KEY"];
    const resendKey = process.env["RESEND_API_KEY"];
    if (!lovableKey || !resendKey) throw new Error("Email service is not configured.");

    const html = `
      <div style="font-family:Georgia,serif;background:#faf5ea;padding:24px;border-radius:12px;color:#3b3227">
        <h2 style="margin:0 0 12px">✦ New guest book message</h2>
        <p style="margin:0 0 4px"><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p style="margin:0 0 16px"><strong>Email:</strong> ${escapeHtml(data.email || "—")}</p>
        <p style="white-space:pre-wrap;margin:0">${escapeHtml(data.message)}</p>
      </div>`;

    const res = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": resendKey,
      },
      body: JSON.stringify({
        from: "Guest Book <onboarding@resend.dev>",
        to: [OWNER_EMAIL],
        ...(data.email ? { reply_to: data.email } : {}),
        subject: `Guest book: ${data.name}`,
        html,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error(`Resend request failed [${res.status}]: ${body}`);
      throw new Error(`Could not send the message [${res.status}]`);
    }

    return { sent: true as const };
  });