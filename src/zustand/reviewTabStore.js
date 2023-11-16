import {create} from "zustand";

const useReviewTabStore = create((set)=>({
    reviewStep:'coding-account-group',
    accountGroupName: '',
    accountMainName: '',
    accountSpecName: 'حساب های معین',
    codingAccountGroupId:'',
    codingAccountMainId:'',
    codingAccountSpecId:'',
    actionLayout:false,
    updateAccountGroupName:(accountGroupName)=>set(()=>({accountGroupName:accountGroupName})),
    updateAccountMainName:(accountMainName)=>set(()=>({accountMainName:accountMainName})),
    manageActionLayout:()=>set((state)=>({actionLayout:state.actionLayout !== true})),
    updateReviewStep:(reviewStep)=>set(()=>({reviewStep:reviewStep})),
    updateCodingAccountGroupId:(codingAccountGroupId)=>set(()=>({codingAccountGroupId:codingAccountGroupId})),
    updateCodingAccountMainId:(codingAccountMainId)=>set(()=>({codingAccountMainId:codingAccountMainId})),
    updateCodingAccountSpecId:(codingAccountSpecId)=>set(()=>({codingAccountSpecId:codingAccountSpecId})),
}))

export default useReviewTabStore;