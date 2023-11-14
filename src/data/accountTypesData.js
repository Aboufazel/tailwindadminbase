import ReviewTabsActionButton from "../components/globals/actionButton/reviewTabsActionButton";

export const codingAccountTypesTableHead = [
    {
        name: "accountTypeCode",
        title: "کد",
        render: (row) => row.accountTypeCode
    },
    {
        name: "accountTypeName",
        title: "نام حساب معین",
        render: (row) => row.accountTypeName,
    },
    {
        name: "isAutomatic",
        title: "ماهیت",
        render: (row) => (row.isAutomatic === true ? 'اتوماتیک' : 'غیر اتوماتیک'),
    },
    {
        name: "isFloat",
        title: "نوع",
        render: (row) => (row.isFloat === true ? 'شناور' : 'غیر شناور'),
    },
    {
        name: "isActive",
        title: "وضعیت",
        render: (row) => (row.isActive === true ? "فعال" : "غیر فعال"),
    },
    {
        name: "action",
        title: "عملیات",
        render: () => (<ReviewTabsActionButton/>),
    },
]