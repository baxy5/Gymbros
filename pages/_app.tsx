import type { AppProps } from "next/app";
import "../styles/globals.css";

/* 
      100: "#DFEAE2",
      200: "#B4D6C1",
      300: "#8DC3A7",
      400: "#6BAF92",
      500: "#4E9C81",
      600: "#358873",
      700: "#207567"       
*/

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
