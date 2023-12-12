import {toast} from "react-toastify";

export const activeFunction = async (func , funcData) => {
    await func(funcData).catch(
        () => {
            return (
                toast.error("فعال سازی موفق نبود!")
            )
        }
    ).then(() => {
        return (toast.success("فعالسازی موفقیت آمیز بود"))
    })
}

export const deActiveFunction = async (func , funcData) => {
    await func(funcData).catch(
        () => {
            return (
                toast.error("غیر فعال سازی موفق نبود!")
            )
        }
    ).then(() => {
        toast.success("غیر فعالسازی موفقیت آمیز بود")
    })
}