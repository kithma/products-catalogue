import React from "react";
import FlexContainer from "./FlexContainer";
import styled from "../../theme/Theme";

interface Props {
    onChange: (val: string) => void;
}
const SearchInput = ({ onChange }: Props) => {
    return (
        <FlexContainer>
            <StyledInputContainer>
                <img src="./icons/search-icon.svg" alt="" />
                <input
                    type="text"
                    placeholder="Type here..."
                    onChange={(e) => onChange(e.target.value)}
                />
            </StyledInputContainer>
        </FlexContainer>
    );
};

export default SearchInput;

const StyledInputContainer = styled(FlexContainer)`
    border: 1px solid ${(props) => props.theme.colors.colorLightGrey};
    background: ${(props) => props.theme.colors.colorSmoke};
    height: 25px;
    padding: 5px 20px;
    gap: 10px;

    input {
        width: 100%;
        border: none;
        background: ${(props) => props.theme.colors.colorSmoke};
        height: 23px;

        :focus {
            outline: 0;
        }
    }
`;
