import { useState } from "preact/hooks";
import { useQRStore } from "../../store";

const useQRAPI = () => {
    const api = import.meta.env.VITE_API
    const {
        qrUrl,
        qrVersion,
        qrSize,
        qrBorder,
        setQRSvgData
    } = useQRStore();

//   '/qr?url=https%3A%2F%2Fgoogle.com&version=3&box_size=10&border=2'
    const [healthStatus, setHealthStatus] = useState(null);

    const checkHealth = async () => {
        const res = await fetch(`${api}/health`)
        if (res.ok) {
            const data = await res.text()
            setHealthStatus(data)
        }
        else{
            setHealthStatus({"status":"Down"});
            alert("The API is not yet ready; therefore, the QR code cannot be generate.");
        }
    };

    const createQRCode = async () => {
        if (!qrUrl) {
            return
        } 
        const res = await fetch(`${api}/qr?url=${qrUrl}&version=${qrVersion}&box_size=${qrSize}&border=${qrBorder}`)
        if (res.ok) {
            const data = await res.text()
            setQRSvgData(data)
        }
    };

    return {
        createQRCode,checkHealth,healthStatus
    }

};

export default useQRAPI;

