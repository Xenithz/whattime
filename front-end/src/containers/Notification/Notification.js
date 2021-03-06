import React from 'react';
import classes from './Notification.module.css';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from '../../components/UI/Button/Button';

import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';

function Notification(props) {
    return <>
        <Dialog
        open={props.modalOpen}
        onClose={props.onCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{borderRadius: '0'}}
        >
          <div className={classes.Modal}>
            <h1 className={classes.ModalHeader}>Error</h1>
            <p className={classes.ModalMessage}>{props.modalMessage}</p>
            <DialogActions>
                <Button 
                onClick={props.onCloseModal}
                buttonClasses='Large'>
                    OK
                </Button>
            </DialogActions>
          </div>
        </Dialog>

        <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={props.snackbarOpen}
        autoHideDuration={4000}
        onClose={props.onCloseSnackbar}
        message={props.snackbarMessage}
        action={
          <>
            <IconButton size="small" aria-label="close" color="inherit" onClick={props.onCloseSnackbar}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </>
}

const mapStateToProps = state => {
    return {
        modalMessage: state.notification.modalMessage,
        modalOpen: state.notification.modalOpen,
        snackbarMessage: state.notification.snackbarMessage,
        snackbarOpen: state.notification.snackbarOpen
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCloseModal: () => dispatch({type: actionTypes.CLOSE_MODAL}),
        onCloseSnackbar: () => dispatch({type: actionTypes.CLOSE_SNACKBAR})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
