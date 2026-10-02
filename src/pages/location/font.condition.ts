import { useEffect } from 'react'

export function useFontStyle(){
    useEffect(() => {
        const linkId = 'google-font-henny-penny';
        if (!document.getElementById(linkId)) {
            const link = document.createElement('link');
            link.id = linkId;
            link.rel = 'stylesheet';
            link.href = 'https://fonts.googleapis.com/css2?family=Henny+Penny&display=swap';
            document.head.appendChild(link);
        }
    }, []);

}