import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
    media: {
        height: 250,
    },
    border: {
        border: 'solid',
    },
    fullHeightCard: {
        height: '100%',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderBottom: '10px solid white',
        position: 'relative',
    },
    activeCard: {
        transform: 'scale(1.05)',
        transition: 'transform 0.3s ease-in-out',
        zIndex: '11'
    },
    grid: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
    },
    title: {
        padding: '0 16px',
    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    overlay: {
        position: 'absolute',
        top: '0',
        left: '0',
        height: '100%',
        width: '100%',
        zIndex: '10',
        backgroundColor: 'rgba(0,0,0,0.5)'
    }
});

export default styles;