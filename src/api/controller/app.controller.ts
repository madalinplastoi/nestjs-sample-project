import {Controller, Get} from '@nestjs/common';
import {AppService} from '../../business/service/app.service';
import {ApiOkResponse, ApiOperation, ApiTags} from "@nestjs/swagger";
import {AppConstants} from "../../app.constants";

@ApiTags('app')
@Controller('')
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get('')
    @ApiOperation({
        operationId: 'getHello',
        summary: 'Hello world API',
        description: 'Outputs a Hello World string'
    })
    @ApiOkResponse({
        description: AppConstants.SUCCESSFUL_RESPONSE,
        type: String
    })
    getHello(): string {
        return this.appService.getHello();
    }
}
