import {create} from 'zustand'

const drawerStore = create((set)=>({
    drawerStatus:false,
    manageOpenDrawer:()=>set((state)=>({drawerStatus:state.drawerStatus !== true})),
}))

export default drawerStore;