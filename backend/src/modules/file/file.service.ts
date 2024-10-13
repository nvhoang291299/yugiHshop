import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { BadRequestException, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class FileService {
  private readonly logger = new Logger(FileService.name);
  private bucketName = process.env.AWS_BUCKET_NAME;
  private s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  });
  async uploadFile(file) {
    const { originalname } = file;
    return await this.s3Upload(file.buffer, this.bucketName, originalname, file.mimetype);
  }

  async s3Upload(file, bucket, name, mimetype) {
    try {
      await this.s3.send(
        new PutObjectCommand({
          Bucket: bucket,
          Key: `card/${String(name)}`,
          Body: file,
          ACL: 'public-read',
          ContentType: mimetype,
          ContentDisposition: 'inline',
        }),
      );
      return `https://yugishop.s3.amazonaws.com/card/${name}`;
    } catch (e) {
      this.logger.error('Upload file failed.');
      throw new BadRequestException(e);
    }
  }
}
