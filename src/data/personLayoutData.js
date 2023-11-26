export const personsTableHead = [
    {
        name: "defaultPersonCode",
        title: "کد",
        render: (row) => row.defaultPersonCode
    },
    {
        name: "defaultPersonName",
        title: "نام حسساب تفضیلی",
        render: (row) => row.defaultPersonName,
    },
    {
        name: "canDelete",
        title: "وضعیت",
        render: (row) => (row.canDelete === 1 ? "غیرقابل حذف" : "قابل حذف"),
    },
]