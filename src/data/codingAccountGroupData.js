import ReviewTabsActionButton from "../components/globals/actionButton/reviewTabsActionButton";

export const codingAccountGroupTableHead = [
    {
        name: "accountGroupCode",
        title: "کد",
        render: (row) => row.accountGroupCode
    },
    {
        name: "accountGroupName",
        title: "نام گروه حساب",
        render: (row) => row.accountGroupName,
    },
    {
        name: "isActive",
        title: "وضعیت",
        render: (row) => (row.isActive === true ? "فعال" : "غیر فعال"),
    },
    {
        name: "action",
        title: "عملیات",
        render: (row) => (<ReviewTabsActionButton/>),
    },
]

export const codingAccountMainsTableHead = [
    {
        name: "accountMainCode",
        title: "کد",
        render: (row) => row.accountMainCode
    },
    {
        name: "accountMainName",
        title: "نام حساب کل",
        render: (row) => row.accountMainName,
    },
    {
        name: "instinct",
        title: "ماهیت",
        render: (row) => (row.instinct === 1 ? 'بدهکار' : 'بستانکار'),
    },
    {
        name: "type",
        title: "نوع",
        render: (row) => (row.type === 1 ? 'دائم' : 'موقت'),
    },
    {
        name: "isActive",
        title: "وضعیت",
        render: (row) => (row.isActive === true ? "فعال" : "غیر فعال"),
    },
    {
        name: "action",
        title: "عملیات",
        render: (row) => (<ReviewTabsActionButton/>),
    },
]

export const codingAccountSpecTableHead = [
    {
        name: "accountSpecCode",
        title: "کد",
        render: (row) => row.accountSpecCode
    },
    {
        name: "accountSpecName",
        title: "نام حساب معین",
        render: (row) => row.accountSpecName,
    },
    {
        name: "instinct",
        title: "ماهیت",
        render: (row) => (row.instinct === 1 ? 'بدهکار' : 'بستانکار'),
    },
    {
        name: "type",
        title: "نوع",
        render: (row) => (row.type === 1 ? 'دائم' : 'موقت'),
    },
    {
        name: "isActive",
        title: "وضعیت",
        render: (row) => (row.isActive === true ? "فعال" : "غیر فعال"),
    },
    {
        name: "action",
        title: "عملیات",
        render: (row) => (<ReviewTabsActionButton/>),
    },
]


