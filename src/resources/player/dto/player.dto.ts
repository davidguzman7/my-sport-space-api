import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePlayerDTO {
    @IsString()
    @IsOptional()
    name: string;
    @IsNumber()
    @IsNotEmpty()
    position: number;
    @IsNumber()
    speed: number;
    @IsNumber()
    strength: number;
    @IsNumber()
    ability: number;
    @IsNumber()
    effectiveness: number;
    @IsNumber()
    fieldVision: number;
}