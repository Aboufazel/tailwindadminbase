import {create} from "zustand";

const useAccountPersonStore = create((set)=>({
    showFormStatus:false,
    accountTypeId:'',
    accountTypeName:'',
    accountPersonId:'',
    editPersonStep:false,
    deletePersonStep:false,
    specPersonLinkStep:false,
    specPersonCardAction:false,
    canPersonDeleteStep:false,
    manageCanDeletePersonStep:()=>set((state)=>({canPersonDeleteStep:state.canPersonDeleteStep !== true})),
    managePersonSpecCardAction:()=>set((state)=>({specPersonCardAction:state.specPersonCardAction !== true})),
    manageDeleteStep:()=>set((state)=>({deletePersonStep:state.deletePersonStep !== true})),
    managePersonSpecLinkStep:()=>set((state)=>({specPersonLinkStep:state.specPersonLinkStep !== true})),
    managePersonEditStep:()=>set((state)=>({editPersonStep:state.editPersonStep !== true})),
    updateAccountPersonId:(accountPersonId) => set(() => ({ accountPersonId: accountPersonId })),
    manageShowFormStatus:()=>set((state)=>({showFormStatus:state.showFormStatus !== true})),
    updatePersonAccountTypeId:(accountTypeId) => set(() => ({ accountTypeId: accountTypeId })),
    updateAccountTypeName:(accountTypeName) => set(() => ({ accountTypeName: accountTypeName })),
}))

export default useAccountPersonStore;