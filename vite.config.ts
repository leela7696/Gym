import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
    configureServer(server: any) {
      server.middlewares.use("/api/contact", async (req: any, res: any, next: any) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Method Not Allowed" }));
          return;
        }
        try {
          const chunks: Uint8Array[] = [];
          for await (const chunk of req) chunks.push(chunk as Uint8Array);
          const bodyStr = Buffer.concat(chunks).toString("utf8");
          const body = JSON.parse(bodyStr || "{}");
          const name = String(body.name || "").trim();
          const email = String(body.email || "").trim();
          const phone = String(body.phone || "").trim();
          const message = String(body.message || "").trim();
          if (!name || !email || !phone || !message) {
            res.statusCode = 400;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ error: "Missing required fields" }));
            return;
          }
          const escape = (s: string) =>
            s
              .replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/\"/g, "&quot;")
              .replace(/'/g, "&#39;");
          const html = `<!DOCTYPE html><html lang="en" style="margin:0; padding:0;"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="x-apple-disable-message-reformatting"><meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Shripallavi Fitness and Gym — New Website Enquiry</title></head><body style=\"margin:0; padding:0; background-color:#ffffff;\"><table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" style=\"background-color:#ffffff; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;\"><tr><td align=\"center\" style=\"padding:24px;\"><table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"600\" style=\"width:100%; max-width:600px; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;\"><tr><td style=\"padding:24px 24px 12px; font-family:Arial, Helvetica, sans-serif; color:#111827;\"><div style=\"font-size:20px; font-weight:700; line-height:1.3;\">Shripallavi Fitness and Gym</div><div style=\"margin-top:4px; font-size:12px; color:#6b7280; line-height:1.5;\">New Website Enquiry</div></td></tr><tr><td style=\"padding:0 24px;\"><div style=\"height:1px; background-color:#e5e7eb; line-height:1px; font-size:0;\"></div></td></tr><tr><td style=\"padding:16px 24px 24px;\"><table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" style=\"border-collapse:separate; border:1px solid #e5e7eb; border-radius:8px; background-color:#ffffff;\"><tr><td style=\"padding:16px; font-family:Arial, Helvetica, sans-serif;\"><div style=\"font-size:11px; letter-spacing:0.04em; text-transform:uppercase; color:#6b7280; margin-bottom:6px;\">Customer Name</div><div style=\"font-size:16px; color:#111827; line-height:1.5;\">${escape(name)}</div></td></tr><tr><td style=\"padding:0 16px;\"><div style=\"height:1px; background-color:#f3f4f6; line-height:1px; font-size:0;\"></div></td></tr><tr><td style=\"padding:16px; font-family:Arial, Helvetica, sans-serif;\"><div style=\"font-size:11px; letter-spacing:0.04em; text-transform:uppercase; color:#6b7280; margin-bottom:6px;\">Phone Number</div><div style=\"font-size:16px; color:#111827; line-height:1.5;\">${escape(phone)}</div></td></tr><tr><td style=\"padding:0 16px;\"><div style=\"height:1px; background-color:#f3f4f6; line-height:1px; font-size:0;\"></div></td></tr><tr><td style=\"padding:16px; font-family:Arial, Helvetica, sans-serif;\"><div style=\"font-size:11px; letter-spacing:0.04em; text-transform:uppercase; color:#6b7280; margin-bottom:6px;\">Message</div><div style=\"font-size:16px; color:#111827; line-height:1.6; white-space:pre-wrap;\">${escape(message)}</div></td></tr></table></td></tr><tr><td style=\"padding:8px 24px 0;\"><div style=\"height:1px; background-color:#e5e7eb; line-height:1px; font-size:0;\"></div></td></tr><tr><td style=\"padding:16px 24px 24px; font-family:Arial, Helvetica, sans-serif; color:#6b7280;\"><div style=\"font-size:12px; line-height:1.6;\"><div style=\"margin-bottom:6px;\">This enquiry was submitted through the official Shripallavi Fitness website.</div><div style=\"margin-bottom:2px;\">Contact: 098883 45345</div><div>Location: Bowenpally, Secunderabad</div></div></td></tr></table></td></tr></table></body></html>`;
          const text = `New Website Enquiry - Shripallavi Fitness and Gym\n\nCustomer Name: ${name}\nPhone Number: ${phone}\nMessage:\n${message}\n\nThis enquiry was submitted through the official Shripallavi Fitness website.\nContact: 098883 45345\nLocation: Bowenpally, Secunderabad`;
          const apiKey = process.env.RESEND_API_KEY;
          if (!apiKey) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ error: "Email service not configured" }));
            return;
          }
          const r = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: "Shripallavi Fitness <onboarding@resend.dev>",
              to: ["leelak919@gmail.com"],
              subject: "New Website Enquiry — Shripallavi Fitness and Gym",
              html,
              text,
              reply_to: email,
            }),
          });
          const data: any = await r.json().catch(() => null);
          if (!r.ok) {
            res.statusCode = r.status;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ error: data?.message || "Failed to send email" }));
            return;
          }
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ ok: true, id: data?.id || null }));
        } catch (e) {
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Email send failed" }));
        }
      });
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
