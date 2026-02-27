import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
    const navigate = useNavigate()

    const today = new Date().toLocaleDateString('es-MX', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    })

    return (
        <div className="min-h-screen bg-teal-50">
            <nav className="bg-teal-700 text-white px-8 py-4 flex justify-between items-center shadow">
                <h1 className="text-xl font-bold">Timeboxing App</h1>
                <button
                    onClick={() => navigate('/')}
                    className="text-sm bg-teal-900 hover:bg-teal-800 px-4 py-1.5 rounded-lg transition-colors"
                >
                    Cerrar sesión
                </button>
            </nav>

            <main className="max-w-4xl mx-auto px-6 py-10">
                <p className="text-gray-500 capitalize mb-1">{today}</p>
                <h2 className="text-2xl font-bold text-teal-800 mb-8">Buen día, Hector 👋</h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                    {[
                        { label: 'Tareas hoy', value: '0' },
                        { label: 'Completadas', value: '0' },
                        { label: 'Bloques libres', value: '24' },
                    ].map((card) => (
                        <div key={card.label} className="bg-white rounded-xl shadow p-6 text-center">
                            <p className="text-4xl font-bold text-teal-600">{card.value}</p>
                            <p className="text-gray-500 mt-1">{card.label}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center gap-4">
                    <p className="text-gray-600 text-center">Planifica tu día usando la técnica de timeboxing</p>
                    <button
                        onClick={() => navigate('/planner')}
                        className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
                    >
                        Abrir Planificador del día
                    </button>
                </div>
            </main>
        </div>
    )
}