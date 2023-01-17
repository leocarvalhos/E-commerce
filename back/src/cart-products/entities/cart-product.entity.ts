import { Cart } from "src/carts/entities/cart.entity";
import { Product } from "src/products/entities/product.entity";
import { Entity } from "typeorm";
import { JoinColumn } from "typeorm/decorator/relations/JoinColumn";
import { ManyToOne } from "typeorm/decorator/relations/ManyToOne";

@Entity("cart_products")
export class CartProduct {
  @ManyToOne(() => Cart, (cart) => cart.id)
  @JoinColumn({ name: "cart_id" })
  cart: Cart;

  @ManyToOne(() => Product, (product) => product.id)
  @JoinColumn({ name: "product_id" })
  product: Product;
}
