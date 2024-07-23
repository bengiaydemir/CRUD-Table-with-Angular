export interface Customer {
    id: number;
    name: string;
    lastname: string;
    age: number;
    subscriptionType: string;
    contactNumber: number;
    createdBy: string;
    createdOn: string | Date;
    updatedOn: string | Date;
    updatedBy: string;

}