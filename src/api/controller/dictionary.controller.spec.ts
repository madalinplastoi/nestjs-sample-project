import {Test, TestingModule} from '@nestjs/testing';
import {DictionaryController} from "./dictionary.controller";
import {DictionaryService} from "../../business/service/dictionary.service";
import {UpsertKeyValuePairDto} from "../dto/upsert-key-value-pair.dto";
import {KeyValuePair} from "../../business/domain/key-value-pair.entity";

describe('DictionaryController', () => {
    let controller: DictionaryController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [DictionaryController],
            providers: [DictionaryService],
        }).compile();

        controller = app.get<DictionaryController>(DictionaryController);
    });

    describe('root', () => {
        it('should return empty dictionary entries array', () => {
            expect(controller.getAllKeyValuePairs()).toEqual([]);
        });

        it('should successfully create a dictionary entry', () => {
            const dto: UpsertKeyValuePairDto = new UpsertKeyValuePairDto();
            dto.key = 'Some Key';
            dto.value = 'some value';

            const kvp: KeyValuePair = controller.registerKeyValuePair(dto);
            console.log(`Registered key value pair is\n${JSON.stringify(kvp, null, 2)}`);
            expect(kvp).toBeDefined();
            expect(kvp.id).toBeDefined();
            expect(kvp.key).toEqual(dto.key.toLowerCase());
            expect(controller.getAllKeyValuePairs().length).toEqual(1);
        });
    });
});
