import styled from "styled-components"

export const Form = styled.form`
height: 70vh;
min-width: 100vw;
background-color: #edc8c824;
display: flex;
justify-content: center;
`

export const Section = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 3rem;
`

export const Label = styled.label`
display: block;
width: 15vw;
text-align: center;
font-size: 15px;
`

export const Input = styled.input`
width: 20vw;
height: 5vh;
border-radius: 1rem;
border: solid #6b0808cc 1px;
color: #3c0404;
text-align: center;
margin: 1rem;
`

export const Select = styled.select`
width: 20vw;
height: 5vh;
border-radius: 1rem;
border: solid #6b0808cc 1px;
color: #3c0404;
margin: 1rem;
`

export const Button = styled.button`
width: 15vw;
height: 5vh;
border: solid 1px black;
border-radius: 1rem;
background: #ecbcbc;
`

export const Container = styled.div`
display: flex;
justify-content: center;
`