import {routes} from "./routes";

export const revenueModelTableHeaderData = [
    {
        name: "revenueId",
        title: "کد",
        render: (row) => row.revenueId
    },
    {
        name: "revenueName",
        title: "نام مدل درآمدی",
        render: (row) => row.revenueName,
    },
    {
        name: "revenuePlans",
        title: "پلن های درآمدی",
        render: (row) => row.revenuePlans,
    },
    {
        name: "status",
        title: "وضعیت",
        render: (row) => (row.status === 1 ? "فعال" : "غیر فعال"),
    },
]

export const RevenueModelBreadCrumbsData = [
    {id: "business", title: "داشبورد", link: routes.main},
    {id: "business", title: "مدل های درآمدی", link: "#"},
]