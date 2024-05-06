import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
    getAllSchools(){
        return [1, 2, 3, "all schools"]
    }
}
