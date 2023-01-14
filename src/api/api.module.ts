import {Module} from "@nestjs/common";
import {BusinessModule} from "../business/business.module";
import {DictionaryController} from "./controller/dictionary.controller";
import {AppController} from "./controller/app.controller";

@Module({
    imports: [
        BusinessModule,
    ],
    controllers: [
        AppController,
        DictionaryController,
    ]
})
export class ApiModule {
}
