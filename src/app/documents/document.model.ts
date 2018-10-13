export class Document {
    public id;
    public name;
    public description;
    public url;
    // public children;

    constructor(id, name, description, url){
        this.id = id;
        this.name = name;
        this.description = description;
        this.url = url;
        // this.children = children;
    }
}