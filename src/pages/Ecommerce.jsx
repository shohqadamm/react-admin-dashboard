import React from 'react'

import { BsCurrencyDollar } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
import { Stacked, Pie, Button, SparkLine } from '../components'
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvervider'

const Ecommerce = () => {
    const {currentColor} = useStateContext()
    return (
        <div className='mt-12'>
            <div className='flex flex-wrap lg:flex-nowrap justify-center'>
                <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl h-44 w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
                    <div className="flex justify-between items-center">
                        <div>
                            <p className='font-bold text-gray-400'>Earnings: </p>
                            <p className='text-2xl'>$55,555.55</p>
                        </div>
                    </div>
                        <div className="mt-6">
                            <Button color="white" bgColor={currentColor} text='Download' borderRadius="10px"  />
                        </div>
                </div>

                <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
                    {earningData.map((item)=>(
                        <div key={item.title} className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl">
                            <button   on type='button' className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl' style={{color:item.iconColor, background:item.iconBg}}>
                                {item.icon}
                            </button>
                            <p className='mt-3'>
                                <span className='text-lg font-semibold'>
                                    {item.amount}
                                </span>
                                <span className={`text-sm text-${item.pcColor} font-extrabold  ml-2`}>
                                    {item.percentage}
                                </span>
                            </p>
                            <p className='text-sm mt-1 text-gray-400'>
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex gap-10 flex-wrap justify-center'>
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
                        <div className="flex justify-between">
                            <p className='font-semibold text-xl'>Revenue Updates</p>
                            <div className='flex items-center gap-4'>
                                <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                                    <span><GoPrimitiveDot/></span>
                                    <span>Expance</span>
                                </p>
                                <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
                                    <span><GoPrimitiveDot/></span>
                                    <span>Budget </span>
                                </p>
                            </div>
                        </div>
                        <div className="flex mt-10 gap-10  justify-center">
                            <div className='border-r-1 border-color m-4 pr-10'>
                                <div>
                                    <p>
                                        <span className='text-3xl font-semibold'>$93,256</span>
                                        <span className='p-1.5 hover:drop-shadow-xl rounded-full bg-green-400 cursor-pointer text-white ml-3 text-xs'>23%</span>
                                    </p>
                                    <p className='mt-1'>Budget</p>
                                </div>
                                <div className='mt-5'>
                                    <p>
                                        <span className='text-3xl font-semibold'>$48,256</span>
                                    </p>
                                    <p className='mt-1'>Expance</p>
                                </div>
                                <div className="mt-5">
                                     <SparkLine currentColor={currentColor} id="column-sparkLine" height="100px" type="Column" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
                                </div>
                                <div className="mt-10">
                                    <Button color="white" bgColor={currentColor} text="Download Report" borderRadius='10px' />
                                </div>
                            </div>
                            <div>
                                <Stacked width="320px" height='360px' />
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Ecommerce