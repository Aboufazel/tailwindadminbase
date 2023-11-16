import {create} from "zustand";

const useAccountGroupStore = create((set)=>({
   editGroupsStep:false,
   deleteGroupStep:false,
   manageEditGroupStep:()=>set((state)=>({editGroupsStep:state.editGroupsStep !== true})),
   manageDeleteGroupStep:()=>set((state)=>({deleteGroupStep:state.deleteGroupStep !== true})),
}))


export default useAccountGroupStore;