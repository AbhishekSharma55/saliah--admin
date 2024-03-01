import crypto from "crypto";
import { generateSHA1, generateSignature, getCloudinaryId } from "../utils";
import axios from "axios";

class ImageService {
  async delete(imgUrl: string) {
    const publicFileId = getCloudinaryId(imgUrl || "");
    if (publicFileId) {
      const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "";
      const timestamp = new Date().getTime();
      const apiKey = process.env.CLOUDINARY_API_KEY || "";
      const apiSecret = process.env.CLOUDINARY_API_SECRET || "";
      const signature = generateSHA1(
        generateSignature(publicFileId, apiSecret)
      );
      const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`;
      await axios.post(url, {
        public_id: publicFileId,
        signature: signature,
        api_key: apiKey,
        timestamp: timestamp,
      });
    }
  }
}

const imageService = new ImageService();
export default imageService;
