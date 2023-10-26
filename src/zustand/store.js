import {create} from 'zustand'

const useStore = create((set)=>({
    sideMenuStatus:false,
    manageOpenAndCloseSide: ()=>set((state)=>({sideMenuStatus:state.sideMenuStatus !== true})),
}))


export default useStore;