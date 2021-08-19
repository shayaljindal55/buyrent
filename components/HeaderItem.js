function HeaderItem({ Icon, title }) {
    return (
        <div className="group flex flex-col 
        items-center cursor-pointer 
         w-12 sm:w-20 hover:text-white ">
            <Icon className="h-8 mb-1 motion-safe:hover:scale-110 " />
            <p className="opacity-100 motion-safe:hover:scale-110 tracking-widest">{title}</p>
        </div>
    )
}

export default HeaderItem;
