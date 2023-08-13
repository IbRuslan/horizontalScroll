import React from 'react';

type ScrollTypeProps = {
    children: React.ReactNode
    style: string
}

export const Scroll: React.FC<ScrollTypeProps> = ({children, style}) => {

    return (
        <div className={style}>
            {
                React.Children.map(children, child => React.Children.only(child))
            }
        </div>
    );
};