 const nodemailer = require('nodemailer');
require('dotenv').config();
const mailSender = async(email ,title ,Subject)=>{
     try{
        const transporter = nodemailer.createTransport({
        service:"Gmail",
        auth:{
            user:process.env.MAIL_USER,
            pass:process.env.MAIL_PASS,
        },
     })
     let info = await transporter.sendMail({
        from:'Gurudatt',
        to:`${email}`,
        subject:`${title}`,
        html:`${Subject}`,
     })
     return info;
    }catch(error){
        console.log(error.message);
    }
}

module.exports = mailSender;