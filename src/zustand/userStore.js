import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";

const userStore = create(persist((set) => ({
        userName: "",
        updateUserName: (userName) => set(() => ({userName: userName})),
    }),
    {
        name: 'admin-user-username',
        storage: createJSONStorage(() => sessionStorage)
    }
))

export default userStore;