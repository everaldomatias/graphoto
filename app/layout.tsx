import "@/styles/global.scss"
import { generateMetadata } from "@/lib/metadata"
import Header from "../components/Header"
import Footer from "../components/Footer"

export { generateMetadata }

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR">
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
