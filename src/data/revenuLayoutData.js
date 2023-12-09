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

export const revenuePlansTableHeaderData = [
    {
        name: "revenuePlanCode",
        title: "کد",
        render: (row) => row.revenuePlanCode
    },
    {
        name: "revenuePlanName",
        title: "نام پلن درآمدی",
        render: (row) => row.revenuePlanName,
    },
    {
        name: "isActive",
        title: "وضعیت",
        render: (row) => (row.isActive === 1 ? "فعال" : "غیر فعال"),
    }
]

export const revenuePlanPriceTableHeaderData = [
    {
        name: "revenuePlanPriceCode",
        title: "کد",
        render: (row) => row.revenuePlanPriceCode
    },
    {
        name: "revenuePlanPriceName",
        title: "نام",
        render: (row) => row.revenuePlanPriceName,
    },
    {
        name: "price",
        title: "قیمت",
        render: (row) => `${row.price}تومان `,
    },
    {
        name: "isGift",
        title: "جایزه",
        render: (row) => row.isGift === 1 ? "جایزه فعال" : "جایزه ندارد",
    },
    {
        name: "isInitial",
        title: "میزان اولیه",
        render: (row) => row.isInitial === 1 ? "میزان اولیه دارد" : "میزان اولیه ندارد",
    },
    {
        name: "buyLimit",
        title: "محدودیت کاربر",
        render: (row) => row.buyLimit
    },
    {
        name: "duration",
        title: "مدت زمان",
        render: (row) => row.duration
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