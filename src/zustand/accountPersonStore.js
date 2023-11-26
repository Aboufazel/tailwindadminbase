import {create} from "zustand";

const useAccountPersonStore = create((set)=>({
    showFormStatus:false,
    accountTypeId:'',
    accountTypeName:'',
    accountPersonId:'',
    updateAccountPersonId:(accountPersonId) => set(() => ({ accountPersonId: accountPersonId })),
    manageShowFormStatus:()=>set((state)=>({showFormStatus:state.showFormStatus !== true})),
    updatePersonAccountTypeId:(accountTypeId) => set(() => ({ accountTypeId: accountTypeId })),
    updateAccountTypeName:(accountTypeName) => set(() => ({ accountTypeName: accountTypeName })),
}))

export default useAccountPersonStore;