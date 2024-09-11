import { plainToInstance } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, validateSync } from 'class-validator';

class MongooseVariables {
  @IsNumber()
  PORT: number;

  @IsString()
  @IsNotEmpty()
  MONGODB_TYPE: string;

  @IsString()
  @IsNotEmpty()
  MONGODB_HOST: string;

  @IsNumber()
  @IsNotEmpty()
  MONGODB_PORT: number;

  @IsString()
  @IsNotEmpty()
  MONGODB_DB: string;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(MongooseVariables, config, { enableImplicitConversion: true });
  const errors = validateSync(validatedConfig, { skipMissingProperties: false });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
