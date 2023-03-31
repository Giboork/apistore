import Link from "next/link";

export default function Navbar(props: any) {
    const navigation = [
        "Datasets",
        "FAQs",
        "About Us",
    ];

    return (
        <div className="w-full">
            <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
                {/* Logo  */}

                <div className="hidden mr-3 space-x-4 lg:flex nav__item">
                    <Link href="/">
                        Contact us
                    </Link>
                </div>
            </nav>
        </div>
    );
}
