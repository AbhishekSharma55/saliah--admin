import React, { ReactNode } from 'react'
import Sidebar from '@/components/Sidebar/Sidebar'
import DeleteProductAlerts from '@/components/Alerts/DeleteProductAlerts'

const DashboardLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='flex w-full'>
            <DeleteProductAlerts />
            <Sidebar />
            <div className='flex-1 max-h-screen overflow-y-auto'>
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout