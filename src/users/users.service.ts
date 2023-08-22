import { Injectable } from '@nestjs/common';
import { Role } from 'src/auth/role.enum';

export type User = {
    userId: number,
    username: string,
    password: string
    roles: Role[]
}

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            userId: 1,
            username: "johannsson",
            password: "1234",
            roles: [Role.User]
        },
        {
            userId: 2,
            username: "scarlett",
            password: "123ee4",
            roles: [Role.Admin, Role.User]
        }
    ]
    
    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(u => u.username === username);
    }
}
