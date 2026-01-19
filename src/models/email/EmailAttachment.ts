/**
 * Represents an email attachment with its file details and optionally, a content ID (CID).
 *
 * Properties:
 * - `fileName`: The name of the attachment file.
 * - `path`: The filesystem path or URL to the attachment file.
 * - `cid`: Optional content ID (CID) for inline embedding in emails.
 */
export class EmailAttachment {
  private _fileName: string;
  private _path: string;
  private _cid?: string;

  /**
   * Creates a new EmailAttachment instance with the specified details.
   *
   * @param attachment Initialisation object for the attachment.
   * @param attachment.fileName Attachment file name.
   * @param attachment.path Filesystem path or URL to the attachment.
   * @param attachment.cid Optional content ID (CID) for inline embedding in emails.
   */
  constructor(attachment: { fileName: string; path: string; cid?: string }) {
    this._fileName = attachment.fileName;
    this._path = attachment.path;
    this._cid = attachment.cid;
  }

  get fileName(): string {
    return this._fileName;
  }

  set fileName(value: string) {
    this._fileName = value;
  }

  get path(): string {
    return this._path;
  }

  set path(value: string) {
    this._path = value;
  }

  get cid(): string | undefined {
    return this._cid;
  }

  set cid(value: string) {
    this._cid = value;
  }
}
