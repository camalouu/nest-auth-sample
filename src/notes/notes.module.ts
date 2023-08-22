import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'src/auth/roles.guard';

@Module({
    controllers: [NotesController],
    providers: [
        {
            provide: APP_GUARD,
            useClass: RolesGuard
        }
    ]
})
export class NotesModule { }
