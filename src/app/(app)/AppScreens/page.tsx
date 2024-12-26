'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Download, Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDarkMode)
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
    document.documentElement.classList.toggle('dark', newDarkMode)
  }

  return (
    <div className={`min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800 flex flex-col`}>
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-7xl w-full">
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Softrestart tarafından geliştirilen uygulamamızla, KKTC'deki sanayi ustalarına dijital kolaylık! Gelir-gider takibi, müşteri rezervasyonları ve araç geçmişi bir arada.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="md:col-start-1 md:row-start-1">
              <DeviceFrame 
                type="ios"
                downloadLink="https://apps.apple.com/us/app/durak-k%C4%B1br%C4%B1s/id6447314052"
                buttonText="iOS için İndir"
                buttonColor="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
            </div>
            <div className="md:col-start-2 md:row-start-1">
              <DeviceFrame 
                type="android"
                downloadLink="https://play.google.com/store/apps/details?id=softrestart.DurakKibris.technology"
                buttonText="Android için İndir"
                buttonColor="bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700"
                description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function DeviceFrame({ type, downloadLink, buttonText, buttonColor, description }: {
  type: 'android' | 'ios'
  downloadLink: string
  buttonText: string
  buttonColor: string
  description: string
}) {
  const isAndroid = type === 'android'

  return (
    <motion.div 
      className="flex flex-col md:flex-row items-center bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {isAndroid ? (
        <>
          <div className="p-6 flex-1">
            <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
            <a href={downloadLink} target="_blank" rel="noopener noreferrer">
              <motion.button 
                className={`flex items-center gap-2 ${buttonColor} text-white font-semibold py-2 px-4 rounded-full transition duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                {buttonText}
              </motion.button>
            </a>
          </div>
          <div className={`border-8 border-black rounded-3xl p-2 bg-black m-4`}>
            <div className="w-48 h-96 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden relative">
              {/* Replace with actual screenshot */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 animate-pulse"></div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={`border-8 border-gray-300 rounded-3xl p-2 bg-gray-100 dark:bg-gray-600 m-4`}>
            <div className="w-48 h-96 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden relative">
              {/* Replace with actual screenshot */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 animate-pulse"></div>
            </div>
          </div>
          <div className="p-6 flex-1">
            <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
            <a href={downloadLink} target="_blank" rel="noopener noreferrer">
              <motion.button 
                className={`flex items-center gap-2 ${buttonColor} text-white font-semibold py-2 px-4 rounded-full transition duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                {buttonText}
              </motion.button>
            </a>
          </div>
        </>
      )}
    </motion.div>
  )
}

