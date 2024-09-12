'use client'
import Shell from '@/components/Shell';
import { usePathname } from 'next/navigation';

// because this layout is a child of the dashboard route, we have
// access to @events/page and @rsvps/page as children, in order to render them, we need to pass them in as props as well as the standard
// children prop which is the content of the page.tsx file.

// also, we need to pass in the pathname so that we can conditionally render the dashboard layout based on the current route.

// Shelll is a component that wraps the content of the page.tsx file. It is a simple wrapper that adds some padding and a max-width to the content.



const Dashboard = ({ children, rsvps, events }) => {
    const path = usePathname();

    return (
        <Shell>
            {path === "/dashboard" ? (
        <div className="flex w-full h-full">
            <div className="w-1/2 border-r border-default-50">
                {rsvps}
            </div>
          <div className="w-1/2 flex flex-col">
        <div className="border-b border-default-50 w-full h-1/2">
            {events}
        </div>
        <div className="w-full h-1/2">
                            {children}
                        </div>
        </div>
        </div>
        ): ( <div>{ children }</div>
    )}
    </Shell>
  );
}

export default Dashboard;

