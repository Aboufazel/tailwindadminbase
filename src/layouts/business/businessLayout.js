import BreadCrumbs from "../../components/breadCrumbs/breadCrumbs";
import Tables from "../../components/globals/tables/tables";

const BusinessLayout = () => {
    const breadCrumbsData = [
        {id: "business", title: "داشبورد", link: "/main"},
        {id: "business", title: "کسب و کارها", link: "#"},
    ]

    const tableHead = ["عنوان", "نام", "وضعیت"]
    const tableBody = [
        {
            title: "John Michael",
            job: "Manager",
            status: "فعال",
        },
        {
            title: "Alexa Liras",
            job: "Developer",
            status: "غیر فعال",
        },
        {
            title: "Laurent Perrier",
            job: "Executive",
            status: "قعال",
        },
    ]

    return(
        <>
            <BreadCrumbs data={breadCrumbsData}/>
            <Tables tableHead={tableHead} tableData={tableBody} bodyId={"business"}/>
        </>
    )
}

export default BusinessLayout;