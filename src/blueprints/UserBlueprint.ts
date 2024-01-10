export class UserBlueprint {
    private _id!: string;
    private _firstName!: string;
    private _lastName!: string;
    private _email!: string;
    private _password!: string;

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }
    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }
    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }
    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    public setPassword(password: string)
    {
        this._password = password;
    }
}