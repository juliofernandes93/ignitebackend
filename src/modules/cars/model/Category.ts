import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4} from 'uuid'

@Entity("categoria")
class Category{

    @PrimaryColumn()
    readonly id?: string

    @Column()
    name: string

    @Column()
    description: string

    @CreateDateColumn()
    created_at: Date

    constructor(){
        if(!this.id){
            this.id = uuidV4()
        }
    }
}

export {Category}