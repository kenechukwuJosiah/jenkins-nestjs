import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePlaceDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  country: string;

  @IsString()
  street: string;

  @IsString()
  latitude: string;

  @IsString()
  longitude: string;

  @IsString()
  description: string;
}
