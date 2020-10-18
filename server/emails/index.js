const sgMail = require("@sendgrid/mail");
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  const htmlEmail = `
  <style>
  .sampleH1{
    color: blue;
  }
  </style>
  <h1 class="sampleh1" >Welcome to RottenMovie!</h1>
  <div>We hope you find others with the same movie taste as yours!</div>
  `;
  sgMail.send({
    to: email,
    from: `${process.env.FROM_EMAIL}`,
    subject: "Movie - Thanks for signing up!",
    text: `Hi ${name}! Welcome to RottenMovies! We hope you can share your movie experiences with others!`,
    html: htmlEmail,
  });
};

const forgotPasswordEmail = (email, token) => {
  const exampleHTMLEmail = `
  <div>Click the link below to reset your password</div>
  <a target="_blank" rel="noopener noreferrer" href="${process.env.APP_URL}/api/password/${token}">Reset Password</a>
  `;

  sgMail.send({
    to: email,
    from: `${process.env.FROM_EMAIL}`,
    subject: "RottenMovie - Password Reset.",
    text: `Hi ${name}! Please click the link below to reset your password.`,

    html: exampleHTMLEmail,
  });
};

module.exports = {
  sendWelcomeEmail,
  forgotPasswordEmail,
};
