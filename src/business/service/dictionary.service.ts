import {Injectable} from "@nestjs/common";
import {KeyValuePair} from "../domain/key-value-pair.entity";

@Injectable()
export class DictionaryService {
    private data: Array<KeyValuePair> = [];

    public getAllKeyValuePairs(): Array<KeyValuePair> {
        return this.data.map(x => x);
    }

    public getKeyValuePairByKey(key: string): KeyValuePair {
        return this.data.find(x => x.key === key.toLowerCase());
    }

    public registerKeyValuePair(key: string, value: string): KeyValuePair {
        const found = this.getKeyValuePairByKey(key);
        if (found) {
            found.value = value;
            return found;
        } else {
            const kvp = new KeyValuePair(key, value);
            this.data.push(kvp);
            return kvp;
        }
    }

    public deleteKeyValuePairByKey(key: string): boolean {
        let removed = false;
        const found = this.getKeyValuePairByKey(key);
        if (found) {
            const index = this.data.indexOf(found, 0);
            if (index > -1) {
                this.data.splice(index, 1);
                removed = true;
            }
        }
        return removed;
    }
}
