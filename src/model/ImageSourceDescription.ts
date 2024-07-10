export class ImageSourceDescription {
    source: string;
    description: string;
    text?: string;

    constructor(source: string, description: string, text?: string) {
        this.source = source;
        this.description = description;
        this.text = text;
    }
}
