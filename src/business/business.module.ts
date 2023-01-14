import {DictionaryService} from "./service/dictionary.service";
import {Module} from "@nestjs/common";

@Module({
    imports: [],
    providers: [
        DictionaryService
    ],
    exports: [
        DictionaryService
    ]
})
export class BusinessModule {
}
