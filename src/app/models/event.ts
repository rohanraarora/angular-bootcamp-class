import { Registration } from './registration';

export interface Event {
    _id: string;
    title: string;
    description: string;
    date: string;
    registrations: Registration[];
}
