import {create} from "zustand";

const useRevenueModelStore = create((set)=>({
    addRevenuePlansLayout:false,
    revenueActionLayout:false,
    revenueModelEditLayout:false,
    addRevenueModelLayout:false,
    revenueModelId:'',
    manageAddRevenuePlansLayout:()=>set((state)=>({addRevenuePlansLayout:state.addRevenuePlansLayout !== true})),
    manageRevenueModelEditLayout:()=>set((state)=>({revenueModelEditLayout:state.revenueModelEditLayout !== true})),
    updateRevenueModelId:(revenueModelId) => set(() => ({ revenueModelId: revenueModelId })),
    manageRevenueActionLayout:()=>set((state)=>({revenueActionLayout:state.revenueActionLayout !== true})),
    manageAddRevenueLayout:()=>set((state)=>({addRevenueModelLayout:state.addRevenueModelLayout !== true})),
}))

export default useRevenueModelStore