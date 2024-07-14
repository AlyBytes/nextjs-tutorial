import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main>
     <h1>Hello WORLD</h1>
     {/* <a href="/users"> USERS </a>  -->if we use it this way when we click on link to take us to next page somewhere all componenets get reloaded again - but its not optimal so we use Link componenet */}
   {/* when we get redirected in this way - we do not re-oanload css file, fonts, bunch of JS files etc - but just other stuff that is new on that page -->client side navigation */}
    <Link href="/users"> Users </Link>
<ProductCard />
    </main>
  );
}
