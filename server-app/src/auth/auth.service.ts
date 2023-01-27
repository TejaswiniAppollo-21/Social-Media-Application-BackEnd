import { Injectable } from "@nestjs/common";
import * as argon from 'argon2';
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";

@Injectable()
export class AuthService {
    constructor(private prismaService: PrismaService) {}

    async signup(dto: AuthDto) {
        const passwordHash = await argon.hash(dto.password);

        const user = await this.prismaService.user.create({
            data: {
                userName: dto.userName,
                email: dto.email,
                password: passwordHash,
                fullName: dto.fullName,
            }
        })
        delete user.password;
        return user;
    }

    signin() {
        return "Signing in from service";
    }
}