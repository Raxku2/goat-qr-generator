import { h, Component } from 'preact';
import { RiMenuFoldLine, RiMenuUnfoldLine } from '@remixicon/react'
import { useSettings } from '../../store';

const Navbar = () => {
    const { NavMenuVisibility, toggleNavMenu } = useSettings();
    return (
        <div class="h-[6%] border-b border-b-(--border-color)  p-4 flex justify-between items-center ">
            <button class="cursor-pointer p-1 border rounded border-(--bg-color) md:hover:border-(--border-color) "
            onClick={toggleNavMenu}
            >
                {
                    NavMenuVisibility ?  <RiMenuFoldLine /> : <RiMenuUnfoldLine /> 
                }
            </button>

            <h1 class="text-2xl">GOΔT QR</h1>
        </div>
    );
};

export default Navbar;