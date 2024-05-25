import CampaignCard from '@/components/campaign-card'
import React from 'react'
import logo from "../public/assets/images/logo.svg"

const Home = () => {
  return (
    <div>
      <CampaignCard image={logo} title={"Reforestation Campaign"} amount={1000} date={"25th May, 2024"} />

    </div>
  )
}

export default Home