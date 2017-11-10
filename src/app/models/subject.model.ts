import { Assignments } from './assignment.model';
import { Grade } from './grade.model';

export class ISubject {
    name?: string;
    professor?: string;
    assignments?: Array<Assignments>;
    grade?: Grade;
}