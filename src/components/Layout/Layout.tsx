import { ReactNode } from "react";
import { Container } from "./Layout.styled";

type Props = {
  children: ReactNode;
}

export const Layout = ({children} : Props) => {
    return (
        <Container>{children}</Container>
    )
};
