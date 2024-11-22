export type TUser = {
    _id: string;
    name: string;
    email: string;
    password: string;
    passwordChangedAt?: Date;
    role: "admin";
    status: "active" | "blocked";
    isDeleted: boolean;
};

interface IResult {
    title: string;
}

export interface IProject {
    company: string;
    year: string;
    title: string;
    results: IResult[];
    link: string;
    image: any;
}