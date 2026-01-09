import { h, Component } from 'preact';
import { RiCodeLine, RiHeartFill, RiShieldFill, RiStarFill } from '@remixicon/react'
import { useTheme } from '../../hooks';
import clsx from 'clsx'
import pkg from '../../../package.json'

const About = () => {

    const projectAuthor = import.meta.env.VITE_AUTHOR;
    const projectRepo = import.meta.env.VITE_REPO;
    const privecy_policy_url = import.meta.env.VITE_PRIVECY_POLICY;
    const rating_url = import.meta.env.VITE_RATING;

    const {theme} = useTheme();

    return (
        <div class="p-4 h-full flex items-center flex-col">
            <div class="text-center space-y-1">
                <h2 class="text-2xl font-bold  text-(--text-color) ">GOΔT QR Generator</h2>
                <p class="text-sm font-medium text-(--text-color-2) ">Version {pkg.version} </p>
            </div>

            <div class="w-full max-w-xs my-10">
                <p class="text-center text-(--text-color)  leading-relaxed text-base">
                    A simple, privacy-focused QR code generator for your daily needs. Create, scan, and share instantly
                    without tracking.
                </p>
            </div>

            <div class="w-full ">


                <button
                    class="flex items-center text-lg justify-center w-full p-4 rounded-xl my-4 bg-(--button-bg) h-14 font-bold cursor-pointer"
                    onClick={()=>{
                        window.open(projectRepo,'_blank')
                    }}>

                    <div class="pr-2">
                        <RiCodeLine size={18} />
                    </div>
                    <h1> View Source Code </h1>
                </button>


                <button
                    class="flex items-center  text-lg justify-center w-full p-4 rounded-xl my-4 bg-(--border-color) h-14 font-bold cursor-pointer"
                    
                        onClick={()=>{
                            // alert("This feture isn't available yet")
                            window.open(rating_url,'_blank')
                        }}
                    >


                    <div class="pr-2 text-yellow-400">
                        <RiStarFill size={18} />
                    </div>
                    <h1> Rate this App </h1>
                </button>

                <a
                    class="flex items-center  text-lg justify-center w-full p-4 rounded-xl my-4 h-14 font-bold cursor-pointer
                    text-(--text-color-2)"
                    target={'_blank'}
                    href={privecy_policy_url}
                    >

                    <div class="pr-2">
                        <RiShieldFill size={18} />
                    </div>
                    <h1>Privacy Policy</h1>
                </a>
            </div>
            <div class="w-full absolute bottom-0 left-0 p-4">
                <div class="flex text-sm items-center justify-center p-4 text-(--text-color-2)">
                    <p> Built with</p>
                    <div class="px-2 text-red-500/50">
                        <RiHeartFill size={18} />
                    </div>
                    <p >by</p>
                    <a href={projectAuthor} target='_blank'
                        class={clsx("px-2 font-bold ", theme=='dark'?" text-(--button-bg)":"text-(--text-color)")}>Pinaka</a>
                </div>

                <div class="flex justify-center items-center w-full">
                    <div class="h-1 w-14 bg-(--border-color) rounded-3xl"></div>
                </div>


                <div class={clsx("flex text-sm items-center justify-center p-4 text-(--text-color-2)/50")}>
                    <p>&copy; {` ${2026} QR Generator.  `}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default About;