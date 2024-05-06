import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AdminService } from './admin.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateSchoolDto } from './dto/create-school.dto';

@ApiTags('Admin Section')
@Controller('admin')
export class AdminController {
    constructor(private adminService: AdminService){}
    @Get('/')
    getAllSchools(){
        return this.adminService.getAllSchools()
    }

    //Create School
    @Post('/create-school')
    @UsePipes(ValidationPipe)
    createSchool(@Body() schoolData: CreateSchoolDto){
        return {data: schoolData}
    }
}
