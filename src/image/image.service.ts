import { Injectable, Res } from '@nestjs/common';
import * as sharp from 'sharp'; 

@Injectable()
export class ImageService {
  async generateThumbnail(imageBuffer: Buffer, res: any) {
    const thumbnailBuffer = await sharp(imageBuffer)
      .resize({ width: 256 })
      .toBuffer();
  
      res.set({
        'Content-Type': 'image/jpeg',
        'Content-Length': thumbnailBuffer.length, 
      });
  
      res.end(thumbnailBuffer); 
  }
}
