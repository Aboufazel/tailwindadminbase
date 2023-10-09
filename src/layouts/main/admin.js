import {useAllData} from "../../hooks/useCrud";

const Admin = () => {

    const {data:allUser , isLoading} = useAllData("allUser");


    return(
        <>
                <div className={"cursor-pointer"}>
                    {
                        isLoading ? "... loading" : allUser.data.data.map(items => (
                            <div>{items.first_name}</div>
                        ))
                    }
                </div>
        </>
    )
}


export default Admin;