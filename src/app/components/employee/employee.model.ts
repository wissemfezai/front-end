import { Client } from "app/components/account-clients/client/client.model";
import { User, UserCivility } from "app/components/user/user.model";

export class Employee {
    id?: number;
    civility: UserCivility;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    createdBy?: string;
    createdDate?: Date;
    lastModifiedBy?: string;
    lastModifiedDate?: Date;
    isArchived?: Boolean;
    archivedDate?: Date;
    version?: number;
    user?: User;
    clientsBilling: Client[];
    clientsDelivery: Client[];
}
