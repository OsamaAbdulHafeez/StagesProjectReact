import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
`
const ListNumber = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    font-weight: 500;
    font-size: 24px;
`
const StagesList = [1,2,3]
const Stages = ({level}) => {
  return (
    <Container>
        {StagesList.map(list=>(
            <ListNumber style={{backgroundColor:list === level ? "#6e45f2" : "grey",color:list === level ? "white" : "black"}}>
                {list}
            </ListNumber>
        ))}
    </Container>
  )
}

export default Stages
