import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileService } from './file.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post('files')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    try {
      const result = await this.fileService.uploadFile(file);
      return {
        url: result,
      };
    } catch (error) {
      console.log(error);
    }
  }
}
