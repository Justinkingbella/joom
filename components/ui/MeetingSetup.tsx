"use client"

import { DeviceSettings, VideoPreview, useCall } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'
import { Button } from './button';


const MeetingSetup = ({setIsSetupComplete}:{setIsSetupComplete: (value: boolean) =>
   void 
}) => {
    const [isMicCamToggleOn, setIsMicCamToggleOn] = useState(false);

    const call = useCall();

    if(!call){
        throw new Error('usecall must be used within StreamCall component')
    }

    useEffect(() => {
    if(isMicCamToggleOn){
        call?.camera.disable();
        call?.microphone.disable();    
    } else {
        call?.camera.enable();
        call?.microphone.enable();
    }

    }, [isMicCamToggleOn, call?.camera, call?.microphone])
  return (
  <div className='flex h-screen w-full flex-col 
    items-center justify-center gap-3 text-white'>
        <h1 className='text-1xl sm:txt-xl font-bold'>Set up your call before joining</h1>
        <div className="md:flex">

        <VideoPreview className='aspect-video  md:h-full md:w-30 '/>
        </div>
        <div className='flex h-16 items-center  justify-between gap-3'>
            <label className='flex items-center justify-center gap-1 font-medium '>
                Join with Mic(🎙) and Camera(🎦)  off😟
                <input type='checkbox'checked={isMicCamToggleOn}onChange={(e) => setIsMicCamToggleOn(e.target.checked)}/>
            </label>
            <DeviceSettings/>
        </div>
        <Button className='rounded-md bg-green-500 px-4 py-2.5 '
        onClick={() =>{
            call.join();
            setIsSetupComplete(true);
        }}>
           Join meeting 

        </Button>
        </div>
  )
}

export default MeetingSetup
