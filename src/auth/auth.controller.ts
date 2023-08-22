import { Body, Req, Get, Controller, Post, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express'
import { AuthGuard } from './auth.guard';
import { Public } from './public.decorator';

interface SignInDto {
    password: string,
    username: string
}

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('login')
    async signIn(@Body() signInDto: SignInDto) {
        return await this.authService.signIn(signInDto.username, signInDto.password)
    }

    // @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
    @Get('profile')
    getProfile(@Req() req) {
        return req.user
    }
}
