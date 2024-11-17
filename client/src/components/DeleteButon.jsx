import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import api from '../api'
import { LoaderSm } from './Loader'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const DeleteButon = () => {
    const { id } = useParams();
    const navigate = useNavigate()

    const {isLoading,mutate} = useMutation({
        mutationFn: () => api.delete(`/api/v1/recipes/${id}`),
        
        onSuccess: () => {

            navigate('/')
            toast.success('tarif kaldırıldı')
        },

        onError: () => {
            toast.error('bir sorun oluştu')
        },
    })

  return (
    <button onClick={mutate} className="btn flex items-center gap-2 bg-red-500 hover:bg-red-600 py-1">
        {isLoading ? <LoaderSm /> : <>
            <FaTrashAlt />
            Sil
        </> }
          
        </button>
  )
}

export default DeleteButon