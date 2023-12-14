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
        name: "action",
        title: "عملیات",
        render: () => (<ReviewTabsActionButton/>),
    },
]

export const codingAccountMainsTableHead = [
    {
        name: "accountGeneralCode",
        title: "کد",
        render: (row) => row.accountGeneralCode
    },
    {
        name: "accountGeneralName",
        title: "نام حساب کل",
        render: (row) => row.accountGeneralName,
    },
    {
        name: "accountNature",
        title: "ماهیت",
        render: (row) => (row.accountNature === 0 ? 'بدهکار' : 'بستانکار'),
    },
    {
        name: "balanceSheetType",
        title: "نوع",
        render: (row) => (row.balanceSheetType === 1 ? 'دائم' : 'موقت'),
    },
    {
        name: "action",
        title: "عملیات",
        render: () => (<ReviewTabsActionButton/>),
    },
]

export const codingAccountSubsidiaryTableHead = [
    {
        name: "accountSubsidiaryCode",
        title: "کد",
        render: (row) => row.accountSubsidiaryCode
    },
    {
        name: "accountSubsidiaryName",
        title: "نام حساب معین",
        render: (row) => row.accountSubsidiaryName,
    },
    {
        name: "accountNature",
        title: "ماهیت",
        render: (row) => (row.accountNature === 0 ? 'بدهکار' : 'بستانکار'),
    },
    {
        name: "balanceSheetType",
        title: "نوع",
        render: (row) => (row.balanceSheetType === 1 ? 'دائم' : 'موقت'),
    },
    {
        name: "action",
        title: "عملیات",
        render: () => (<ReviewTabsActionButton/>),
    },
]


