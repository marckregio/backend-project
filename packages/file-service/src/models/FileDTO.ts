export class FileDTO {
    filename!: string;
    serverUrl?: string;
    filePath!: string;
    json?: string;
}

export class ManyFileDTO {
    files?: Array<FileDTO>;
}