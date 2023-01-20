import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CartsService } from "./carts.service";
import { CreateCartDto } from "./dto/create-cart.dto";
import { UpdateCartDto } from "./dto/update-cart.dto";

@Controller("cart")
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Post("create/:id")
  create(@Body() createCartDto: CreateCartDto, @Param("id") id: string) {
    return this.cartsService.create(createCartDto, id);
  }

  @Get()
  findAll() {
    return this.cartsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.cartsService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateCartDto: UpdateCartDto) {
    return this.cartsService.update(+id, updateCartDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.cartsService.remove(+id);
  }
}
