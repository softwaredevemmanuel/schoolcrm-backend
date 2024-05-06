import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('schools')

export class School extends BaseEntity{
    @PrimaryGeneratedColumn({
        comment: "The school unique identifier"
    })
    id: number;

    @Column({
        type: "varchar"
    })
    name: string;
    
    @Column({
        type: "json",
        nullable: true
    })
    courses: string[];

    @Column({
        type: "boolean",
        default: false
    })
    monday?: boolean;

    @Column({
        type: "boolean",
        default: false
    })
    tuesday?: boolean;

    @Column({
        type: "boolean",
        default: false
    })
    wednesday?: boolean;

    @Column({
        type: "boolean",
        default: false
    })
    thursday?: boolean;

    @Column({
        type: "boolean",
        default: false
    })
    friday?: boolean;

    @Column({
        type: "boolean",
        default: false
    })
    saturday?: boolean;

    @Column({
        type: "boolean",
        default: false
    })
    sunday?: boolean;

    @Column({
        type: "varchar"
    })
    phone: string;

    @Column({
        type: "varchar"
    })
    duration: string;

    @Column({
        type: "integer"
    })
    courseFee: number;

    @Column({
        type: "varchar"
    })
    schoolAddress: string;

}