import { create } from 'zustand';

const useQRStore = create((set) => ({
  qrUrl: "",
  qrVersion: 2,
  qrSize: 100,
  qrBorder: 4,
  qrSvgData: null,
  setQRURL: (url) => set({ qrUrl: url }),
  setQRVersion: (version) => set({ qrVersion: version }),
  setQRSize: (size) => set({ qrSize: size }),
  setQRBorderSize: (border) => set({ qrBorder: border }),
  setQRSvgData: (qrcode) => set({ qrSvgData: qrcode }),
  resetQRStore: () => set({
    qrUrl: "",
    qrVersion: 2,
    qrSize: 10,
    qrBorder: 4,
    qrSvgData: null
  }),
  resetQRSettings: () => set({
    qrVersion: 2,
    qrSize: 10,
    qrBorder: 4,
  }),
}));

export default useQRStore;





