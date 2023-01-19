import { IsString } from "class-validator";

export class CreateCategoryDto {
  @IsString()
  description: string;
}
