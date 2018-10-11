export class Message{
    public id;
    public subject;
    public msgText;
    public sender;

    constructor(id, subject, msgText, sender){
        this.id = id;
        this.subject = subject;
        this.msgText = msgText;
        this.sender = sender;
    }
}