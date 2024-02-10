import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { DefaultControllerProperties } from 'src/types/DefaultControllerProperties';
import { UserProperties } from 'src/types/user/UserProperties';
import { AuthGuard } from '../auth/auth.guard';
import { UserService } from './user.service';

@Controller('/user')
export class UserController implements DefaultControllerProperties {
  constructor(private readonly userService: UserService) {}

  @Get('/:id')
  getById(@Param('id') id: string): Promise<UserProperties> {
    return this.userService.getById(id);
  }

  @Get()
  getAll(@Param('id') page: number) {
    return this.userService.getAll(page);
  }

  @UseGuards(AuthGuard)
  @Post()
  save(@Body() value: UserProperties) {
    this.userService.save(value);
  }

  @UseGuards(AuthGuard)
  @Put('/:id')
  update(@Param('id') id: string, @Body() value: UserProperties) {
    this.userService.update(id, { ...value });
  }

  @UseGuards(AuthGuard)
  @Delete('/:id')
  delete(@Param('id') id: string) {
    this.userService.delete(id);
  }
}
