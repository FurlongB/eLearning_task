import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import classed from './Footer.css'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});


const footer = (props) => {
    const { classes } = props;
    const [sectTitles, setSectTitles] = useState(null) 
    const [pgType, setPgType] = useState(null)
    useEffect(() =>{
        const loadTitles = [];
        const pageType = []
        for (const key in props.sections){
            loadTitles.push({id: key, title: props.sections[key].title})
                    
        }
        setSectTitles(loadTitles)
        //console.log('props.prevBut: ', props.prevBut.pages[Number(props.curPage-1)].type)
        return () =>{
            //console.log('Clean Up');
        }
    }, []);
    
    const updateSection = (sect) => {
        props.updateCurSect(sect);
    }

    return (
        <footer>
            <div className={classed.info}>
                <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                onClick={props.prevPage}
                disabled={props.prevBut.pages[Number(props.curPage-1)].type === "quest" || props.curPage === 1 ? true : false}
                >
                    Previous
                </Button>

                <div className={classed.text}>
                    {props.curPage + " of " + props.totalPages}
                </div>

                <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                onClick={props.nextPage}
                disabled={(props.prevBut.pages[Number(props.curPage-1)].type === "quest" && props.questfinished === false ) ? true : false}
                >
                    Next
                </Button>
            </div>
        </footer> 
    )
};

footer.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(footer);