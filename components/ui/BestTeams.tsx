import React from 'react'
import Button from '../shared/Button'
import Carousel from './Carousel'

const BestTeams = () => {
    return (
        <div className='my-24'>
            <h3 className="text-base-black text-center text-[35px] lg:text-[48px] font-bold leading-tight">
                Loved by the world&apos;s best teams
            </h3>
            <Button
                label='See all customer stories →'
                outline
                custom='w-[285px] mx-auto text-center py-[10px] mt-6'
            />

            <Carousel />
        </div>
    )
}

export default BestTeams