import React from 'react'
import './BottomDetail.scss'
import BDetailCard from './BottomDetail/BDetailCard'
import {AiOutlineEye} from 'react-icons/ai'
import {RiBarChart2Fill} from 'react-icons/ri'
import {FiStopCircle} from 'react-icons/fi'


const BottomDetail = ({icon, }) => {

    const shoppingViewsIcon= <AiOutlineEye size={22} color='#4C5AA1' />
    const storeDynamicsIcon = <RiBarChart2Fill size={22} color='#4C5AA1' />
    const trendGooodsIcon = <FiStopCircle size={22} color='#4C5AA1' />
    return (
        <div className='bottomdetail d-flex justify-content-around'>
            <BDetailCard icon={trendGooodsIcon} heading='Trend Goods' number="204"/>
            <BDetailCard icon={shoppingViewsIcon} heading='Shopping Views' number="65,540"/>
            <BDetailCard icon={storeDynamicsIcon} heading='Trending Goods' number="324"/>
        </div>
    )
}

export default BottomDetail