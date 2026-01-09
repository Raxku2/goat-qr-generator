import { h, Component } from 'preact';
import { route } from 'preact-router';
import { useSettings } from '../../store';


const NavMenu = () => {
    const { NavMenuVisibility, setNavMenu } = useSettings();
    return (
        <div
            hidden={!NavMenuVisibility}
            class="
        absolute w-full h-[90%] p-4 bg-(--bg-color)/2 z-10 backdrop-blur-md text-3xl
        ">
            <div>
                <button class="m-2 border-b px-4 py-2 block font-bold cursor-pointer"
                    onClick={() => {
                        route("/");
                        setNavMenu(false);
                    }}
                >
                    Home
                </button>
                <button class="m-2 border-b px-4 py-2 block font-bold cursor-pointer"
                    onClick={() => {
                        route("/settings");
                        setNavMenu(false);
                    }}
                >
                    Settings
                </button>
                <button class="m-2 border-b px-4 py-2 block font-bold cursor-pointer"
                    onClick={() => {
                        route("/about");
                        setNavMenu(false);
                    }}
                >
                    About
                </button>

            </div>
        </div>
    );
};

export default NavMenu;