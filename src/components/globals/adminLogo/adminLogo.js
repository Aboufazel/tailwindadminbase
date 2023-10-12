const AdminLogo = ({manageOpenAndClose}) => {

    return(
        <div className={`flex flex-row items-center ${manageOpenAndClose ? "justify-center" :"mr-[20px] "} transition-all duration-500 mb-[29px] w-full gap-[8px]`}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <rect x="-0.757812" y="19.2422" width="28" height="4" rx="2" transform="rotate(-45 -0.757812 19.2422)" fill="#3A57E8"/>
                <rect x="7.72656" y="27.7266" width="28" height="4" rx="2" transform="rotate(-45 7.72656 27.7266)" fill="#3A57E8"/>
                <rect x="10.5352" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5352 16.3945)" fill="#3A57E8"/>
                <rect x="10.5566" y="-0.554688" width="28" height="4" rx="2" transform="rotate(45 10.5566 -0.554688)" fill="#3A57E8"/>
            </svg>
            <h2 className={`${manageOpenAndClose ? "hidden" : ""} font-bold text-[24px] text-text-color-1`}>
                {"پنل مدیدیت"}
            </h2>
        </div>
    )
}

export default AdminLogo;