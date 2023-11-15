import {create} from "zustand";

const useAccountTypeStore = create((set)=>({
    accountTypeId: '',
    editStep:false,
    manageEditStep:()=>set((state)=>({editStep:state.editStep !== true})),
    updateAccountTypeId:(accountTypeId)=>set(()=>({accountTypeId:accountTypeId})),
}))

export default useAccountTypeStore;