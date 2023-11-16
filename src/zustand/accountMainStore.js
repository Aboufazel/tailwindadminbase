import {create} from "zustand";

const useAccountMainStore = create((set)=>({
    editMainStep:false,
    deleteMainStep:false,
    manageEditMainStep:()=>set((state)=>({editMainStep:state.editMainStep !== true})),
    manageDeleteMainStep:()=>set((state)=>({deleteMainStep:state.deleteMainStep !== true})),
}))


export default useAccountMainStore;