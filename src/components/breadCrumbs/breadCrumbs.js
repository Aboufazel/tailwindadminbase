import {Link} from "react-router-dom";

const BreadCrumbs = ({data}) => {
    return(
        data &&
        <div className={"flex flex-row items-center"}>
            {data.map((items  , index)=> (
                <Link key={"bread-crumbs-link" + items.id + index} to={items.link}
                      className={`${index === (data.length) - 1 ? "text-text-color-1 font-bold cursor-not-allowed " : "text-text-color-2 hover:text-primary-main cursor-pointer font-bold"} `}>
                    {items.title}
                    <span key={items.id + index}
                          className={`${index === (data.length) - 1 ? "hidden" : ""} mx-1 text-text-color-3`}>/</span>
                </Link>
            ))}
        </div>
    )
}

export default BreadCrumbs;