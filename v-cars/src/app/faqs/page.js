import FAQ from '@/components/FAQ'
import Header from '@/components/Header'
import SubHero from '@/components/SubHero'
import React from 'react'

function page() {
  return (
    <div>
      <Header/>
      <SubHero title={"Faqs"}/>
        <FAQ/>
    </div>
  )
}

export default page