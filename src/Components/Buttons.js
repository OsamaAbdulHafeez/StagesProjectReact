import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`
const Button = styled.button`
    background-color: #6e45f2;
    padding: 10px 20px;
    border: none;
    color: white;
    font-size: 20px;
    font-weight: 500;
    border-radius: 20px;
`
const Buttons = ({ level, setLevel }) => {
    const previous = () => {
        if (level == 1) {
            setLevel(3)
        } else {
            setLevel((prev) => prev - 1)
        }

    }
    const next = () => {
        if (level == 3) {
            setLevel(1)
        } else {
            setLevel((prev) => prev + 1)
        }
    }
    return (
        <Container>
            <Button onClick={previous}>Previous</Button>
            <Button onClick={next}>Next</Button>
        </Container>
    )
}

export default Buttons
