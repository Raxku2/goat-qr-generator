import { h, Component } from 'preact';
import { RiLink, RiQrCodeLine, RiRefreshLine, RiResetRightFill, RiShareFill } from '@remixicon/react';
import { useEffect, useState } from 'preact/hooks';
import { useQRStore } from '../../store';
import { useQRAPI, useShareSvgImage } from '../../hooks';

const Home = () => {
    const { qrSvgData, setQRURL, qrUrl, resetQRStore } = useQRStore();
    const { createQRCode } = useQRAPI();
    const shareQr = useShareSvgImage(qrSvgData);


    return (
        <div class="h-full p-4 ">
            <div>
                <h1>
                    Website URL
                </h1>

                <div class="flex items-center w-full border p-4 rounded-xl my-4 bg-(--button-bg-2) border-(--border-color) h-14">
                    <input type="url" placeholder='https://example.com'
                        class=" w-[95%] outline-0 border-0"
                        onChange={(e) => {
                            setQRURL(e.target.value);
                        }}
                        value={qrUrl}
                    />

                    <div class="flex justify-center items-center w-[5%] p-2">
                        <div class="rotate-45 text-(--text-color-2)">
                            <RiLink size={20} />
                        </div>
                    </div>
                </div>

                <button type="button"
                    class="
                flex items-center justify-center w-full p-4 rounded-xl my-4 bg-(--button-bg) h-14 font-bold cursor-pointer
                "
                    onClick={createQRCode}>
                    <div class="px-4">
                        <RiQrCodeLine size={30} />
                    </div>

                    <h1 class="text-xl">
                        Generate QR Code
                    </h1>
                </button>
            </div>

            <div class="flex justify-center items-center flex-col ">

                <div class="bg-(--button-bg-2) w-[80dvw] h-[80dvw] md:w-[30dvw] md:h-[30dvw] m-4 rounded-2xl overflow-hidden border-2 border-dashed border-(--text-color-2)/40   ">

                    {(() => {
                        if (!qrSvgData) {
                            return (
                                <div class="w-full h-full flex justify-center items-center flex-col">
                                    <div class="p-6 bg-(--border-color) rounded-full text-(--text-color-2) ">
                                        <RiQrCodeLine size={50} />
                                    </div>

                                    <h1 class="m-8 font-bold text-2xl">No QR Code</h1>
                                    <h2 class="w-[50%] text-sm text-wrap text-center text-(--text-color-2) ">
                                        Enter a URL above and tap generate to see your code here.
                                    </h2>
                                </div>
                            )
                        }
                        else {
                            return (
                                <div class=" [&_svg]:w-full [&_svg]:h-full [&_svg_*]:fill-(--text-color)"
                                    dangerouslySetInnerHTML={{ __html: qrSvgData }}
                                ></div>
                            )
                        }
                    })()}

                </div>

                <div class="w-[80dvw] md:w-[30dvw] h-14 m-4 flex justify-between">

                    <button class="p-2 bg-(--button-bg-2) rounded-xl h-full w-[48%] flex justify-center items-center cursor-pointer "
                        onClick={resetQRStore}>
                        <div class="mr-4">
                            <RiRefreshLine />
                        </div>

                        Refresh
                    </button>

                    <button class="p-2 bg-(--button-bg-2) rounded-xl h-full w-[48%] flex justify-center items-center cursor-pointer "
                        onClick={shareQr}>
                        <div class="mr-4">
                            <RiShareFill />
                        </div>

                        Share
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;