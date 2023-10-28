import {create} from "zustand";

const userStore = create((set)=>({
    userName:"",
    updateUserName:(userName) => set(() => ({ userName: userName })),
}))

export default userStore;