import React, {useEffect, useRef, WheelEvent} from 'react';

type ScrollTypeProps = {
    children: React.ReactNode
    style: string
}

export const Scroll: React.FC<ScrollTypeProps> = ({children, style}) => {

    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(()=> {
        const el = ref.current
        if(el) {
            const onWheel = (e: WheelEvent<HTMLDivElement>) => {
                e.preventDefault()
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY * 4,
                    behavior: 'smooth'
                })
            }
            el.addEventListener('wheel', onWheel as unknown as EventListener)

            return () => el.removeEventListener('wheel', onWheel as unknown as EventListener)
        }
    }, [])

    return (
        <div ref={ref} className={style}>
            {
                React.Children.map(children, child => React.Children.only(child))
            }
        </div>
    );
};