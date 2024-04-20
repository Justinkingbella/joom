import React, { ReactNode } from 'react'
import Navbar from '@/components/ui/Navbar'
import Sidebar from '@/components/ui/Sidebar'
import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "ChatJoom",
  description: "Video calling app",
  icons:{
    icon: '/icons/logo.svg'
  }
};
      

const HomeLayout = ({children}:{children:ReactNode}) => {
  return (
    <main className='relative'>
      
      <Navbar />
        <div className='flex'>
            <Sidebar />
            <section className='flex min-h-creen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14'>
                <div className='w-full'>
                {children}
                </div>
            </section>
        </div>
        
        Footer
      
        
    </main>
  )
}

export default HomeLayout