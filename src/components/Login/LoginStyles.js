import styled from 'styled-components'
import { transparentize, darken, rgba } from 'polished'

export const LoginDiv = styled.div`
	width: 100%;
	display: flex;
	flex-flow: column;	
	align-items: center;
    justify-content: center;
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    float: left;
    border-radius: 4px;
	color: ${(p) => p.theme.button.color ? p.theme.button.color : '#000'};
	background: ${(props) => props.isDisabled ? props.disabledColor : props.theme.button.background};
	padding: 0px;
	/* padding: ${(props) => props.hasIconText ? '0 13px 0 15px' : props.hasText ? '0 8px 0 15px' : props.hasIcon ? '0 10px' : '0 0 0 15px'}; */
	padding: ${(p) => p.theme.button.padding ? p.theme.button.padding : '0px 15px'};
	height: ${(props) => props.theme.button ? props.theme.button.height : '35px'};
	/* margin: 0.3rem 0.7rem 0.7rem 0; */
	border: none;
    text-decoration: none;
	cursor: ${(props) => props.isDisabled ? 'not-allowed' : 'pointer'};
	user-select: none;
	outline: none;

    &:focus {
        border-color: ${(props) => props.isDisabled ? props.disabledColor : transparentize(0.7, props.theme.button.background)};		 
		box-shadow: ${(props) => props.isDisabled ? null : `0 0 0 3px ${transparentize(0.7, props.theme.button.background)}`};
    }

    &&:active {
        background: ${(props) => props.isDisabled ? props.disabledColor : darken(0.1, props.theme.button.background)};
        border-color: ${(props) => props.isDisabled ? props.disabledColor : darken(0.1, props.theme.button.background)};
		box-shadow: ${(props) => props.isDisabled ? null : `inset 0 1px 2px ${transparentize(0.7, rgba(0, 0, 0, 0.1))}`}; 
		transform: ${(props) => props.isDisabled ? null : 'translateY(2px)'};
    }

    &:hover {
		background: ${(props) => props.isDisabled ? props.disabledColor : transparentize(0.2, props.theme.button.background)};
        border-color: ${(props) => props.isDisabled ? props.disabledColor : transparentize(0.7, props.theme.button.background)};		 
		box-shadow: ${(props) => props.isDisabled ? null : `0 0 0 3px ${transparentize(0.7, props.theme.button.background)}`};
    }
`

export const Input = styled.input`    
	font-size: 16px;
	font-weight: 200;
    padding: 1rem;
    color: ${(props) => props.color ? props.color : props.theme.input.color};
    background: ${(props) => props.background ? props.background : props.theme.input.background};
    border: ${(props) => props.theme.input.border ? props.theme.input.border : 'none'};
	border-radius: ${(props) => props.theme.input.borderRadius ? props.theme.input.borderRadius : '4px'};
    box-sizing: border-box;
	outline: none;

    &:hover {		
        border-color: ${transparentize(0.7, '#3B97D3')};		 
		box-shadow: ${`0 0 0 3px ${transparentize(0.7, '#3B97D3')}`};
		cursor: ${(props) => props.isDisabled ? 'not-allowed' : 'pointer'};
    }

    &:focus {
		box-shadow: ${(props) => props.theme.input.focusColor ? `0 0 0 3px ` + props.theme.input.focusColor : `0 0 0 3px #13A085`};
    }
`
