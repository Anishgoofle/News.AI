import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles';
const alanKey = '4d6fc89287be4e05f7bc3914a62b57b02e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

    const classes = useStyles();

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
            <div className={classes.logoContainer}>
                <img src="https://alan.app/voice/images/previews/preview.jpg" className={classes.alanLogo} alt="alan logo" />
            </div>
            <NewsCards articles={news} />
        </div>
    )
}

export default App;
