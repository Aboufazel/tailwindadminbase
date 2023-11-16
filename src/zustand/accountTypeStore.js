import {create} from "zustand";

const useAccountTypeStore = create((set)=>({
    accountTypeId: '',
    editStep:false,
    deleteStep:false,
    specLinkStep:false,
    specCardAction:false,
    manageSpecCardAction:()=>set((state)=>({specCardAction:state.specCardAction !== true})),
    manageSpecLinkStep:()=>set((state)=>({specLinkStep:state.specLinkStep !== true})),
    updateDeleteStep:()=>set((state)=>({deleteStep:state.deleteStep !== true})),
    manageEditStep:()=>set((state)=>({editStep:state.editStep !== true})),
    updateAccountTypeId:(accountTypeId)=>set(()=>({accountTypeId:accountTypeId})),
}))

export default useAccountTypeStore;