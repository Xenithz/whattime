import React, {useEffect} from 'react';
import classes from './MySurveys.module.css';
import {connect} from 'react-redux';
import loadSurveysAsync from '../../store/actions/loadSurveys';
import AuthRequired from '../Auth/AuthRequired';
import ScrollUpOnLoad from '../../components/ScrollUpOnLoad/ScrollUpOnLoad';

import Survey from '../../components/Survey/Survey';

function MySurveys(props) {
    useEffect(() => {
        if (props.accessToken && props.surveys.length === 0) {
            props.onLoadSurveys(props.accessToken, 0)
        }
    }, [props.accessToken]);

    return <div className={classes.MySurveys}>
        <AuthRequired history={props.history}/>
        <ScrollUpOnLoad/>
        <h1 className={classes.Header}>My Surveys</h1>
        {props.surveys.length === 0 ?
            <div className={classes.NoSurveysBox}>
                
            </div>
        : null}
        <div className={classes.SurveysBox}>
            {props.surveys.map(survey => {
                return <Survey
                key={survey._id} 
                survey={survey}
                history={props.history}/>
            })}
        </div>
        
    </div>
}

const mapStateToProps = state => {
    return {
        accessToken: state.auth.accessToken,
        surveys: state.surveys.surveys
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadSurveys: (accessToken, currentPosts) => dispatch(loadSurveysAsync(accessToken, currentPosts))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MySurveys);
