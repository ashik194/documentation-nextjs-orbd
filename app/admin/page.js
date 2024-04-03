import React from 'react'
import AdminDashabordView from '../components/adminDashabordView'
import ClientList from '../components/clientList'

export default function Admin() {
  return (
    <AdminDashabordView>
      <ClientList />
    </AdminDashabordView>
  )
}
