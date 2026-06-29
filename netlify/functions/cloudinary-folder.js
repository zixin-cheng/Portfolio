import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
  try {
    const { resources } = await cloudinary.search
      .expression('folder:playground')
      .sort_by('created_at', 'desc')
      .max_results(100)
      .execute();

    const videos = resources.map((file) => ({
      publicId: file.public_id,
      url: file.secure_url,
    }));

    res.status(200).json(videos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch videos' });
  }
}
