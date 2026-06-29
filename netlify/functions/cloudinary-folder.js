const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.handler = async function () {
  try {
    const result = await cloudinary.api.resources({
      type: 'upload',
      resource_type: 'video',
      prefix: 'playground/',
      max_results: 100,
    });

    const videos = result.resources.map((v) => ({
      url: v.secure_url,
      publicId: v.public_id,
    }));

    return {
      statusCode: 200,
      body: JSON.stringify(videos),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
