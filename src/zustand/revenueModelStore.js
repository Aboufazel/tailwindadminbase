import {create} from "zustand";

const useRevenueModelStore = create((set)=>({
    addRevenuePlansLayout:false,
    revenueActionLayout:false,
    revenuePlansActionLayout: false,
    revenueModelEditLayout:false,
    addRevenueModelLayout:false,
    editRevenuePlanLayout:false,
    deleteRevenuePlanLayout:false,
    deleteRevenueModelLayout:false,
    revenueModelId:'',
    revenuePlansId:'',
    revenuePlanPriceId:'',
    planPriceActionLayout:false,
    managePlanPriceActionLayout:()=>set((state)=>({planPriceActionLayout:state.planPriceActionLayout !== true })),
    updateRevenuePlanPriceId:(revenuePlanPriceId) => set(() => ({ revenuePlanPriceId: revenuePlanPriceId })),
    manageRevenuePlansEditLayout:()=>set((state)=>({editRevenuePlanLayout:state.editRevenuePlanLayout !== true})),
    manageRevenuePlansDeleteLayout:()=>set((state)=>({deleteRevenuePlanLayout:state.deleteRevenuePlanLayout !== true})),
    manageRevenueModelsDeleteLayout:()=>set((state)=>({deleteRevenueModelLayout:state.deleteRevenueModelLayout !== true})),
    updateRevenuePlansId:(revenuePlansId) => set(() => ({ revenuePlansId: revenuePlansId })),
    manageAddRevenuePlansLayout:()=>set((state)=>({addRevenuePlansLayout:state.addRevenuePlansLayout !== true})),
    manageRevenuePlansActionLayout:()=>set((state)=>({revenuePlansActionLayout:state.revenuePlansActionLayout !== true})),
    manageRevenueModelEditLayout:()=>set((state)=>({revenueModelEditLayout:state.revenueModelEditLayout !== true})),
    updateRevenueModelId:(revenueModelId) => set(() => ({ revenueModelId: revenueModelId })),
    manageRevenueActionLayout:()=>set((state)=>({revenueActionLayout:state.revenueActionLayout !== true})),
    manageAddRevenueLayout:()=>set((state)=>({addRevenueModelLayout:state.addRevenueModelLayout !== true})),
}))

export default useRevenueModelStore