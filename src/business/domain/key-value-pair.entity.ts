import {v4 as uuidv4} from 'uuid';

export class KeyValuePair {
    id: string;
    key: string;
    value: string;

    constructor(key: string, value: string) {
        this.id = uuidv4();
        this.key = key.toLowerCase();
        this.value = value;
    }
}
