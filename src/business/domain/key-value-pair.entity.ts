import {v4 as uuidv4} from 'uuid';

export class KeyValuePair {
    public id: string;
    public key: string;
    public value: string;

    constructor(key: string, value: string) {
        this.id = uuidv4();
        this.key = key.toLowerCase();
        this.value = value;
    }
}
