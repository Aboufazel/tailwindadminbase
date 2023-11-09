import {create} from 'zustand'

const useStore = create((set)=>({
    sideMenuStatus:false,
    defineTabs:'',
    reloadData:false,
    codingTitle:'',
    codingKindId:'',
    updateCodingKindId:(codingKindId) => set(() => ({ codingKindId: codingKindId })),
    updateCodingTitle:(codingTitle) => set(() => ({ codingTitle: codingTitle })),
    manageReloadData:()=>set((state)=>({reloadData:state.reloadData !== true})),
    manageOpenAndCloseSide: ()=>set((state)=>({sideMenuStatus:state.sideMenuStatus !== true})),
    updateTabs: (defineTabs) => set(() => ({ defineTabs: defineTabs })),
}))


export default useStore;