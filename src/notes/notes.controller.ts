import { Body, Req, Get, Controller, Post, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { Role } from 'src/auth/role.enum';
import { Roles } from 'src/auth/roles.decorator';

@Controller('notes')
export class NotesController {
    @Get()
    @Roles(Role.Admin)
    getUserInfo(@Req() req) {
        return req.user
    }
}
