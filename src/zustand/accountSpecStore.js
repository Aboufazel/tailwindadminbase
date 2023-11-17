import {create} from "zustand";

const useAccountSpecStore = create((set)=>({
    editSpecStep:false,
    deleteSpecStep:false,
    manageEditSpecStep:()=>set((state)=>({editSpecStep:state.editSpecStep !== true})),
    manageDeleteSpecStep:()=>set((state)=>({deleteSpecStep:state.deleteSpecStep !== true})),
}))

export default useAccountSpecStore;