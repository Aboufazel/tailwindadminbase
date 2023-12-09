import React from "react";

const ShowDetailComponents = ({data=[]}) => {

    return(
        <div className={"flex flex-col pt-14"}>
            <div className={'w-full'}>
                <div className={'bg-primary-extraLight p-1 font-medium text-[14px] w-full'}>
                    اطلاعات
                </div>
                <ul className={"mt-5 px-5"}>
                    {
                        data.map((items, index) => (
                            <li key={"accountType-list-info" + index}
                                className={"flex flex-row items-center w-full justify-between mb-3"}>
                                <p>{items?.title}</p>
                                <p className={"font-medium text-text-color-1"}>{items?.data}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default ShowDetailComponents;