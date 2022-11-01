import { Wrapper, Title, List } from "./styled";

const BigTile = ({ title, content }) => (
    <Wrapper>
        <Title>{title}</Title>
        <List>{content}</List>
    </Wrapper>
);

export default BigTile;