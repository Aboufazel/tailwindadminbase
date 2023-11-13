import {create} from "zustand";

const useReviewTabStore = create((set)=>({
    reviewStep:'coding-account-group',
    codingAccountGroupId:'',
    codingAccountMainId:'',
    actionLayout:false,
    manageActionLayout:()=>set((state)=>({actionLayout:state.actionLayout !== true})),
    updateReviewStep:(reviewStep)=>set(()=>({reviewStep:reviewStep})),
    updateCodingAccountGroupId:(codingAccountGroupId)=>set(()=>({codingAccountGroupId:codingAccountGroupId})),
    updateCodingAccountMainId:(codingAccountMainId)=>set(()=>({codingAccountMainId:codingAccountMainId})),
}))

export default useReviewTabStore;