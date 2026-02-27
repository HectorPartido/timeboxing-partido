import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HOURS = [5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

export default function Planner() {
    const navigate = useNavigate()

    const today = new Date().toLocaleDateString('es-MX', {
        day: '2-digit', month: '2-digit', year: 'numeric'
    })

    const [priorities, setPriorities] = useState(['', '', ''])
    const [brainDump, setBrainDump] = useState('')
    const [blocks, setBlocks] = useState(
        HOURS.reduce((acc, h, i) => {
            acc[`${i}-00`] = ''
            acc[`${i}-30`] = ''
            return acc
        }, {})
    )

    const updatePriority = (i, val) => {
        const updated = [...priorities]
        updated[i] = val
        setPriorities(updated)
    }

    const updateBlock = (key, val) => setBlocks(prev => ({ ...prev, [key]: val }))

    return (
        <div className="min-h-screen bg-teal-50">
            <nav className="bg-teal-700 text-white px-8 py-4 flex justify-between items-center shadow">
                <h1 className="text-xl font-bold">Planificador diario</h1>
                <div className="flex items-center gap-4">
                    <span className="text-sm opacity-80">Fecha: {today}</span>
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="text-sm bg-teal-900 hover:bg-teal-800 px-4 py-1.5 rounded-lg transition-colors"
                    >
                        ← Volver
                    </button>
                </div>
            </nav>

            <main className="max-w-5xl mx-auto px-6 py-8">
                <div className="flex flex-col lg:flex-row gap-6">

                    <div className="flex flex-col gap-6 lg:w-72">
                        <div className="bg-white rounded-xl shadow p-5">
                            <h2 className="font-bold text-teal-800 mb-3">Top Priorities</h2>
                            <div className="flex flex-col gap-2">
                                {priorities.map((p, i) => (
                                    <input
                                        key={i}
                                        value={p}
                                        onChange={e => updatePriority(i, e.target.value)}
                                        placeholder={`Prioridad ${i + 1}`}
                                        className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow p-5 flex-1">
                            <h2 className="font-bold text-teal-800 mb-3">Brain Dump</h2>
                            <textarea
                                value={brainDump}
                                onChange={e => setBrainDump(e.target.value)}
                                placeholder="Escribe todo lo que tienes en mente..."
                                className="w-full h-52 border border-gray-300 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-teal-400"
                            />
                        </div>
                    </div>

                    <div className="flex-1 bg-white rounded-xl shadow overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-teal-700 text-white">
                                <tr>
                                    <th className="w-14 py-3 text-center">Hora</th>
                                    <th className="py-3 text-center border-l border-teal-600">:00</th>
                                    <th className="py-3 text-center border-l border-teal-600">:30</th>
                                </tr>
                            </thead>
                            <tbody>
                                {HOURS.map((hour, i) => (
                                    <tr key={i} className="border-t border-gray-200 hover:bg-teal-50 transition-colors">
                                        <td className="text-center font-semibold text-teal-700 py-2">{hour}</td>
                                        <td className="border-l border-gray-200 px-2 py-1">
                                            <input
                                                value={blocks[`${i}-00`]}
                                                onChange={e => updateBlock(`${i}-00`, e.target.value)}
                                                className="w-full text-sm focus:outline-none bg-transparent placeholder-gray-300"
                                                placeholder="—"
                                            />
                                        </td>
                                        <td className="border-l border-gray-200 px-2 py-1">
                                            <input
                                                value={blocks[`${i}-30`]}
                                                onChange={e => updateBlock(`${i}-30`, e.target.value)}
                                                className="w-full text-sm focus:outline-none bg-transparent placeholder-gray-300"
                                                placeholder="—"
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </main>
        </div>
    )
}