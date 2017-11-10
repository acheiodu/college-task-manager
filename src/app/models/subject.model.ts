import { IAssignment } from './assignment.model';
import { IGrade } from './grade.model';

export class ISubject {
    name?: string;
    professor?: string;
    assignments?: Array<IAssignment>;
    grade?: IGrade;
}