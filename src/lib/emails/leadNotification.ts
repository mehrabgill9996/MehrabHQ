export type ContactPayload = {
  name: string;
  email: string;
  businessName: string;
  projectType: string;
  budget: string;
  message: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid #E5E7EB;vertical-align:top;">
        <div style="font-size:12px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;color:#6B7280;margin-bottom:4px;">
          ${escapeHtml(label)}
        </div>
        <div style="font-size:15px;line-height:1.5;color:#0B1220;white-space:pre-wrap;">
          ${escapeHtml(value)}
        </div>
      </td>
    </tr>
  `;
}

export function leadNotificationHtml(data: ContactPayload) {
  const mailto = `mailto:${encodeURIComponent(data.email)}?subject=${encodeURIComponent(`Re: Your MehrabHQ quote request`)}`;

  return `
<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background:#F7F8FA;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F7F8FA;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" style="max-width:560px;background:#ffffff;border:1px solid #E5E7EB;border-radius:16px;overflow:hidden;">
            <tr>
              <td style="background:#2563EB;padding:24px 28px;">
                <div style="font-size:13px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#DBEAFE;">
                  MehrabHQ
                </div>
                <div style="margin-top:8px;font-size:22px;font-weight:700;color:#ffffff;">
                  New quote request
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 28px;">
                <a href="${mailto}" style="display:inline-block;background:#2563EB;color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;padding:12px 18px;border-radius:10px;">
                  Reply to this lead
                </a>
                <p style="margin:16px 0 0;font-size:13px;color:#6B7280;">
                  Or hit reply in your email client — reply-to is set to their address.
                </p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:20px;">
                  ${row("Name", data.name)}
                  ${row("Email", data.email)}
                  ${row("Business Name", data.businessName)}
                  ${row("Project Type", data.projectType)}
                  ${row("Budget Range", data.budget)}
                  ${row("Project Details", data.message)}
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `.trim();
}
