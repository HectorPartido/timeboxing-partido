import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-teal-50 flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-sm">
                <h1 className="text-3xl font-bold text-teal-700 mb-2">Timeboxing</h1>
                <p className="text-gray-500 mb-8">Inicia sesión para continuar</p>

                <div className="flex flex-col gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Correo</label>
                        <input
                            type="email"
                            placeholder="hector@email.com"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                    </div>
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg py-2 transition-colors"
                    >
                        Entrar
                    </button>
                </div>
            </div>
        </div>
    )
}