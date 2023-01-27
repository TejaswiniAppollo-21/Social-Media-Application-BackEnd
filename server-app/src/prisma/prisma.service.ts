import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor(){
        super({
            datasources: {
                db: {
                    url: "postgresql://postgres:TejuSree@2126@localhost:5432/insta_users?schema=public"
                }
            }
        })
    }
}
