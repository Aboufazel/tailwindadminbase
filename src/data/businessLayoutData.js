export const businessTableHead = [
    {
        name: "businessId",
        title: "کد",
        render: (row) => row.businessId
    },
    {
        name: "businessName",
        title: "نام کسب و کار",
        render: (row) => row.businessName,
    },
    {
        name: "isActive",
        title: "وضعیت",
        render: (row) => (row.isActive === 1 ? "فعال" : "غیر فعال"),
    },
]

export const businessBreadCrumbsData = [
    {id: "business", title: "داشبورد", link: "/main"},
    {id: "business", title: "کسب و کارها", link: "#"},
]