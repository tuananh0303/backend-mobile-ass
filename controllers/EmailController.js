const EmailService = require("../services/EmailService");

const sendEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const response = await EmailService.sendEmail(email);
    return res.status(200).json(response);
  } catch (e) {
    console.error("Error in loginUser:", e);
    return res.status(500).json({
      status: "ERR",
      message: "Internal Server Error",
    });
  }
};
const checkCodeEmail = async (req, res) => {
  try {
    const userId = req.params.id;
    const { messageEmail } = req.body;
    const response = await EmailService.checkCodeEmail(userId, messageEmail);
    return res.status(200).json(response);
  } catch (e) {
    console.error("Error in loginUser:", e);
    return res.status(500).json({
      status: "ERR",
      message: "Internal Server Error",
    });
  }
};
module.exports = { sendEmail, checkCodeEmail };
