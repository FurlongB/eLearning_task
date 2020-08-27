import React from 'react';

import Image from './Image/page1';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import classes from './TextGraphics_ns.css';

const useStyles = makeStyles({
    input: {
      display: 'none',
    },
  });

const ruled = (props) =>{
    const classed = useStyles();
    props.calScore(0, "6");
    return(
        <div className={classes.Ruled}>
            <div className={classes.Left}>
                <div className={classes.box}>
                  <h1>{props.pageTitle}</h1>
                  Plot a scatchard plot on the graph paper provided and upload an image of this to canvas
                  <div className={classes.marginUpload}>
                        <input
                        accept="image/*"
                        className={classed.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="primary" component="span">
                        Upload
                        </Button>
                    </label>
                 </div>
                </div> 

            </div>
            <div className={classes.Right}>
                <Image />   
            </div>
        </div>
        
    );
};


export default (ruled);


