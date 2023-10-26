import {create} from 'zustand'

const popupStore = create((set)=>({
    accountType:false,
    manageOpenPopUp:()=>set((state)=>({accountType:state.accountType !== true})),
}))

export default popupStore;