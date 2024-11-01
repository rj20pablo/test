import { Bounce, ToastOptions } from "react-toastify";

export const toastOptions = {
  position: "bottom-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Bounce,
} satisfies ToastOptions;

export const ALPHA_API_SECRET = "GYLJ2G9GWHJNVUS1";

export const FINNHUB_API_SECRET = "cp7qq6hr01qi8q89ahjgcp7qq6hr01qi8q89ahk0"

export const FINNHUB_WEBHOOK_SECRET = "cp7qq6hr01qi8q89ahl0"