import styled from 'styled-components'

export const Button = styled.button`
    background: transparent;
    color: palevioletred;
    border-radius: 3px;
    border: 2px solid palevioletred;
    padding: 6px 12px;
    cursor: pointer;
    &:hover {
        border-color: red;
    }
`

export const BlueButton = styled(Button)`
    color: blue;
    border-color: blue;
`

export const MyCustomButton = (props) => {
    return <Button>{props.children}</Button>
}