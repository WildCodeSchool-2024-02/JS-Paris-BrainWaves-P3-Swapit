const multer = require('multer');
const path = require("path");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "/../../public/upload/"),
  filename: (_, file, cb) => {
    const fileTypes = ["image/png", "image/jpeg", "image/jpg", "image/gif"];
    if (fileTypes.includes(file.mimetype)) {
      cb(null, `${Date.now()}-${file.originalname}`);
    } else cb(new Error("Invalid file type."));
  },
});

module.exports = multer({ storage });
