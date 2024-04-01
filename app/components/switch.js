"use client"

import React, { useState } from 'react'

export default function Switch({initialStatus, toggleStatus}) {

  let [currentStat, setStat] = useState(initialStatus);
  
  function statusUpdate(){
    if (currentStat===initialStatus) {
        setStat(toggleStatus)
        console.log(currentStat)
    } else {
        setStat(currentStat)
    }
  }

  return (
    <div class="flex items-center">
    {/*<p class="mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">{currentStat}</p>*/}
    <label class="relative cursor-pointer">
      <input type="checkbox" class="sr-only peer" />
      <div class="w-11 h-6 flex items-center bg-gray-300 rounded-full peer peer-checked:after:translate-x-full after:absolute after:left-[2px] peer-checked:after:border-white after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#007bff]">
      </div>
    </label>
  </div>
  );
}
