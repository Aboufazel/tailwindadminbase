export const codingAccountTypesTableHead = [
    {
        name: "accountDetailTypeCode",
        title: "کد",
        render: (row) => row.accountDetailTypeCode
    },
    {
        name: "accountDetailTypeName",
        title: "نام حساب معین",
        render: (row) => row.accountDetailTypeName,
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
        name: "type",
        title: "نام یکتا",
        render: (row) => (row.type),
    },
]