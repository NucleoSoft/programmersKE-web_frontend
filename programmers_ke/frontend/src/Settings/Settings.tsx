import React, { useState } from 'react'
import { Switch } from '@headlessui/react';
import useDarkMode from '../hooks/useDarkMode';

function Settings() {
  return (
    <div className='bg-white dark:bg-black h-screen grid grid-flow-col gap-2 p-2'>
        <div className='bg-slate-300 dark:bg-slate-900 col-span-1 rounded-md p-2'>
            <span>Appearance</span>
        </div>
          <div className='bg-gradient-to-bl from-primary to-secondary col-span-5 rounded-md'>
            <div className="bg-slate-300 dark:bg-slate-900 bg-opacity-75 dark:bg-opacity-75 
                            rounded-md h-full">
                  <Toggle />
            </div>
        </div>
    </div>
  )
}


export const Toggle = () => {
    const [darkMode, setdarkMode] = useDarkMode();
    const handleMode = () => setdarkMode(!darkMode)

    const [enabled, setenabled] = useState()
    return (
        <Switch.Group>
            <Switch.Label className='font-novaflat text-black dark:text-white text-[12px] mr-5'>Dark Mode</Switch.Label>
            <Switch
                checked={enabled}
                onChange={setenabled}
                onClick={handleMode}
                className={`${enabled ? 'bg-primary' : 'bg-secondary'
                    } relative inline-flex h-6 w-11 items-center rounded-full drop-shadow-md transition-all ease-in-out duration-300`}
            >
                <span
                    className={`${enabled ? 'translate-x-6 bg-white drop-shadow-[0_0_2px_#fff]' :
                        'translate-x-1 bg-black drop-shadow-[0_0_2px_#000]'
                        } inline-block h-4 w-4 transform rounded-full transition-all ease-in-out duration-300`}
                />
            </Switch>
        </Switch.Group>
    )
}

export default Settings