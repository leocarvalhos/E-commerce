import { Injectable } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { MerchantsService } from "src/merchants/merchants.service";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private merchantService: MerchantsService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findUserByEmail(email);
    const validPassword = await bcrypt.compare(password, user.password);
    if (user && validPassword) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(req: any) {
    const { email, id, first_name, last_name } = req.user;
    const payload = { email, sub: id, first_name, last_name };
    return {
      user: req.user,
      token: this.jwtService.sign(payload),
      merchant: await this.merchantService.profile(id),
    };
  }
}
