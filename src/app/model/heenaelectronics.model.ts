namespace HeenaElectronics {
    export interface User {
        email: String;
        name: string;
        password: string;
        role: string;
    }

    export interface Customer {
        id: String;
        name: string;
        contactNumber: string;
        address: string;
        electronicCard: ElectronicCard;
        allHistory: History[];
        createdDate: Date;
    }

    export interface ElectronicCard {
        number: string;
        point: string;
        type: string;
        redeemPoint: string;
        addPoint: string;
    }

    export interface History {
        createdDate: Date;
        redeemPoint: string;
        addPoint: string;
    }
}
