import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = '4d6fc89287be4e05f7bc3914a62b57b02e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

    const [news, setNews] = useState([]);


    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, savedArticles }) => {
                if (command === 'headlines') {
                    setNews(savedArticles);
                }
            }
        });
    }, []);

    return (
        <div>
            <h1>News AI</h1>
        </div>
    )
}

export default App;
