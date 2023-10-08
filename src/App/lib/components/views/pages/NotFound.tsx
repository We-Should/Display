import { Container } from "../../../../../lib/components/atoms/Container";

export const NotFound: React.FC<{}> = () => {
    console.log("pages.home");
    return (
        <Container>
            <h1>404: We should(.io) <b>not</b> be here!</h1>
         </Container>
    );
 }