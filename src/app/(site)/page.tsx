import Head from "next/head";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <video
        src="https://storage.googleapis.com/martin-website/Ownerbailache4kweboptimized.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="object-cover w-full h-full"
      />
    </div>
  );
}
