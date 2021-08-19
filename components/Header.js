import {HomeIcon, LibraryIcon, SearchIcon} from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";


function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="For Sale" Icon={LibraryIcon} />
                <HeaderItem title="For Rent" Icon={HomeIcon} />
                {/* <HeaderItem title="Search" Icon={SearchIcon} /> */}
            </div>
            <Image 
            className="object-contain"
            src="/images/icon-12-1.png"
            width={200}
            height={100}
            />
        </header>
    )
}
export default Header;