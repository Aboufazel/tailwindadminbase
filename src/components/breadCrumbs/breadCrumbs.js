import {Link} from "react-router-dom";
import useReviewTabStore from "../../zustand/reviewTabStore";

const BreadCrumbs = ({data , type='link'}) => {

    const updataStepView = useReviewTabStore(state => state.updateReviewStep);
    const LinkRender = ()=>{


        return(
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


    const ActionButtonRender = ()=>{
        return(
            <div className={"flex flex-row items-center"}>
                {data.map((items  , index)=> (
                    <div onClick={()=>updataStepView(items.link)} key={"bread-crumbs-link" + items.id + index}
                          className={`cursor-pointer ${index === (data.length) - 1 ? "text-text-color-1 font-bold" : "text-text-color-2 hover:text-primary-main cursor-pointer font-bold"} `}>
                        {items.title}
                        <span key={items.id + index}
                              className={`${index === (data.length) - 1 ? "hidden" : ""} mx-1 text-text-color-3`}>/</span>
                    </div>
                ))}
            </div>
        )
    }

    const  breadTypeView = {
        'link': <LinkRender/>,
        'button':<ActionButtonRender/>
    }


    return(
        data &&
            breadTypeView[type]
    )
}

export default BreadCrumbs;