import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
     
`
const RoadMap = [
    "Learn Javascript",
    "Learn ReactJS",
    "Learn NodeJS"
]
const Para = styled.p`
    font-size: 40px;
`
const Texts = ({level}) => {
  return (
    <Container>
        <Para>{RoadMap[level-1]}</Para>
    </Container>
  )
}

export default Texts
