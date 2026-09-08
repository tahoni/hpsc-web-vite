import {sanitizeValue} from "@/utils/htmlUtils.ts";
import {EmailAttachment} from "./EmailAttachment.ts";

/**
 * Represents an email message with sender details, subject, consent, preview
 * and optional attachments.
 */
export class EmailMessage {
    private _name: string;
    private _email: string;
    private _subject: string;
    private _preview: string;

    private _content: string;

    private _attachments: EmailAttachment[] = [];
    private _inlineAttachments: EmailAttachment[] = [];

    /**
     * Creates a new EmailMessage instance.
     *
     * @param message - Initialisation object for the email message.
     */
    constructor(message: {
        name?: string;
        email?: string;
        subject?: string;
        preview?: string;
        content?: string;
    }) {
        this._name = sanitizeValue(message.name ?? "").trim();
        this._email = sanitizeValue(message.email ?? "").trim();
        this._subject = sanitizeValue(message.subject ?? "").trim();
        this._preview = sanitizeValue(message.preview ?? "").trim();
        this._content = (sanitizeValue(message.content) ?? "").trim();
        this._attachments = [];
        this._inlineAttachments = [];
    }

    /**
     * Checks if the necessary properties: name, email, subject, preview, and content
     * are valid and non-empty.
     *
     * @returns Returns true if all required properties are non-empty, otherwise false.
     */
    isValid(): boolean {
        return (
            this._name !== "" &&
            this._email !== "" &&
            this._subject !== "" &&
            this._preview !== "" &&
            this._content !== ""
        );
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = sanitizeValue(value).trim();
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = sanitizeValue(value).trim();
    }

    get subject(): string {
        return this._subject;
    }

    set subject(value: string) {
        this._subject = sanitizeValue(value).trim();
    }

    get preview(): string {
        return this._preview;
    }

    set preview(value: string) {
        this._preview = sanitizeValue(value).trim();
    }

    get content(): string {
        return this._content;
    }

    set content(value: string) {
        this._content = sanitizeValue(value).trim();
    }

    get attachments(): EmailAttachment[] {
        return this._attachments;
    }

    set attachments(value: EmailAttachment[]) {
        this._attachments = value;
    }

    get inlineAttachments(): EmailAttachment[] {
        return this._inlineAttachments;
    }

    set inlineAttachments(value: EmailAttachment[]) {
        this._inlineAttachments = value;
    }
}
