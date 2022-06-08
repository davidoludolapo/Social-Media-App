import React from 'react'
import { TrendData } from '../../Data/TrendData'
import "./trendcard.css"

function Trendcard() {
  return (
    <div className='trendCard'>
        <h3>Trends for you</h3>
        {TrendData.map((trend)=>{
            return  (
                <div className="trend">
                    <span>#{trend.name}</span>
                    <span>#{trend.shares}k shares</span>
                </div>
            )
        })}
    </div>
  )
}

export default Trendcard