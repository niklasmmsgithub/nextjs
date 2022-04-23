import styled from 'styled-components'

const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
`

const StyledLabel = styled.label`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
`

const LabelText = styled.span`
    color: black;
    ${StyledCheckbox}:checked + && {
        color: blue;
    }
`

export const Checkbox = (props) => {
    return (
        <StyledLabel>
            <StyledCheckbox defaultChecked />
            <LabelText>{props.children}</LabelText>
        </StyledLabel>
    )}