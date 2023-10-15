import { Container, Title } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({children, title}) => {
    return (
        <Container>
            <Title>{title}</Title>
            {children}
        </Container>
    );
};


Section.propTypes = {
    title: PropTypes.string,
};