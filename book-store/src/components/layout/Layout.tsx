import styled from "styled-components";  // styled-components 임포트 추가
import Header from "../common/Header";
import Footer from "../common/Footer";

interface LayoutProps {
    children: React.ReactNode; 
}

function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <LayoutStyle>{children}</LayoutStyle>
            <Footer />
        </>
    );
}

const LayoutStyle = styled.main`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.large}; 
  padding: 20px 0;
`;

export default Layout;
