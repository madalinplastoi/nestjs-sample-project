import {IsNotEmpty} from "class-validator";

export class UpsertKeyValuePairDto {
    @IsNotEmpty({message: "Key cannot be empty"})
    public key: string;
    @IsNotEmpty({message: "Value cannot be empty"})
    public value: string;
}
