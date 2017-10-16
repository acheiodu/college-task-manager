import { Assignments } from './assignment.model';
import { Grade } from './grade.model';

export class Subject {
    name: string;
    professor: string;
    assignments: Array<Assignments>;
    grade: Grade;
}