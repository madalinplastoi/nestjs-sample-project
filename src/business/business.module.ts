import {DictionaryService} from "./service/dictionary.service";
import {Module} from "@nestjs/common";
import {AppService} from "./service/app.service";

@Module({
    imports: [],
    providers: [
        AppService,
        DictionaryService
    ],
    exports: [
        AppService,
        DictionaryService
    ]
})
export class BusinessModule {
}
