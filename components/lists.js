import styled from '@emotion/styled'

const ListButton = styled.button`

    opacity: .8;
    display: flex;
    flex-direction: column;
    gap: 6px; 

    > a > button {
        display: flex; 
        text-align: left;
        gap: 8px;
        height: fit-content;
        padding: 0;
    }

    > a > button > h3 {
        font-size: 14px;
        text-align: left;
    } 

    > a > button:hover {
        opacity: .5;
    }

`

export default ListButton;
