import { Controller, Post, Res, UseGuards, UseInterceptors, UploadedFile} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageService } from './image.service';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import * as multer from 'multer'; 

@Controller('images')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('thumbnail')
  @UseInterceptors(FileInterceptor('image', { storage: multer.memoryStorage() }))
  async generateThumbnail(@UploadedFile() image: Express.Multer.File, @Res() res: Response) {
    return await this.imageService.generateThumbnail(image.buffer, res);
  }
}