import { Column, Table, Model, NotNull, DataType } from "sequelize-typescript";

@Table({tableName: "File"})
export default class FileStore extends Model{
    @Column filename!: string;
    @Column serverUrl!: string;
    @Column filePath!: string;
    @Column json?: string;
    @Column isDelete?: boolean;
    @Column forDelete?: boolean;
}
