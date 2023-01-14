import {Injectable} from '@nestjs/common';
import {AppConstants} from "../../app.constants";

@Injectable()
export class AppService {
    getHello(): string {
        //return 'a different text';
        return AppConstants.HELLO_WORLD_MESSAGE;
    }
}
