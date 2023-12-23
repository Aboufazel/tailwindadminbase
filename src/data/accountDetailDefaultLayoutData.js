export const accountDetailDefaultTableHead = [
    {
        name: "accountDetailDefaultCode",
        title: "کد",
        render: (row) => row.accountDetailDefaultCode
    },
    {
        name: "accountDetailDefaultName",
        title: "نام حساب تفضیلی",
        render: (row) => row.accountDetailDefaultName,
    },
    {
        name: "canDelete",
        title: "وضعیت",
        render: (row) => (row.canDelete === 1 ? "غیرقابل حذف" : "قابل حذف"),
    }
]