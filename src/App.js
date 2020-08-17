import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import wordsToNumbers from 'words-to-numbers';
import useStyles from './styles';
const alanKey = '4d6fc89287be4e05f7bc3914a62b57b02e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

    const classes = useStyles();

    const [news, setNews] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);



    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, savedArticles, number }) => {
                if (command === 'headlines') {
                    setNews(savedArticles);
                    setActiveArticle(-1);
                } else if (command === 'highlight') {
                    setActiveArticle(prevActiveArticle => prevActiveArticle + 1);
                } else if (command === 'open') {
                    const parsedNumber = number.length > 2 ? wordsToNumbers(number, { fuzzy: true }) : number;

                    if (parsedNumber > savedArticles.length) {
                        alanBtn().playText('Please try that again.');
                    } else if (savedArticles[parsedNumber - 1]) {
                        alanBtn().playText('Opening')
                        window.open(savedArticles[parsedNumber - 1].url, '_blank');
                    }
                }
            }
        });
    }, []);

    return (
        <div>
            <div className={classes.logoContainer}>
                <img src="https://alan.app/voice/images/previews/preview.jpg" className={classes.alanLogo} alt="alan logo" />
            </div>
            <NewsCards articles={news} activeArticle={activeArticle} />
        </div>
    )
}

export default App;
