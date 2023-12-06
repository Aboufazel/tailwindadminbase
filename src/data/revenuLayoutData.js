import {routes} from "./routes";

export const revenueModelTableHeaderData = [
    {
        name: "revenueModelCode",
        title: "کد",
        render: (row) => row.revenueModelCode
    },
    {
        name: "revenueModelName",
        title: "نام مدل درآمدی",
        render: (row) => row.revenueModelName,
    },
    {
        name: "revenueModelType",
        title: "پلن های درآمدی",
        render: (row) => row.revenueModelType,
    },
    {
        name: "fiscalYearLimit",
        title: "محدودیت حساب مالی",
        render: (row) => row.fiscalYearLimit,
    },
    {
        name: "isActive",
        title: "وضعیت",
        render: (row) => (row.isActive === 1 ? "فعال" : "غیر فعال"),
    }
]

export const RevenueModelBreadCrumbsData = [
    {id: "business", title: "داشبورد", link: routes.main},
    {id: "business", title: "مدل های درآمدی", link: "#"},
]