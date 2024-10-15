const express = require("express");
const { generateQRCode } = require("../controllers/generator");

const router = express.Router();

router.get("/", (req, res) => {
  return res.render("home", { qrCode: null });
});

router.post("/generate", async (req, res) => {
  let qrCode = await generateQRCode(req, res);
  return res.render("home", { qrCode: qrCode });
});

module.exports = router;
