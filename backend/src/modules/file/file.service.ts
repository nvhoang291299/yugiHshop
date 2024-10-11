import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FileService {
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
      const url = `https://yugishop.s3.amazonaws.com/card/${name}`;
      return url;
    } catch (e) {
      console.log(e);
    }
  }
}
