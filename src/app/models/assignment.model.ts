export class IAssignment {
    type?: string;
    subject?: string;
    requestDate?: Date;
    dueDate?: Date | string;
    description?: string;
    status?: string;
    grade?: number;
}