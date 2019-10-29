import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {CTX} from '../Store/Store';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComments} from "@fortawesome/free-solid-svg-icons";


const useStyles = makeStyles(theme => ({
    root: {
        width: '80%',
        height: '29rem',
        margin: 'auto',
        marginTop: '5%',
        padding: theme.spacing(3, 2),
        textAlign: 'center',
        backgroundColor: 'white',
        opacity: '0.9',
        borderRadius: '20px',
        border: '1px solid black',


    },
    flex: {
        display: 'flex',
        alignItems: 'center'
    },
    topicsWindow: {
        width: '30%',
        height: '19rem',
        borderRight: '3px solid #FF8E53',

    },
    chatWindow: {
        width: '70%',
        height: '19rem',
        padding: '20px'
    },
    chatBox: {
        width: '85%',
        fontSize: '20px',
    },
    button: {
        width: '15%',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: '1px solid purple',
        fontSize: '18px',
    },
    chip: {
        backgroundColor: '#FF8E53',
        opacity: '0.8',

    }
}));

export default function Dashboard() {


    const classes = useStyles();

    const {allChats, sendChatAction, user} = React.useContext(CTX);
    const topics = Object.keys(allChats);

    const [activeTopic, changeActiveTopic] = React.useState(topics[0]);
    const [textValue, changeTextValue] = React.useState('');


    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h5" component="h5" style={{color: 'purple'}}>
                    chat o TAJLANDII
                    <FontAwesomeIcon icon={faComments} size="2x" style={{marginLeft: '20px', color: '#FE6B8B'}}/>
                </Typography>
                <Typography variant="h7" component="h7">
                    aktualny temat: {activeTopic}
                </Typography>
                <div className={classes.flex}>
                    <div className={classes.topicsWindow}>
                        <List>
                            <h4 style={{color: 'purple'}}>wybierz temat</h4>
                            {
                                topics.map(topic => (
                                    <ListItem onClick={e => changeActiveTopic(e.target.innerText)} key={topic} button>
                                        <ListItemText primary={topic}/>
                                    </ListItem>
                                ))
                            }

                        </List>

                    </div>
                    <div className={classes.chatWindow}>

                        {
                            allChats[activeTopic].map((chat, i) => (
                                <div className={classes.flex} key={i}>
                                    <Chip label={chat.from} className={classes.chip}/>
                                    <Typography variant='body1' gutterBottom>{chat.message}</Typography>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={classes.flex}>
                    <TextField
                        label="Napisz wiadomość"
                        className={classes.chatBox}
                        onChange={e => changeTextValue(e.target.value)}
                        value={textValue}
                    />
                    <Button variant="contained" color="primary" className={classes.button}
                            onClick={() => {
                                sendChatAction({from: user, message: textValue, topic: activeTopic});
                                changeTextValue('');
                            }}
                    >
                        Wyślij
                    </Button>
                </div>
            </Paper>
        </div>
    );
}