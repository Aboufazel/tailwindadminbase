import {create} from "zustand";

const useRevenueModelStore = create((set)=>({
    addRevenueModelLayout:false,
    manageAddRevenueLayout:()=>set((state)=>({addRevenueModelLayout:state.addRevenueModelLayout !== true}))
}))

export default useRevenueModelStore