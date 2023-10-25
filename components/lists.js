import styled from '@emotion/styled'

const ListButton = styled.button`

    > button {
        display: flex; 
        text-align: left;
        gap: 10px;
        height: fit-content;
        padding: 0;
    }

    > button > p {
        font-size: 14px;
        font-weight: 500;
    }

    &:hover {
        transform: rotate(20deg);

    }
`

export default ListButton;
