import React from 'react'
import { Styled, styled } from 'styled-components'
import Section from './Section'


function Home() {
  return (
    <Container>
        <Section
        title="Model S"
        description="Order Online For Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory"
        />

        <Section
        title="Model Y"
        description="Order Online For Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory"
        />

        <Section
        title="Model X"
        description="Order Online For Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory"
        />

        <Section
        title="Model 3"
        description="Order Online For Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory"
        />
        
        <Section
        title="Solar Panels"
        description="Lower Cost Solar Panels in America"
        backgroundImg="solar-panel.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory"
        />

        <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImg="solar-roof.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory"
        />

        <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText = "Shop Now"
        />
       
    </Container>
  )
}

export default Home

const Container = styled.div`
height: 100 vh;
`
