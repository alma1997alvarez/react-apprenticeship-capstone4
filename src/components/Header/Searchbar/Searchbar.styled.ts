import styled from 'styled-components';

const SearchbarInput = styled.input`
    margin:10px;
    padding:5px 15px;
    font-family: 'Montserrat';
    color: #1f1f1f;
    background: #fff;
    height: 2rem;
    width: 400px;
    border-radius: 0.5em;
    border: none;
    transition: background-color 0.5s ease;
    margin-left: auto;

    &:hover {
        background: #fff;
        transition: background-color 0.5s ease;
    }

    &:focus {
        outline: none;
    }
`;

export { SearchbarInput };
