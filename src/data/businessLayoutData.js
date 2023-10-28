export const businessTableHead = [
    {
        name: "id",
        title: "ID",
        render: (row) => row.id
    },
    {
        name: "username",
        title: "Username",
        render: (row) => row.username,
    },
    {name: "email", title: "Email", render: (row) => row.email},
    {
        name: "isAdmin",
        title: "Is Admin",
        render: (row) => (row.isAdmin ? "Yes" : "No"),
    },
]

export const businessBreadCrumbsData = [
    {id: "business", title: "داشبورد", link: "/main"},
    {id: "business", title: "کسب و کارها", link: "#"},
]