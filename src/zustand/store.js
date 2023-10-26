import {create} from 'zustand'

const useStore = create((set)=>({
    sideMenuStatus:false,
    defineTabs:'',
    manageOpenAndCloseSide: ()=>set((state)=>({sideMenuStatus:state.sideMenuStatus !== true})),
    updateTabs: (defineTabs) => set(() => ({ defineTabs: defineTabs })),
}))


export default useStore;