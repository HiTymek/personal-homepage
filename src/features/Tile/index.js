import { Wrapper, Title, List } from "./styled";

const Tile = ({ title, content }) => (
    <Wrapper>
        <Title>{title}</Title>
        <List>{content}</List>
    </Wrapper>
);

export default Tile;