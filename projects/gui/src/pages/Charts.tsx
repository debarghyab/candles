import React from 'react'
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

const Charts = ({ listing: string }) => {
  return (
    <AdvancedRealTimeChart theme="dark" autosize></AdvancedRealTimeChart>
  )
}

export default Charts
