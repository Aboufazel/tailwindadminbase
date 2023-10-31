import {create} from "zustand";

const popupDataStore = create((set)=>({
    popupBodyData:[],
    updatePopupBodyData:(popupBodyData) => set(() => ({ popupBodyData: popupBodyData })),
}))

export default popupDataStore;