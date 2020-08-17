import React, { useEffect, useState, createRef } from 'react';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import classNames from 'classnames';
import useStyles from './styles';

const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, i, activeArticle }) => {

    const classes = useStyles();
    const [elref, setElRef] = useState([])
    const scrollToRef = ref => window.scroll(0, ref.current.offsetTop - 50);

    useEffect(() => {
        setElRef(refs => Array(20).fill().map((_, j) => refs[j] || createRef()));
    }, []);


    useEffect(() => {
        if (i === activeArticle && elref[activeArticle]) {
            scrollToRef(elref[activeArticle])
        }
    })

    return (
        <Card ref={elref[i]} className={classNames(classes.card, activeArticle === i ? classes.activeCard : null)}>
            <CardActionArea href={url} target="_blank">
                <CardMedia className={classes.media} image={urlToImage} />
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
                </div>
                <Typography className={classes.title} gutterBottom variant="h5">{title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" href={url} target="_blank">Learn More</Button>
                <Typography variant="h5" color="textSecondary">{i + 1}</Typography>
            </CardActions>
        </Card>
    )
}

export default NewsCard;
