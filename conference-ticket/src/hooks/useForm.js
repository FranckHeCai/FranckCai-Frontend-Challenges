import { useState } from "react"

export function useForm () {
    const [formData, setFormData] = useState({})
    const [showForm, setShowForm] = useState(true)

    const handleForm = (data) =>{
        const newData = new FormData(data)
        const retrievedData = Object.fromEntries(newData)
        retrievedData['file-input'] = URL.createObjectURL(newData.get('file-input'))
        setFormData(retrievedData)
        setShowForm(false)
    }

    const resetForm = () =>{
        setFormData({})
        setShowForm(true)
    }

    return {formData, showForm, handleForm, resetForm}
}