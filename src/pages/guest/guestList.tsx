// guestList.tsx
import { useEffect, useState } from 'react'
import { db } from '../../firebase' // Adjust path to your firebase config
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'

interface RsvpRecord {
    id: string
    fullName: string
    attendance: 'yes' | 'no'
    guestCount: number
    reason?: string
    timestamp?: any
}

export default function GuestList() {
    const [rsvps, setRsvps] = useState<RsvpRecord[]>([])
    const [loading, setLoading] = useState(true)

    // Real-time listener for RSVP records from Firestore
    useEffect(() => {
        const q = query(collection(db, 'rsvps'), orderBy('timestamp', 'desc'))
        
        const unsubscribe = onSnapshot(
            q, 
            (querySnapshot) => {
                const records: RsvpRecord[] = []
                querySnapshot.forEach((doc) => {
                    records.push({ id: doc.id, ...doc.data() } as RsvpRecord)
                })
                setRsvps(records)
                setLoading(false)
            }, 
            (error) => {
                console.error("Error listening to guest list: ", error)
                setLoading(false)
            }
        )

        // Clean up the listener when the component unmounts
        return () => unsubscribe()
    }, [])

    // Calculate metrics
    const totalSubmissions = rsvps.length
    const attendingList = rsvps.filter(r => r.attendance === 'yes')
    const notAttendingList = rsvps.filter(r => r.attendance === 'no')
    
    // Total physical attendees (including plus-ones)
    const totalGuestsAttending = attendingList.reduce((acc, curr) => acc + (curr.guestCount || 1), 0)

    const pendingCount = 0; // Update this logic if you manage an invited list collection.

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#EBF4E9] font-serif">
                <p className="text-lg text-[#5A6842] animate-pulse">Loading guest list...</p>
            </div>
        )
    }

    return (
        <div className="relative w-full min-h-screen flex flex-col items-center justify-start overflow-x-hidden p-4 sm:p-8 bg-[#EBF4E9]">
            
            <div className="relative z-10 flex flex-col max-w-4xl w-full mx-auto space-y-6 py-6">
                
                {/* Header Title */}
                <div className="text-center space-y-1">
                    <h1 
                        className="text-4xl sm:text-5xl font-normal text-[#4A3525] tracking-wide"
                        style={{ fontFamily: "'Henny Penny', cursive" }}
                    >
                        RSVP Guest List
                    </h1>
                    <p className="text-sm font-serif italic text-[#5A6842] uppercase tracking-wider">
                        Zane Asher's 1st Birthday & Christening
                    </p>
                </div>

                {/* Summary Metric Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-stone-200 shadow-sm text-center">
                        <p className="text-xs uppercase tracking-wider text-stone-500 font-sans">Total Responses</p>
                        <p className="text-3xl font-bold text-[#4A5538] mt-1">{totalSubmissions}</p>
                    </div>

                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-stone-200 shadow-sm text-center">
                        <p className="text-xs uppercase tracking-wider text-stone-500 font-sans">Attending (Guests)</p>
                        <p className="text-3xl font-bold text-[#3D5A32] mt-1">{totalGuestsAttending}</p>
                    </div>

                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-stone-200 shadow-sm text-center">
                        <p className="text-xs uppercase tracking-wider text-stone-500 font-sans">Not Attending</p>
                        <p className="text-3xl font-bold text-rose-600 mt-1">{notAttendingList.length}</p>
                    </div>

                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-stone-200 shadow-sm text-center">
                        <p className="text-xs uppercase tracking-wider text-stone-500 font-sans">Pending</p>
                        <p className="text-3xl font-bold text-amber-600 mt-1">{pendingCount}</p>
                    </div>
                </div>

                {/* Data Table */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl border border-stone-200 shadow-md overflow-hidden w-full">
                    <div className="px-6 py-4 border-b border-stone-200 bg-stone-50/50 flex justify-between items-center">
                        <h3 className="text-lg font-bold text-[#4A5538]">Attendee Submissions</h3>
                        <span className="text-xs text-stone-500 font-medium">Showing latest records (Scroll for more)</span>
                    </div>

                    {/* Scrollable Container limited roughly to ~10 rows */}
                    <div className="max-h-[420px] overflow-y-auto">
                        <table className="w-full text-left border-collapse text-sm">
                            <thead className="sticky top-0 z-10">
                                <tr className="border-b border-stone-200 text-stone-600 bg-stone-100 uppercase text-[11px] tracking-wider">
                                    <th className="py-3 px-4">Full Name</th>
                                    <th className="py-3 px-4">Status</th>
                                    <th className="py-3 px-4">Guests</th>
                                    <th className="py-3 px-4">Reason / Notes</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-100 text-stone-700">
                                {rsvps.length === 0 ? (
                                    <tr>
                                        <td colSpan={4} className="py-8 text-center text-stone-500 font-serif">
                                            No RSVP submissions recorded yet.
                                        </td>
                                    </tr>
                                ) : (
                                    rsvps.map((rsvp) => (
                                        <tr key={rsvp.id} className="hover:bg-stone-50/80 transition">
                                            <td className="py-3 px-4 font-semibold text-stone-800">{rsvp.fullName}</td>
                                            <td className="py-3 px-4">
                                                {rsvp.attendance === 'yes' ? (
                                                    <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-medium">
                                                        Attending
                                                    </span>
                                                ) : (
                                                    <span className="px-2.5 py-1 bg-rose-100 text-rose-800 rounded-full text-xs font-medium">
                                                        Declined
                                                    </span>
                                                )}
                                            </td>
                                            <td className="py-3 px-4">
                                                {rsvp.attendance === 'yes' ? rsvp.guestCount : '-'}
                                            </td>
                                            <td className="py-3 px-4 text-stone-500 italic">
                                                {rsvp.reason || '—'}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}