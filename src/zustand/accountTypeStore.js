import {create} from "zustand";

const useAccountTypeStore = create((set)=>({
    accountTypeId: '',
    updateAccountTypeId:(accountTypeId)=>set(()=>({accountTypeId:accountTypeId})),
}))

export default useAccountTypeStore;