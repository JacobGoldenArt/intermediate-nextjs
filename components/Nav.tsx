'use client'
import { Input } from '@nextui-org/react'
import { Button, Tooltip } from '@nextui-org/react'
import { m } from 'framer-motion'
import { CirclePlus, Shell, SortAsc } from 'lucide-react'

// I was mistakenly thinking that because this was called Nav
// that is was part of the Sidebar, but now I see that it is a
// used in the Shell component above the main content as a sort of header.

const Nav = () => {
  return (
    <nav className="h-[65px] border-b border-default-50 flex items-center px-6 gap-4">
      <div className="w-1/2">
        <Input size="sm" variant="faded" placeholder="search" />
      </div>
    </nav>
  )
}

export default Nav
