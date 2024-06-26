import { getAllUsers } from "./Api/api";
import { User, Response } from "../types";

export async function signIn(email: string, senha: string): Promise<Response> {
    const users = await getAllUsers();

    if (users) {
        const user = users.find((user: User) => user.email === email && user.senha === senha);
        if (user) {
            return { user };
        }
    }

    return { user : null };
}