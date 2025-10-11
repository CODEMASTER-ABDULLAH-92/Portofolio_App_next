import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Setup Nodemailer
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS length:", process.env.EMAIL_PASS?.length);

    // Verify SMTP connection
    await new Promise((resolve, reject) => {
      transporter.verify((err, success) => {
        if (err) {
          console.error("SMTP Verify Failed:", err);
          reject(err);
        } else {
          console.log("SMTP Server Ready:", success);
          resolve(success);
        }
      });
    });

    /* ========== 1️⃣ EMAIL TO YOU (Portfolio Owner) ========== */
    const adminHTML = `
      <div style="font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif; background-color:#f7f9fc; padding:30px;">
        <div style="max-width:600px; margin:auto; background:white; border-radius:14px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.08);">
          <div style="background:linear-gradient(135deg,#4f46e5,#9333ea); padding:20px; color:white; text-align:center;">
            <h2 style="margin:0; font-size:22px;">📩 New Contact Message</h2>
            <p style="opacity:0.9; font-size:14px;">You received a new message from your portfolio contact form</p>
          </div>
          <div style="padding:25px 30px;">
            <p style="font-size:16px; color:#1e293b;"><strong>👤 Name:</strong> ${name}</p>
            <p style="font-size:16px; color:#1e293b;"><strong>📧 Email:</strong> <a href="mailto:${email}" style="color:#4f46e5; text-decoration:none;">${email}</a></p>
            <div style="margin-top:20px; padding:15px 18px; border-left:4px solid #4f46e5; background:#f1f5f9; border-radius:6px;">
              <p style="font-size:15px; color:#334155; line-height:1.6;">${message}</p>
            </div>
            <p style="font-size:13px; margin-top:35px; color:#64748b;">— Sent automatically by your portfolio contact system.</p>
          </div>
        </div>
      </div>
    `;

    /* ========== 2️⃣ EMAIL TO USER (Confirmation) ========== */
    const userHTML = `
      <div style="font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif; background-color:#f6f9fc; padding:30px;">
        <div style="max-width:600px; margin:auto; background:white; border-radius:14px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.07);">
          <div style="background:linear-gradient(135deg,#2563eb,#9333ea); padding:25px; color:white; text-align:center;">
            <h2 style="margin:0; font-size:22px;">Hi ${name}, 👋</h2>
            <p style="opacity:0.9; font-size:14px;">Thank you for reaching out to Muhammad Abdullah</p>
          </div>
          <div style="padding:30px;">
            <p style="font-size:16px; color:#1e293b;">
              I’ve received your message and will get back to you soon.
            </p>
            <div style="margin-top:18px; border-left:4px solid #2563eb; padding:14px 16px; background:#f1f5f9; border-radius:6px;">
              <p style="font-size:15px; color:#334155; line-height:1.6; margin:0;">
                <strong>Your Message:</strong><br/>${message}
              </p>
            </div>
            <p style="margin-top:30px; font-size:14px; color:#475569;">
              In the meantime, feel free to explore my portfolio or connect with me on LinkedIn or GitHub.
            </p>
            <div style="margin-top:20px; text-align:center;">
              <a href="https://abdullahdev92.vercel.app/" style="display:inline-block; background:linear-gradient(135deg,#2563eb,#9333ea); color:white; text-decoration:none; padding:12px 28px; border-radius:10px; font-weight:600; font-size:15px;">
                🌐 Visit My Portfolio
              </a>
            </div>
          </div>
          <div style="background:#f8fafc; text-align:center; padding:18px; font-size:13px; color:#94a3b8;">
            — Muhammad Abdullah | <a href="mailto:${process.env.EMAIL_USER}" style="color:#6366f1; text-decoration:none;">${process.env.EMAIL_USER}</a>
          </div>
        </div>
      </div>
    `;

    /* ===== Send to You ===== */
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "📬 New Contact Form Submission",
      html: adminHTML,
    });

    /* ===== Send Confirmation to User ===== */
    await transporter.sendMail({
      from: `"Muhammad Abdullah" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✅ Thanks for Reaching Out!",
      html: userHTML,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
