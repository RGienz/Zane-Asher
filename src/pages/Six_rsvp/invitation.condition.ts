import { useState } from 'react'
import { db } from '../../firebase' 
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export function isRs() {
    const [fullName, setFullName] = useState('')
    const [attending, setAttending] = useState<string>('')
    const [guestCount, setGuestCount] = useState('')
    const [reason, setReason] = useState('')
    const [submitting, setSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

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

            // Notify other components (like guest_list.tsx) to update in real-time
            window.dispatchEvent(new Event('rsvpUpdated'))
        } catch (error) {
            console.error("Error submitting RSVP: ", error)
            alert("Something went wrong. Please try again.")
        } finally {
            setSubmitting(false)
        }
    }

    return {
        fullName,
        setFullName,
        attending,
        setAttending,
        guestCount,
        setGuestCount,
        reason,
        setReason,
        submitting,
        submitted,
        handleSubmit
    }
}