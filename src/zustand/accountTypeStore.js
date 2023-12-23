import {create} from "zustand";

const useAccountTypeStore = create((set)=>({
    accountTypeId: '',
    accountSpecId:'',
    editLinkAction:false,
    editStep:false,
    deleteStep:false,
    specLinkStep:false,
    specCardAction:false,
    canDeleteStep:false,
    canDeleteData:'',
    manageEditLinkAction:()=>set((state)=>({editLinkAction:state.editLinkAction !==true})),
    updateAccountSpecId:(accountSpecId)=>set(()=>({accountSpecId:accountSpecId})),
    manageCanDeleteStep:()=>set((state)=>({canDeleteStep:state.canDeleteStep !== true})),
    updateCanDeleteData:(canDeleteData)=>set(()=>({canDeleteData:canDeleteData})),
    manageSpecCardAction:()=>set((state)=>({specCardAction:state.specCardAction !== true})),
    manageSpecLinkStep:()=>set((state)=>({specLinkStep:state.specLinkStep !== true})),
    updateDeleteStep:()=>set((state)=>({deleteStep:state.deleteStep !== true})),
    manageEditStep:()=>set((state)=>({editStep:state.editStep !== true})),
    updateAccountTypeId:(accountTypeId)=>set(()=>({accountTypeId:accountTypeId})),
}))

export default useAccountTypeStore;