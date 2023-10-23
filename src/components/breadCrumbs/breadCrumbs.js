import {Link} from "react-router-dom";

const BreadCrumbs = ({data}) => {
    return(
        data &&
        <div className={"flex flex-row items-center"}>
            {data.map((items  , index)=>(
                <>
                    <Link key={items.title + index} to={items.link} className={`${index === (data.length)-1? "text-text-color-1 font-bold cursor-not-allowed " : "text-text-color-2 cursor-pointer  font-bold opacity-60"} `}>
                        {items.title}
                    </Link>
                    <span className={`${index === (data.length)-1 ? "hidden" : ""} mx-1 text-text-color-3`}>/</span>
                </>
            ))}
        </div>
    )
}

export default BreadCrumbs;