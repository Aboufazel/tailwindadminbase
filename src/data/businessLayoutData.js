export const businessTableHead = [
    {
        name: "id",
        title: "کد",
        render: (row) => row.id
    },
    {
        name: "jobs",
        title: "نام کسب و کار",
        render: (row) => row.jobs,
    },
    {
        name: "status",
        title: "وضعیت",
        render: (row) => (row.status ? "فعال" : "غیر فعال"),
    },
]

export const businessBreadCrumbsData = [
    {id: "business", title: "داشبورد", link: "/main"},
    {id: "business", title: "کسب و کارها", link: "#"},
]