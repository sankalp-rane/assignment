export interface User {
    id: number,
    address: object;
    name: string,
    username: string,
    website: string,
    phone: number;
    company: { name: string },
    email: string;
}