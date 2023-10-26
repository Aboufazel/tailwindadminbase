import {create} from 'zustand'

const popupStore = create((set)=>({
    popupStatus:false,
    manageOpenPopUp:()=>set((state)=>({popupStatus:state.popupStatus !== true})),
}))

export default popupStore;