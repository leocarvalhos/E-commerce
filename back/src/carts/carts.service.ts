import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { CartProductsService } from "src/cart-products/cart-products.service";
import { Repository } from "typeorm";
import { UpdateCartDto } from "./dto/update-cart.dto";
import { Cart } from "./entities/cart.entity";

@Injectable()
export class CartsService {
  constructor(
    @Inject(forwardRef(() => CartProductsService))
    private readonly cartProductService: CartProductsService,
    @Inject("CART_REPOSITORY")
    private cartRepository: Repository<Cart>
  ) {}
  public async create(id: string) {
    const user = await this.cartRepository.find({
      where: {
        user: { id },
      },
      relations: {
        user: true,
      },
    });
    const cartActive = user.find((element) => {
      return !element.status;
    });

    if (!cartActive || cartActive.status) {
      const newCart = {
        user: { id },
      };

      return await this.cartRepository.insert(newCart);
    }
  }

  findAll() {
    return `This action returns all carts`;
  }

  async findOne(id: string) {
    try {
      const cart = await this.cartRepository.findOne({
        select: {
          user: {
            id: true,
          },
        },
        where: {
          user: { id },
          status: false,
        },
        relations: {
          user: true,
          payment_method: true,
        },
      });

      return cart.id;
    } catch (error) {
      return error;
    }
  }

  async update(id: string, updateCartDto: UpdateCartDto) {
    try {
      const cart = await this.cartRepository.findOne({
        select: {
          user: {
            id: true,
          },
        },
        where: {
          user: { id },
          status: false,
        },
        relations: {
          user: true,
          payment_method: true,
        },
      });
      const update = {
        status: updateCartDto.status,
        payment_method: { id: updateCartDto.payment_method },
      };
      await this.cartRepository.update({ id: cart.id }, update);
      await this.cartProductService.finalizingCart(id);
    } catch (error) {
      return error;
    }
  }
}
