import {create} from "zustand";

const useRevenuePlanPriceStore = create((set)=>({
    editRevenuePlanPriceLayout:false,
    deleteRevenuePlanPriceLayout:false,
    manageEditRevenuePlanPriceLayout:()=>set((state)=>({editRevenuePlanPriceLayout:state.editRevenuePlanPriceLayout !== true})),
    manageDeleteRevenuePlanPriceLayout:()=>set((state)=>({deleteRevenuePlanPriceLayout:state.deleteRevenuePlanPriceLayout !== true})),
}))

export default useRevenuePlanPriceStore;