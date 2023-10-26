import {create} from "zustand";

const popupDataStore = create((set)=>({
    popupHeader:"",
    popupBodyData:[],
    updatePopupHeader:(popupHeader) => set(() => ({ popupHeader: popupHeader })),
    updatePopupBodyData:(popupBodyData) => set(() => ({ popupBodyData: popupBodyData })),
}))

export default popupDataStore;