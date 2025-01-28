export default function ContactPage() {
    return (
        <main>
            <h1>Contact</h1>
            <form>
                <label>
                    Nome:
                    <input type="text" name="nome" />
                </label>
                <label>
                    Mensagem:
                    <textarea name="mensagem"></textarea>
                </label>
                <button type="submit">Enviar</button>
            </form>
        </main>
    );
}
