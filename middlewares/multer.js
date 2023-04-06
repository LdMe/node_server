// Middleware for uploading files
// files are stored in public/uploads/<user_id>/ folder and are named as <timestamp>.<file_extension>
// file extension is extracted from the file's mimetype
// file is stored in req.file

import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const __dirname = path.resolve();
        cb(null, path.join(__dirname, 'public', 'uploads'));
    }
    , filename: function (req, file, cb) {
        const username = req.body.username || req.user.username;
        cb(null, username + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

export default upload;