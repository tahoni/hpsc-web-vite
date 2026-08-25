export enum EmailType {
    HTML = "HTML",
    TEXT = "TEXT",
}

export function isEmailType(value: string): value is EmailType {
    return value === EmailType.HTML || value === EmailType.TEXT;
}

export function tryParseEmailType(value: string): EmailType | null {
    const normalized = value.trim().toUpperCase();
    return isEmailType(normalized) ? normalized : null;
}

export function parseEmailType(value: string): EmailType {
    const parsed = tryParseEmailType(value);
    if (parsed !== null) {
        return parsed;
    }

    throw new Error(`Invalid EmailType: "${value}". Expected "HTML" or "TEXT".`);
}
