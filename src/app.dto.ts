import { IsString } from "class-validator";


export class testDto {
    @IsString()
    public readonly name:string
}