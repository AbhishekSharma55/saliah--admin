import React, { ReactNode } from 'react'
import Sidebar from '@/components/Sidebar/Sidebar'

const DashboardLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='flex w-full'>
            <Sidebar />
           <div className='flex-1 max-h-screen overflow-y-auto'>
                {children}
           </div>
        </div>
    )
}

export default DashboardLayout