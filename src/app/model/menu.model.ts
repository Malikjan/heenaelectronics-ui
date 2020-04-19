export class Menu {
    public static menu: any[] = [
        {
            analyst: [
                { label: 'Dashboard', key: 'dashboard', icon: 'fa fa-edit' },
                { label: 'Customer', key: 'customer', icon: 'fa fa-edit' },
                { label: 'Report', key: 'report', icon: 'fa fa-edit' }
            ],
            admin: [
                { label: 'Dashboard', key: 'dashboard', icon: 'fa fa-edit' },
                { label: 'Customer', key: 'customer', icon: 'fa fa-edit' },
                { label: 'Report', key: 'report', icon: 'fa fa-edit' }
            ],
            customer: [
                { label: 'Dashboard', key: 'dashboard', icon: 'fa fa-edit' },
                { label: 'Feedback', key: 'feedback', icon: 'fa fa-edit' },
            ]
        }
    ];

    public static getAllMenu(): any[] {
        return this.menu;
    }
}