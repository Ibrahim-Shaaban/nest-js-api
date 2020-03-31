import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './interfaces/item.interface';
import { CreateItemDto } from './dto/createItem.dto';
import { UpdateItemDto } from './dto/updateItem.dto';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private itemModel: Model<Item>) {}

  async getAllItems(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  async getItem(id: string): Promise<Item> {
    return this.itemModel.find({ _id: id });
  }

  async createItem(createItem: CreateItemDto): Promise<Item> {
    const newItem = await this.itemModel.create(createItem);
    return newItem;
  }

  async deleteItem(id: string): Promise<Item> {
    const item = await this.itemModel.findByIdAndRemove(id);
    return item;
  }

  async updateItem(id: string, updateItem: UpdateItemDto): Promise<Item> {
    const item = await this.itemModel.findByIdAndUpdate(id, updateItem, {
      new: true,
    });
    return item;
  }
}
