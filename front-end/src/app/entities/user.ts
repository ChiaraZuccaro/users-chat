export class User {
    public name: string;
    public surname: string;
    public email: string;
    public password: string;
    public phone?: string;
    public options?: { key: string; value: string; }[];
    
    constructor(
        options: {
            name: string;
            surname: string;
            email: string;
            password: string;
            phone?: string;
            options?: {key: string; value: string}[];
        }
    ) {
        this.name = options.name;
        this.surname = options.surname;
        this.email = options.email;
        this.password = options.password;
        this.phone = options.phone ?? '';
        this.options = options.options || [];
    }
}
