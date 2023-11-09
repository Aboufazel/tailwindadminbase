import {create} from "zustand";

const useActionType = create((set)=>({
    actionType:'',
    updateActionType:(actionType)=>set(()=>({actionType:actionType}))
}))

export default useActionType;
