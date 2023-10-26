const TABLE_HEAD = ["عنوان", "نام", "وضعیت"];
const TABLE_ROWS = [
    {
        name: "John Michael",
        job: "Manager",
        date: "23/04/18",
    },
    {
        name: "Alexa Liras",
        job: "Developer",
        date: "23/04/18",
    },
    {
        name: "Laurent Perrier",
        job: "Executive",
        date: "19/09/17",
    },
    {
        name: "Michael Levi",
        job: "Developer",
        date: "24/12/08",
    },
    {
        name: "Richard Gran",
        job: "Manager",
        date: "04/10/21",
    },
];
const Tables = ({tableData , tableHead}) => {

    return(
            <table className="w-full min-w-max table-auto mt-[40px]">
                <thead>
                <tr>
                    {TABLE_HEAD.map((head) => (
                        <th key={head} className="text-right w-[50px] text-white bg-primary-main p-4">
                            <p  className="font-medium leading-none">
                                {head}
                            </p>
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {TABLE_ROWS.map(({ name, job, date }, index) => (
                    <tr key={name} className="even:bg-blue-gray-50/50">
                        <td className="p-4">
                            <p className="font-normal">
                                {name}
                            </p>
                        </td>
                        <td className="p-4">
                            <p className="font-normal">
                                {job}
                            </p>
                        </td>
                        <td className="p-4">
                            <p className="font-normal">
                                {date}
                            </p>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
    )
}

export default Tables;