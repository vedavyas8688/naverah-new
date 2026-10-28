import nodemailer from 'nodemailer';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (value, limit = 2000) =>
  String(value || '')
    .trim()
    .slice(0, limit);
const escapeHtml = (value) =>
  value.replace(
    /[&<>"']/g,
    (character) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[character],
  );

const premiumConfirmationEmail = ({
  name,
  subject,
  interest,
  replyTo,
  contactNumber,
  contactTel,
  logoUrl,
}) => `
  <!doctype html>
  <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <meta name="color-scheme" content="light only">
      <meta name="supported-color-schemes" content="light only">
      <style>
        :root { color-scheme:light only; supported-color-schemes:light only; }
        @media only screen and (max-width:600px) {
          .shell { padding:12px 8px !important; }
          .head { padding:28px 22px 26px !important; }
          .body { padding:36px 22px 38px !important; }
          .title { font-size:35px !important; overflow-wrap:anywhere !important; }
          .email-logo { width:170px !important; max-width:170px !important; }
          .location { display:none !important; }
          .cta-table { width:100% !important; }
          .cta-cell { text-align:center !important; }
          .cta { display:block !important; padding:15px 16px !important; }
          .contact-line { padding:18px 14px !important; text-align:center !important; }
          .footer { padding:26px 22px !important; text-align:center !important; }
        }
      </style>
    </head>
    <body class="email-body" bgcolor="#ffffff" style="margin:0;padding:0;background:#ffffff;background-image:linear-gradient(#ffffff,#ffffff);font-family:Arial,Helvetica,sans-serif;color:#0a1d37;color-scheme:light only">
      <div style="display:none;max-height:0;overflow:hidden;opacity:0">Your Naverah Assets enquiry has been received.</div>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff" style="background:#ffffff;background-image:linear-gradient(#ffffff,#ffffff)"><tr><td class="shell" align="center" style="padding:48px 16px">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff" style="max-width:640px;background:#ffffff;background-image:linear-gradient(#ffffff,#ffffff);border:1px solid #cda45e;border-collapse:collapse;box-shadow:0 18px 50px rgba(10,29,55,.10)">
          <tr><td class="head" bgcolor="#0a1d37" style="background:#0a1d37;background-image:linear-gradient(#0a1d37,#0a1d37);padding:40px 46px 38px">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
              <tr><td style="vertical-align:middle"><img class="email-logo" src="${logoUrl}" width="205" alt="Naverah Assets" style="display:block;width:205px;max-width:100%;height:auto;border:0;outline:none;text-decoration:none"></td><td class="location" align="right" style="color:#cda45e;font-size:9px;letter-spacing:.14em;text-transform:uppercase">Bangalore</td></tr>
              <tr><td colspan="2" style="padding-top:30px"><div style="height:1px;background:#cda45e;font-size:1px;line-height:1px">&nbsp;</div></td></tr>
            </table>
          </td></tr>
          <tr><td class="body" bgcolor="#ffffff" style="background:#ffffff;background-image:linear-gradient(#ffffff,#ffffff);padding:52px 46px 50px">
            <div style="margin-bottom:22px;color:#cda45e;font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase">Enquiry confirmed &nbsp;&mdash;&nbsp; Thank you</div>
            <h1 class="title" style="margin:0 0 22px;color:#0a1d37;font-family:Georgia,'Times New Roman',serif;font-size:46px;line-height:1.08;font-weight:400;letter-spacing:-.02em">Thank you,<br>${name}.</h1>
            <p style="max-width:500px;margin:0;color:#0a1d37;font-size:15px;line-height:1.8">Your property enquiry is now with our advisory team. We will review your requirements carefully and connect with you shortly with clear, considered guidance.</p>
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-top:38px;border-top:1px solid #cda45e;border-bottom:1px solid #cda45e"><tr><td style="padding:26px 0">
              <div style="margin-bottom:10px;color:#cda45e;font-size:9px;font-weight:700;letter-spacing:.19em;text-transform:uppercase">Your enquiry</div>
              <div style="color:#0a1d37;font-family:Georgia,'Times New Roman',serif;font-size:21px;line-height:1.4">${subject}</div>
              ${interest ? `<div style="padding-top:9px;color:#0a1d37;font-size:13px;line-height:1.5">${interest}</div>` : ''}
            </td></tr></table>
            <div style="margin-top:34px;color:#0a1d37;font-family:Georgia,'Times New Roman',serif;font-size:19px">What happens next</div>
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-top:18px">
              <tr><td style="width:34px;padding:2px 0 14px;vertical-align:top;color:#cda45e;font-family:Georgia,'Times New Roman',serif;font-size:15px">01</td><td style="padding:0 0 14px;color:#0a1d37;font-size:13px;line-height:1.65">Our advisory team reviews the details you shared.</td></tr>
              <tr><td style="width:34px;padding-top:2px;vertical-align:top;color:#cda45e;font-family:Georgia,'Times New Roman',serif;font-size:15px">02</td><td style="color:#0a1d37;font-size:13px;line-height:1.65">A Naverah advisor connects with you to understand your needs and guide the next step.</td></tr>
            </table>
            <table class="cta-table" role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-top:34px"><tr><td class="cta-cell" bgcolor="#cda45e" style="background:#cda45e;background-image:linear-gradient(#cda45e,#cda45e)"><a class="cta" href="mailto:${replyTo}" style="display:inline-block;padding:14px 22px;color:#0a1d37;font-size:11px;font-weight:700;letter-spacing:.09em;text-decoration:none;text-transform:uppercase">Reply to Naverah &nbsp;&rarr;</a></td></tr></table>
            <div class="contact-line" style="margin-top:22px;padding:17px 19px;background:#0a1d37;background-image:linear-gradient(#0a1d37,#0a1d37);color:#ffffff;font-size:12px;line-height:1.7">If you have any questions, please contact us at <a href="tel:${contactTel}" style="color:#cda45e;font-weight:700;text-decoration:none;white-space:nowrap">${contactNumber}</a>.</div>
          </td></tr>
          <tr><td class="footer" bgcolor="#0a1d37" style="background:#0a1d37;background-image:linear-gradient(#0a1d37,#0a1d37);padding:28px 46px;color:#ffffff;font-size:10px;line-height:1.8;letter-spacing:.03em"><span style="color:#ffffff;font-weight:700;letter-spacing:.14em">NAVERAH ASSETS</span><br>Considered property guidance in Bangalore.<br><span style="color:#cda45e">This message confirms that your enquiry was received.</span></td></tr>
        </table>
      </td></tr></table>
    </body>
  </html>`;

// Preserved above for future use. This concise template is the active customer response for now.
const simpleConfirmationEmail = ({ name, contactNumber, contactTel }) => `
  <!doctype html>
  <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <meta name="color-scheme" content="light only">
      <meta name="supported-color-schemes" content="light only">
    </head>
    <body bgcolor="#ffffff" style="margin:0;padding:0;background:#ffffff;font-family:Arial,Helvetica,sans-serif;color:#0a1d37;color-scheme:light only">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff">
        <tr>
          <td align="center" style="padding:32px 14px">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff" style="max-width:560px;border:1px solid #cda45e;border-collapse:collapse">
              <tr>
                <td bgcolor="#0a1d37" style="padding:24px 30px;color:#cda45e;font-size:14px;font-weight:700;letter-spacing:.16em">NAVERAH ASSETS</td>
              </tr>
              <tr>
                <td style="padding:42px 30px">
                  <h1 style="margin:0 0 18px;color:#0a1d37;font-family:Georgia,'Times New Roman',serif;font-size:34px;line-height:1.2;font-weight:400">Thank you, ${name}.</h1>
                  <p style="margin:0;color:#0a1d37;font-size:15px;line-height:1.8">We have received your enquiry. Our team will review it and reach you shortly.</p>
                  <p style="margin:24px 0 0;color:#0a1d37;font-size:12px;line-height:1.7">If you have any questions, please contact us at <a href="tel:${contactTel}" style="color:#cda45e;font-weight:700;text-decoration:none">${contactNumber}</a>.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>`;

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed.' });
  }

  const body = typeof request.body === 'string' ? JSON.parse(request.body || '{}') : request.body;
  const name = clean(body?.name, 120);
  const email = clean(body?.email, 254);
  const phone = clean(body?.phone, 40);
  const interest = clean(body?.interest, 160);
  const message = clean(body?.message, 4000);
  const subject = clean(body?.subject, 180) || 'Property enquiry';
  const formName = clean(body?.formName, 120) || 'Website enquiry form';

  if (!name || !phone) {
    return response.status(400).json({ error: 'Please provide your name and phone number.' });
  }
  if (email && !emailPattern.test(email)) {
    return response
      .status(400)
      .json({ error: 'Please enter a valid email address or leave it blank.' });
  }

  const password = process.env.SMTP_PASSWORD || process.env.SMTP_PASS;
  const required = [
    process.env.SMTP_HOST,
    process.env.SMTP_PORT,
    process.env.SMTP_USER,
    password,
    process.env.SMTP_FROM,
    process.env.SMTP_TO,
  ];
  if (required.some((value) => !value)) {
    return response.status(500).json({ error: 'Email service is not configured.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: { user: process.env.SMTP_USER, pass: password },
    });
    const rows = [
      ['Form', formName],
      ['Name', name],
      ['Email', email],
      ['Phone', phone],
      ['Interested in', interest],
      ['Message', message],
    ].filter(([, value]) => value);

    const from = `Naverah Assets <${process.env.SMTP_FROM}>`;
    await Promise.all([
      transporter.sendMail({
        from,
        to: process.env.SMTP_TO,
        ...(email ? { replyTo: email } : {}),
        subject: `Naverah Assets: ${subject}`,
        text: rows.map(([label, value]) => `${label}: ${value}`).join('\n\n'),
        html: rows
          .map(
            ([label, value]) =>
              `<p><strong>${escapeHtml(label)}:</strong><br>${escapeHtml(value).replaceAll('\n', '<br>')}</p>`,
          )
          .join(''),
      }),
      ...(email
        ? [
            transporter.sendMail({
              from,
              to: email,
              replyTo: process.env.SMTP_TO,
              subject: 'Thank you for contacting Naverah Assets',
              text: `Hello ${name},\n\nThank you for contacting Naverah Assets. We have received your enquiry and our team will reach you shortly.\n\nIf you have any questions, please contact us at ${process.env.CONTACT_PHONE || '+91 9901171485'}.\n\nRegards,\nNaverah Assets`,
              legacyHtml: `
          <!doctype html>
          <html>
            <body style="margin:0;padding:0;background:#f4f1ea;font-family:Arial,Helvetica,sans-serif;color:#0a1d37">
              <div style="display:none;max-height:0;overflow:hidden;opacity:0">We have received your property enquiry and will contact you shortly.</div>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f4f1ea">
                <tr>
                  <td align="center" style="padding:36px 14px">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:640px;background:#ffffff;border-collapse:collapse;box-shadow:0 12px 36px rgba(10,29,55,.08)">
                      <tr>
                        <td style="background:#0a1d37;padding:30px 36px;border-bottom:5px solid #cda45e">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                            <tr>
                              <td style="color:#ffffff">
                                <div style="font-size:18px;font-weight:700;letter-spacing:.16em;color:#ffffff">NAVERAH ASSETS</div>
                                <div style="padding-top:9px;color:#d8c39e;font-size:11px;letter-spacing:.08em;text-transform:uppercase">Property guidance you can trust</div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:42px 36px 18px">
                          <div style="display:inline-block;margin-bottom:18px;padding:7px 12px;background:#f4ead8;color:#8a6229;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase">Enquiry received</div>
                          <h1 style="margin:0 0 18px;color:#0a1d37;font-size:32px;line-height:1.2;font-weight:600">Thank you, ${escapeHtml(name)}.</h1>
                          <p style="margin:0;color:#586273;font-size:16px;line-height:1.75">Your enquiry is safely with our team. We’ll review your requirements and connect with you shortly with the right guidance for your property journey.</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:22px 36px">
                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f8f6f1;border-left:4px solid #cda45e">
                            <tr>
                              <td style="padding:22px 24px">
                                <div style="margin-bottom:8px;color:#8a6229;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase">Your enquiry</div>
                                <div style="color:#0a1d37;font-size:17px;font-weight:600;line-height:1.45">${escapeHtml(subject)}</div>
                                ${interest ? `<div style="padding-top:8px;color:#6c7480;font-size:14px;line-height:1.5">Interest: ${escapeHtml(interest)}</div>` : ''}
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:12px 36px 38px">
                          <h2 style="margin:0 0 16px;color:#0a1d37;font-size:18px;font-weight:600">What happens next?</h2>
                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tr>
                              <td style="width:34px;vertical-align:top"><div style="width:26px;height:26px;border-radius:50%;background:#cda45e;color:#0a1d37;font-size:13px;font-weight:700;line-height:26px;text-align:center">1</div></td>
                              <td style="padding:2px 0 16px;color:#586273;font-size:14px;line-height:1.6">Our property team reviews the details you shared.</td>
                            </tr>
                            <tr>
                              <td style="width:34px;vertical-align:top"><div style="width:26px;height:26px;border-radius:50%;background:#cda45e;color:#0a1d37;font-size:13px;font-weight:700;line-height:26px;text-align:center">2</div></td>
                              <td style="padding:2px 0 0;color:#586273;font-size:14px;line-height:1.6">A Naverah advisor contacts you to understand your requirements better.</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td align="center" style="background:#0a1d37;padding:26px 36px;color:#aeb7c4;font-size:12px;line-height:1.7">
                          <strong style="color:#ffffff;font-size:14px">Naverah Assets</strong><br>
                          Your trusted real estate channel partner in Bangalore.<br>
                          <a href="mailto:${escapeHtml(process.env.SMTP_TO)}" style="color:#d6b779;text-decoration:none">Reply to this email if you need immediate assistance</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </body>
          </html>`,
            }),
          ]
        : []),
    ]);
    return response.status(200).json({ ok: true });
  } catch (error) {
    console.error('Contact email failed:', error?.message || error);
    return response.status(500).json({ error: 'Unable to send your enquiry. Please try again.' });
  }
}
