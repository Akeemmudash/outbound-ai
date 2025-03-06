import Button from '@/component/ui/button'
import Link from 'next/link'
import React from 'react'

const CreateOrganization = () => {
  return (
    <div className="w-full max-w-96 space-y-5 rounded-lg bg-white p-6 text-[#212121]">
    <div className="text-[#212121] space-y-4">
      <h2 className="text-[32px]  font-bold">Welcome Agent</h2>
      <p className="text-base mb-4 font-normal">
       Create new organizatio
      </p>
      <input type="text" placeholder='Enter your organization name' className='font-[400] border border-[#C0C3C9] placeholder:text-[#C0C3C9] w-[96%] outline-0 rounded-md p-2' />
    </div>
    <Button asChild>
      <Link className="block text-center" href={"/login"}>
        Create Organization
      </Link>
    </Button>
  </div>
  )
}

export default CreateOrganization
