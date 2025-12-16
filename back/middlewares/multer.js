import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        secure: true,
        folder: "mi-tienda-productos", //nombre de la carpeta en cloudinary
        allowed_formats: ["jpg", "png", "jpeg", "webp"], //formatos permitidos
        transformation: [{ width: 500, height: 500, crop: "limit" }] //opcional: redimension al subir
    }
});



const upload = multer({ storage: storage });
//const upload = multer({ dest: "uploads/" }) old way local storage

export default upload;