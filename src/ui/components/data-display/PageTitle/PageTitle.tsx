import React from 'react';
import { PageTitleContainer, PageTitleStyled, PageSubtitleStyle } from './PageTitle.style';

interface PageTitleProps{
    title: String;
    // ? é um valor opcional
    subtitle?: String | JSX.Element;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
    /* entre chaves é um scape para ele saber que nao sera string */
    
    return (
        <div>
            <PageTitleContainer>
                <PageTitleStyled>{props.title}</PageTitleStyled>
                <PageSubtitleStyle>{props.subtitle}</PageSubtitleStyle>
            </PageTitleContainer>
            
        </div>
    )
}

export default PageTitle;