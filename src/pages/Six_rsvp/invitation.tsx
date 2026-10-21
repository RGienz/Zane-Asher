// sixPage.tsx
import { useState } from 'react'
import path_image_bg from '../../assets/image/2ndPage_2.gif'
import { useFontStyle } from './font.condition'
// Import your firebase db instance (adjust path according to your project setup)
import { db } from '../../firebase' 
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export default function RSVPPage() {
    useFontStyle()

    const [fullName, setFullName] = useState('')
    const [attending, setAttending] = useState<string>('')
    const [guestCount, setGuestCount] = useState('')
    const [reason, setReason] = useState('')
    const [submitting, setSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    // Helper function to allow only letters, numbers, spaces, and dots (.)
    const handleFilteredChange = (value: string, setter: (val: string) => void) => {
        // Regex allows: a-z, A-Z, 0-9, spaces, and dots (\.)
        // Modify or remove ^ if you also want to support international accents (e.g., Ñ, é)
        const sanitizedValue = value.replace(/[^a-zA-Z0-9.\s]/g, '')
        setter(sanitizedValue)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!fullName || !attending) return

        setSubmitting(true)

        try {
            // Save RSVP data to Firestore collection named 'rsvps'
            await addDoc(collection(db, 'rsvps'), {
                fullName: fullName.trim(),
                attendance: attending, // 'yes' or 'no'
                guestCount: attending === 'yes' ? parseInt(guestCount) || 1 : 0,
                reason: attending === 'no' ? reason.trim() : '',
                timestamp: serverTimestamp()
            })

            setSubmitted(true)
        } catch (error) {
            console.error("Error submitting RSVP: ", error)
            alert("Something went wrong. Please try again.")
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <div className="relative w-full min-h-screen flex flex-col items-center justify-start overflow-x-hidden p-4 sm:p-8 selection:bg-amber-100 bg-[#EBF4E9]">
            
            {/* Background Image Container */}
            <div 
                className="absolute inset-0 w-full h-full bg-[length:100%_100%] bg-no-repeat bg-top pointer-events-none"
                style={{ backgroundImage: `url(${path_image_bg})` }}
            />

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-md w-full mx-auto space-y-6 py-6">
                
                {/* Header Message */}
                <div className="space-y-2 text-center px-2">
                    <div className="border border-stone-400 rounded bg-white rounded p-3">
                        <h2 
                            className="text-3xl sm:text-4xl text-[#4A3525] font-semibold leading-tight drop-shadow-sm"
                            style={{ fontFamily: "'Henny Penny', cursive" }}
                        >
                            A spot has been saved for you on our jungle adventure!
                        </h2>
                    </div>
                    <div className="border border-stone-400 rounded bg-white rounded p-2 ">
                        <h2 
                            className="text-xs font-semibold text-[#4A5538] leading-relaxed uppercase tracking-wide"
                            
                        >
                           Kindly Fill OUT the RSVP Form below to confirm your attendance on or before
                        </h2>
                    </div>

                    <div className='p-2 mt-5 tracking-[0.2em] font-semibold border-b border-stone-400'>
                        <h2 
                            className="text-3xl  sm:text-4xl text-[#4A3525] font-semibold leading-tight drop-shadow-sm"
                            style={{ fontFamily: "'Henny Penny', cursive" }}
                        >
                            October 27, 2026
                        </h2>
                    </div>
                    
                </div>

                {/* Embedded Form Card */}
                <div className="w-full bg-white rounded-2xl border-t-8 border-t-[#5A6842] border border-stone-200 shadow-md text-left p-5 space-y-5">
                    
                    <div className="  bg-white rounded p-3 text-center">
                        <h2 
                            className="text-[18px] sm:text-4xl text-[#4A3525] border-b border-stone-400 py-2 font-semibold leading-tight drop-shadow-sm tracking-[0.2em]"
                            style={{ fontFamily: "'Henny Penny', cursive" }}
                        >
                            Zane asher is a wild One!
                        </h2>
                    </div>

                    {submitted ? (
                        <div className="py-8 text-center space-y-2">
                            <span className="text-4xl">🎉</span>
                            <h4 className="text-lg font-bold text-[#3D5A32]">Thank You!</h4>
                            <p className="text-xs text-stone-600">Your response has been recorded.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Full Name */}
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-stone-800">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input 
                                    type="text"
                                    required
                                    value={fullName}
                                    onChange={(e) => handleFilteredChange(e.target.value, setFullName)}
                                    placeholder="Iyong sagot"
                                    className="w-full text-sm p-2 border-b-2 border-stone-300 focus:border-[#5A6842] outline-none transition bg-stone-50/50"
                                />
                            </div>

                            {/* Attendance */}
                            <div className="space-y-2 pt-2">
                                <label className="block text-sm font-semibold text-stone-800">
                                    Will you be able to attend? <span className="text-red-500">*</span>
                                </label>
                                <div className="space-y-2 text-sm text-stone-700 pt-1">
                                    <label className="flex items-center space-x-3 cursor-pointer">
                                        <input 
                                            type="radio" 
                                            name="attendance"
                                            value="yes"
                                            checked={attending === 'yes'}
                                            onChange={(e) => setAttending(e.target.value)}
                                            className="w-4 h-4 accent-[#5A6842]"
                                        />
                                        <span>Yes, I'll attend</span>
                                    </label>
                                    <label className="flex items-center space-x-3 cursor-pointer">
                                        <input 
                                            type="radio" 
                                            name="attendance"
                                            value="no"
                                            checked={attending === 'no'}
                                            onChange={(e) => setAttending(e.target.value)}
                                            className="w-4 h-4 accent-[#5A6842]"
                                        />
                                        <span>No, I can't make it</span>
                                    </label>
                                </div>
                            </div>

                            {/* Conditional Field: Guest Count if attending */}
                            {attending === 'yes' && (
                                <div className="space-y-2 pt-2 animate-fadeIn">
                                    <label className="block text-sm font-semibold text-stone-800">
                                        Number of Guests Attending
                                    </label>
                                    <input 
                                        type="number"
                                        min="1"
                                        max="10"
                                        value={guestCount}
                                        onChange={(e) => setGuestCount(e.target.value)}
                                        placeholder="Iyong sagot"
                                        className="w-full text-sm p-2 border-b-2 border-stone-300 focus:border-[#5A6842] outline-none transition bg-stone-50/50"
                                    />
                                </div>
                            )}

                            {/* Conditional Field: Reason if NOT attending */}
                            {attending === 'no' && (
                                <div className="space-y-2 pt-2 animate-fadeIn">
                                    <label className="block text-sm font-semibold text-stone-800">
                                        Reason for not attending <span className="text-red-500">*</span>
                                    </label>
                                    <input 
                                        type="text"
                                        required
                                        value={reason}
                                        onChange={(e) => handleFilteredChange(e.target.value, setReason)}
                                        placeholder="Lagay ang iyong dahilan..."
                                        className="w-full text-sm p-2 border-b-2 border-stone-300 focus:border-[#5A6842] outline-none transition bg-stone-50/50"
                                    />
                                </div>
                            )}

                            {/* Submit Button */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="px-6 py-2 bg-[#5A6842] hover:bg-[#4A5538] text-white text-sm font-semibold rounded shadow transition active:scale-95 cursor-pointer disabled:opacity-50"
                                >
                                    {submitting ? "Submitting..." : "Submit"}
                                </button>
                            </div>
                        </form>
                    )}
                </div>

            </div>
        </div>
    )
}