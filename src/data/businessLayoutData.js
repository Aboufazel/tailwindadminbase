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
        name: "mobile",
        title: "شماره همراه",
        render: (row) => row.mobile,
    },
    {
        name: "status",
        title: "وضعیت",
        render: (row) => (row.status === 1 ? "فعال" : "غیر فعال"),
    },
]

export const businessBreadCrumbsData = [
    {id: "business", title: "داشبورد", link: "/main"},
    {id: "business", title: "کسب و کارها", link: "#"},
]