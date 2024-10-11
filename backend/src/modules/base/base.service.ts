import { Injectable } from '@nestjs/common';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';

@Injectable()
export abstract class BaseService<T> {
  constructor(private repository: Repository<T>) {}

  async findAll(options: FindOneOptions<T>): Promise<T[]> {
    return await this.repository.find(options);
  }

  async findAllAndCount(options: FindManyOptions<T>): Promise<[T[], number]> {
    return await this.repository.findAndCount(options);
  }

  async findById(id): Promise<T> {
    return await this.repository.findOneBy(id);
  }

  async findBy(options: FindOneOptions<T>): Promise<T | null> {
    return await this.repository.findOne(options);
  }

  async save(entity): Promise<T> {
    return await this.repository.save(entity);
  }

  async existBy(param): Promise<boolean> {
    return await this.repository.existsBy(param);
  }
}
