import Buttons from "../../components/globals/Buttons";
import {useAllData} from "../../hooks/useCrud";

const UserList = () => {

    const {isLoading , data} = useAllData("all user")

    return(
        <div className={"flex flex-col items-center gap-10 p-10 w-full"}>

            <div className={"flex flex-row w-full"}>
                <Buttons icon={true} rounded={true}>
                    {"افزودن کاربر جدید"}
                </Buttons>
            </div>

            <div className={"flex flex-row justify-center flex-wrap gap-5 items-center w-full"}>
                {
                    isLoading ? "...loading":
                        data.data.data.map(items => (
                            <div key={items.email} className={"flex flex-row gap-3 rounded-[25px] w-5/12 p-5  bg-white items-center"}>
                                <img src={items.avatar} alt={items.email} className={"w-[65px] h-[65px] rounded-full"}/>
                                <p className={"font-bold text-primary-600"}>
                                    {items.first_name + items.last_name}
                                   <span className={"font-medium text-text-color-1 mt-2 block"}>{items.email}</span>
                                </p>
                            </div>
                        ))
                }
            </div>
        </div>
    )
}

export default UserList;