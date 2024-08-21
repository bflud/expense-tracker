import styled from "styled-components";


export const TableLine = styled.tr``;


export const TableColumn = styled.td`
    padding: 10px 0px;
    
`;

export const Category = styled.div `
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: ${props => props.color};
`;


export const Value = styled.div <{color: string}>`
    color: ${props => props.color}
`;