import {create} from "zustand";
import useStore from "./store";

const useActionType = create((set)=>({
    actionType:'',
    updateActionType:(actionType)=>set(()=>({actionType:actionType}))
}))

export default useActionType;
