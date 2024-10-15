const QRCode = require("qrcode");

async function generateQRCode(req, res) {
  try {
    console.log("req is ----->", req.body);
    const url = req.body.inputData;
    const qrCodeImage = await QRCode.toDataURL(url);
    return qrCodeImage;
  } catch (err) {
    console.error("Error generating QR code:", err);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = {
  generateQRCode,
};
