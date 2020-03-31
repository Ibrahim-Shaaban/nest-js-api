import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CreateItemDto } from './dto/createItem.dto';
import { ItemsService } from './items.service';
import { UpdateItemDto } from './dto/updateItem.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}
  @Get()
  getAllItems(): Promise<CreateItemDto[]> {
    return this.itemService.getAllItems();
  }

  @Get(':id')
  getItem(@Param('id') id): Promise<CreateItemDto> {
    return this.itemService.getItem(id);
  }

  @Post()
  creatreItem(@Body() createItemDto: CreateItemDto): Promise<CreateItemDto> {
    return this.itemService.createItem(createItemDto);
  }

  @Put(':id')
  updateItem(
    @Body() updateItem: UpdateItemDto,
    @Param('id') id: string,
  ): Promise<CreateItemDto> {
    return this.itemService.updateItem(id, updateItem);
  }

  @Delete(':id')
  deleteItem(@Param('id') id: string): Promise<CreateItemDto> {
    return this.itemService.deleteItem(id);
  }
}
