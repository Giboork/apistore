import Link from "next/link";
import NavbarClient from "./navbarClient";
export default function Navbar() {
    const navigation = ["Datasets", "FAQs", "About Us"];

    return (
        <div>
        
            <NavbarClient />
        </div>

    );
}
