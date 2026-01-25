import Link from "next/link";

const SuccessPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-4xl font-bold text-secondary mb-4">¡Pago Exitoso! 🎉</h1>
            <p className="text-xl text-gray-300 mb-8">Gracias por tu compra. Te contactaré pronto.</p>
            <Link href="/" className="px-4 py-2 bg-secondary rounded-lg">
                Volver al inicio
            </Link>
        </div>
    );
}

export default SuccessPage;