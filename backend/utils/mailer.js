const nodemailer = require('nodemailer');

const sendMail = async (email) => {
    try {
        let testAccount = await nodemailer.createTestAccount();

        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass,
            }
        });

        let info = await transporter.sendMail({
            from: 'noreply@zoen.in',
            to: email,
            subject: "Hello from Zoen",
            text: "Hi!, thanks for contacting us. We will get back to you soon.",
        });


        const previewUrl = nodemailer.getTestMessageUrl(info);
        console.log("📨 Email sent! Preview URL:", previewUrl);

        return previewUrl;
        // return nodemailer.getTestMessageUrl(info);
    } catch (error) {
        console.error("❌ Error sending email:", error);
    }
};

module.exports = { sendMail }; // ✅ Named export
