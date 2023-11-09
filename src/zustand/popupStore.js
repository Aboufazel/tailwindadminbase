import {create} from 'zustand'

const popupStore = create((set)=>({
    popupStatus:false,
    popupId:'',
    updatePopupId : (popupId) => set(()=>({popupId:popupId})),
    manageOpenPopUp:()=>set((state)=>({popupStatus:state.popupStatus !== true})),
}))

export default popupStore;