import {Body, Controller, Delete, Get, Param, Post} from "@nestjs/common";
import {ApiOkResponse, ApiOperation, ApiTags} from "@nestjs/swagger";
import {DictionaryService} from "../../business/service/dictionary.service";
import {AppConstants} from "../../app.constants";
import {KeyValuePair} from "../../business/domain/key-value-pair.entity";
import {UpsertKeyValuePairDto} from "../dto/upsert-key-value-pair.dto";

@ApiTags('dictionary')
@Controller('dictionary')
export class DictionaryController {
    constructor(private dictionaryService: DictionaryService) {
    }

    @Get('')
    @ApiOperation({
        operationId: 'getAllKeyValuePairs',
        summary: 'Get all dictionary entries',
        description: 'API description...'
    })
    @ApiOkResponse({
        description: AppConstants.SUCCESSFUL_RESPONSE,
        type: Array<KeyValuePair>
    })
    public getAllKeyValuePairs(): Array<KeyValuePair> {
        return this.dictionaryService.getAllKeyValuePairs();
    }

    @Post('')
    @ApiOperation({
        operationId: 'registerKeyValuePair',
        summary: 'Register a new key value pair',
        description: 'API description...'
    })
    @ApiOkResponse({
        description: AppConstants.SUCCESSFUL_RESPONSE,
        type: KeyValuePair
    })
    public registerKeyValuePair(@Body() dto: UpsertKeyValuePairDto): KeyValuePair {
        return this.dictionaryService.registerKeyValuePair(dto.key, dto.value);
    }

    @Get(':key')
    @ApiOperation({
        operationId: 'getKeyValuePairByKey',
        summary: 'Get one dictionary entry by key',
        description: 'API description...'
    })
    @ApiOkResponse({
        description: AppConstants.SUCCESSFUL_RESPONSE,
        type: KeyValuePair
    })
    public getKeyValuePairByKey(@Param('key') key: string): KeyValuePair {
        return this.dictionaryService.getKeyValuePairByKey(key);
    }

    @Delete(':key')
    @ApiOperation({
        operationId: 'deleteKeyValuePairByKey',
        summary: 'Delete one dictionary entry by key',
        description: 'API description...'
    })
    @ApiOkResponse({
        description: AppConstants.SUCCESSFUL_RESPONSE,
        type: KeyValuePair
    })
    public deleteKeyValuePairByKey(@Param('key') key: string): boolean {
        return this.dictionaryService.deleteKeyValuePairByKey(key);
    }
}
