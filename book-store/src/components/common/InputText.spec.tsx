import {render, screen} from '@testing-library/react';

import InputText from "./inputText"
import { BookStoreThemeProvider } from '../../context/themeContext';
import React from 'react';

describe("InputText 컴포넌트 테스트", () => {
    it("렌더를 확인", () => {
        render(
            <BookStoreThemeProvider>
                <InputText placeholder='여기에 입력하세요' />
            </BookStoreThemeProvider>
        );

        expect(screen.getByPlaceholderText('여기에 입력하세요')).toBeInTheDocument();
    });

    it("forwordRef 테스트", () => {
        const ref = React.createRef<HTMLInputElement>();
        render(
            <BookStoreThemeProvider>
                <InputText placeholder='여기에 입력하세요' ref={ref} />
            </BookStoreThemeProvider>
        );

        expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });
});