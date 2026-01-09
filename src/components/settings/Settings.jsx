import { h, Component } from 'preact';
import { RiCropLine, RiMoonFill, RiQrCodeLine, RiResetLeftLine, RiShape2Fill, RiSunFill } from '@remixicon/react'
import { useState } from 'react';
import useQRStore from '../../store/qrStore/QRStore';
import clsx from "clsx"
import { useTheme } from '../../hooks';
import pkg from '../../../package.json'

const Settings = () => {
    const { qrVersion, qrSize, setQRVersion, setQRSize, qrBorder, setQRBorderSize, resetQRSettings } = useQRStore();
    const { theme, setTheme } = useTheme();
    const privecy_policy_url = import.meta.env.VITE_PRIVECY_POLICY;
    const terms_url = import.meta.env.VITE_TERMS;

    return (
        <>
            <div class=" p-4 flex items-center md:items-start md:justify-between  flex-col md:flex-row">

                <div class="w-full md:w-[49%]">
                    <h6 class="text-sm font-bold m-2">
                        GENERATIOIN PARAMETERS
                    </h6>

                    <div class="w-full border p-4 rounded-xl my-4 bg-(--button-bg-2) border-(--border-color) ">

                        <div class="border-b mb-4" >
                            <div>
                                <div class="flex items-center ">
                                    <div class="mr-4 ">
                                        <RiCropLine />
                                    </div>
                                    <h1>Output Size</h1>
                                </div>
                                <div>
                                    <input type="range"
                                        class="w-full h-2 rounded-lg cursor-pointer accent-(--button-bg)  outline-none border-none "
                                        min={100} max={4000}
                                        value={qrSize}
                                        onChange={(e) => {
                                            setQRSize(e.target.value);

                                        }} />
                                </div>
                                <div class="flex justify-between text-sm text-(--text-color-2) my-4">
                                    <p>100</p>
                                    <p>4000</p>

                                </div>
                            </div>

                        </div>

                        <div class="border-b mb-4" >
                            <div>
                                <div class="flex items-center">
                                    <div class="mr-4 ">
                                        <RiQrCodeLine />
                                    </div>
                                    <h1>QR Version</h1>
                                </div>
                                <div>
                                    <input type="range"
                                        class="w-full h-2 rounded-lg cursor-pointer accent-(--button-bg) outline-none border-none "
                                        min={2} max={40}
                                        value={qrVersion}
                                        onChange={(e) => {
                                            setQRVersion(e.target.value);

                                        }} />
                                </div>
                                <div class="flex justify-between text-sm text-(--text-color-2) my-4">
                                    <p>2</p>
                                    <p>40</p>

                                </div>
                            </div>

                        </div>

                        <div class="" >
                            <div>
                                <div class="flex items-center">
                                    <div class="mr-4 ">
                                        <RiShape2Fill />
                                    </div>
                                    <h1>Border</h1>
                                </div>
                                <div class="flex justify-between items-center font-bold pt-4" >

                                    <button class={clsx("p-4 rounded-2xl w-[23%] cursor-pointer  ", qrBorder == 1 ? " bg-(--button-bg) " : " bg-(--border-color) ")}
                                        onClick={() => {
                                            setQRBorderSize(1)
                                        }}>
                                        S
                                    </button>


                                    <button class={clsx("p-4 rounded-2xl w-[23%] cursor-pointer  ", qrBorder == 4 ? " bg-(--button-bg) " : " bg-(--border-color) ")}
                                        onClick={() => {
                                            setQRBorderSize(4)
                                        }}>
                                        M
                                    </button>


                                    <button class={clsx("p-4 rounded-2xl w-[23%] cursor-pointer  ", qrBorder == 10 ? " bg-(--button-bg) " : " bg-(--border-color) ")}
                                        onClick={() => {
                                            setQRBorderSize(10)
                                        }}>
                                        L
                                    </button>


                                    <button class={clsx("p-4 rounded-2xl w-[23%] cursor-pointer  ", qrBorder == 20 ? " bg-(--button-bg) " : " bg-(--border-color) ")}
                                        onClick={() => {
                                            setQRBorderSize(20)
                                        }}>
                                        XL
                                    </button>

                                </div>
                                <div class="flex justify-between text-sm text-(--text-color-2) mt-4">
                                    <p>Higher levels make QR code Border wider</p>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div class="w-full md:w-[49%]">
                    <h6 class="text-sm font-bold m-2">
                        APP PREFERENCES
                    </h6>

                    <div class="w-full border p-4 rounded-xl my-4 bg-(--button-bg-2) border-(--border-color) ">

                        <div class=" mb-4" >
                            <div>
                                <div class="flex items-center ">
                                    <h1>Theme</h1>
                                </div>
                                <div class="flex items-center justify-between ">
                                    <button
                                        class={clsx(
                                            "p-4 w-[48%] rounded-2xl my-4 flex justify-center items-center flex-col font-bold text-sm border-2",
                                            theme == 'light' ?
                                                "bg-(--button-bg) text-(--text-color) border-(--text-color)"
                                                : "bg-(--border-color) text-(--text-color-2) border-(--border-color)")}
                                        onClick={() => {
                                            setTheme('light')
                                        }}>
                                        <RiSunFill size={30} />
                                        <h1>Light</h1>
                                    </button>

                                    <button
                                        class={clsx(
                                            "p-4 w-[48%] rounded-2xl my-4 flex justify-center items-center flex-col font-bold text-sm border-2",
                                            theme == 'dark' ?
                                                "bg-(--button-bg)/10 text-(--button-bg) border-(--button-bg)"
                                                : "bg-(--border-color) text-(--text-color-2) border-(--border-color)")}
                                        onClick={() => {
                                            setTheme('dark')
                                        }}>
                                        <RiMoonFill size={30} />
                                        <h1>Dark</h1>
                                    </button>

                                </div>
                            </div>

                        </div>



                    </div>
                </div>


            </div>
            <div class=" p-4 pt-0 flex items-center md:items-start md:justify-between  flex-col md:flex-row">

                <div class="w-full md:w-[49%]">

                    <button
                        class="p-4 w-full rounded-2xl my-4 flex justify-center 
                                        items-center flex-row font-extrabold text-sm border-2  
                                        bg-red-500/6 text-red-500/60 border-red-500/10"

                        onClick={() => {
                            // setTheme('dark')
                            resetQRSettings()
                        }}>
                        <div class="mr-2">

                            <RiResetLeftLine size={14} />
                        </div>
                        <h1>Reset to Deafults</h1>
                    </button>


                </div>

                <div class="w-full md:w-[49%] text-[10px] text-(--text-color-2)/40 p-10">
                    <div class="flex justify-center items-center">
                        <p>GOAT QR Generator</p>
                        <p class="ml-1">v{pkg.version}</p>
                    </div>
                    <div class={clsx("flex justify-center  items-center", theme == 'dark' ? " text-(--button-bg)" : "text-(--text-color)")}>
                        <a href={privecy_policy_url}
                            target={'_blank'}
                            class="mx-4 font-bold">Privecy Policy</a>
                        <span class="h-1 w-1 rounded-full bg-(--text-color-2)/40"></span>
                        <a href={terms_url}
                            target={'_blank'}
                            class="mx-4 font-bold">Terms of Service</a>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Settings;