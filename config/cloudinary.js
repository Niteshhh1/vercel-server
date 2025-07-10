// // config/cloudinary.js
// const cloudinary = require('cloudinary').v2;
// const { CloudinaryStorage } = require('multer-storage-cloudinary');

// cloudinary.config({
//   cloud_name: 'mediaflows_18e5cf8f-46b1-44a6-a217-380dbbb49a08',
//   api_key:'598861338621511',
//   api_secret: 'g1crrX-TvWVrv4om7wCQj88QguE'
// });

// const storage = new CloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: 'client_images',
//     allowed_formats: ['jpg', 'png', 'jpeg'],
//     transformation: [{ width: 500, height: 500, crop: "limit" }]
//   }
// });

// module.exports = {
//   cloudinary,
//   storage
// };
