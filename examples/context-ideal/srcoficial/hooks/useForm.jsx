import { useState } from 'react'

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState)

  const handleOnchange = (evt) => {
    const { name, value: inputValue, type, checked } = evt.target
    const value = type === 'checkbox' ? checked : inputValue
    setForm({ ...form, [name]: value })
  }
  return { form, handleOnchange }
}
export default useForm
