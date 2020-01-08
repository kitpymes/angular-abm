import { User } from './user.model';

export class List {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User;
}
