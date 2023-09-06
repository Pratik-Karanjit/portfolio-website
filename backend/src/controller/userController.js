import { HttpStatus, baseUrl } from "../config/constant.js";
import successResponse from "../helper/successResponse.js";
import expressAsyncHandler from "express-async-handler";
import { sendMail } from "../utils/sendMail.js";


export let createUser = expressAsyncHandler(async (req, res) => {
    const data = req.body; // Assuming the form data is sent in the request body
    console.log(data)
    const mailInfo = {
      from: '"Pratik Karanjit" <uniquekc425@gmail.com>',
      to: 'pratikkaranjit@gmail.com',
      subject: 'Contact Form Submission',
      html: `
        <h1>Contact Form Submission</h1>
        <p>First Name: ${data.fName}</p>
        <p>Last Name: ${data.lName}</p>
        <p>Email: ${data.email}</p>
        <p>Company Website: ${data.companyWebsite}</p>
        <p>Description: ${data.description}</p>
      `,
    };
  
    try {
      await sendMail(mailInfo);
      successResponse(res, HttpStatus.CREATED, 'Email sent successfully', null); // Adjust HttpStatus and any other parameters
    } catch (error) {
      console.log('Error sending email:', error.message);
    }
  });