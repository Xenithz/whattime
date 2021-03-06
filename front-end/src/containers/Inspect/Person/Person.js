import React, {useState} from 'react';
import classes from './Person.module.css';
import TimeAgo from 'timeago-react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '../../../components/UI/Button/Button';

export default function Person(props) {
    const [deleteSubmissionModal, setDeleteSubmissionModal] = useState(false);

    return <>
        <span className={classes.Person}>
            <div className={classes.Main}>
                <h4 className={classes.Name}>{props.name}</h4>
                <TimeAgo
                className={classes.TimeAgo}
                datetime={props.createdAt} 
                />
            </div>
            <button onClick={() => setDeleteSubmissionModal(true)} className={classes.DeleteButton}>DELETE</button>
        </span>
        
        
        <Dialog
        open={deleteSubmissionModal}
        onClose={() => setDeleteSubmissionModal(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{borderRadius: '0'}}
        >
          <div className={classes.DeleteModal}>
            <h3 className={classes.ModalHeader}>Are you sure you want to delete <span className='purple'>{props.name}</span>'s submission?</h3>
            <DialogActions>
                <Button 
                onClick={() => setDeleteSubmissionModal(false)}
                buttonClasses='Large'>
                    NO
                </Button>
                <Button 
                onClick={() => props.delete()}
                buttonClasses='Large'>
                    YES
                </Button>
            </DialogActions>
          </div>
        </Dialog>
    </>
}
