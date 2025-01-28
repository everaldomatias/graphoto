import "@/styles/components/footer.scss";

export default function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} - Todos os direitos reservados.</p>
        </footer>
    );
}
