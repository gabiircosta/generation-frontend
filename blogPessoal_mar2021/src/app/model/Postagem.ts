import { User } from "./user";

export class Postagem {
    public id: number;
    public titulo: string;
    public texto: string;
    public data: Date;
    public user: User;
}