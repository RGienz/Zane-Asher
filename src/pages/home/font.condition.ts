// import { useEffect } from 'react'

// export function useFontStyle(){
//     useEffect(() => {
//         const linkId = 'google-font-henny-penny';
//         if (!document.getElementById(linkId)) {
//             const link = document.createElement('link');
//             link.id = linkId;
//             link.rel = 'stylesheet';
//             // link.href = 'https://fonts.googleapis.com/css2?family=Henny+Penny&display=swap';
//             // link.href = 'https://fonts.googleapis.com/css2?family=Atma:wght@300;400;500;600;700&display=swap';
//             link.href = 'https://fonts.googleapis.com/css2?family=Atma:wght@300;400;500;600;700&family=Freckle+Face&display=swap';
//             document.head.appendChild(link);
//         }
//     }, []);

// }

import { useEffect } from 'react'

export function useFontStyle(){
    useEffect(() => {
        const linkId = 'google-fonts-custom';
        if (!document.getElementById(linkId)) {
            const link = document.createElement('link');
            link.id = linkId;
            link.rel = 'stylesheet';
            // link.href = 'https://fonts.googleapis.com/css2?family=Atma:wght@300;400;500;600;700&family=Freckle+Face&display=swap';
            link.href = 'https://fonts.googleapis.com/css2?family=Atma:wght@300;400;500;600;700&family=Freckle+Face&display=swap';
            document.head.appendChild(link);
        }
    }, []);
}