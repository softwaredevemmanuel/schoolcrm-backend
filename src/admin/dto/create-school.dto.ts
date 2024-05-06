import { ArrayMinSize, IsNotEmpty } from 'class-validator';

export class CreateSchoolDto {
    @IsNotEmpty({message: "Title cannot be empty"})
    name: string;

    @ArrayMinSize(1, { message: "At least one course must be provided" })
    courses: string[];

    monday?: boolean = false;
    tuesday?: boolean = false;
    wednesday?: boolean = false;
    thursday?: boolean = false;
    friday?: boolean = false;
    saturday?: boolean = false;
    sunday?: boolean = false;

    @IsNotEmpty({message: "Phone number cannot be empty"})
    phone: string;

    duration: string;
    courseFee: number;
    schoolAddress: string;
}
