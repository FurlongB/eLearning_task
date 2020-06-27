import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Image from './Image/page1'

import classed from './Accordian.css'

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

const ControlledExpansionPanels = (props) => {
  const { classes } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classed.Ruled}>
      <div className={classed.Left}>
        <div className={classed.box}>
        <h1>{props.pageTitle}</h1>
          Please select each panel below to learn more about each element in the formula.<br/><br/> 
          <div className={classes.root}>
            <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography className={classes.heading}>S</Typography>
                <Typography className={classes.secondaryHeading}>I am an expansion panel</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel euismod elit. Donec condimentum quam nec mauris aliquet, in hendrerit risus ullamcorper. Pellentesque rhoncus elementum eleifend. Etiam ullamcorper ante vitae orci blandit, id tincidunt lacus finibus. Fusce id mauris facilisis, semper tortor non, cursus risus. Nam quis orci et augue malesuada laoreet. Morbi nec varius nisl. Morbi vehicula ac augue sed placerat. Pellentesque ac metus quis nisl mollis malesuada vitae sit amet dolor.<br/><br/>Nam nec risus quis neque pharetra aliquet. Curabitur venenatis odio sed mauris dictum semper. Donec lobortis lacus ut justo ullamcorper, in sagittis ipsum tempus. Aliquam consectetur nunc nibh, vel tristique tortor blandit at. In faucibus luctus lorem eu interdum. Donec fermentum nisl varius dapibus vestibulum. Sed erat nulla, vestibulum ut porta ut, sollicitudin non ante.
                </Typography>

              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography className={classes.heading}>E</Typography>
                <Typography className={classes.secondaryHeading}>
                  You are currently not an owner
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                In volutpat placerat leo, sed venenatis dui interdum sit amet. Integer non luctus mi. Nulla facilisi. Fusce sit amet finibus tellus. Pellentesque rutrum in justo sit amet malesuada. Phasellus id ante at metus sagittis venenatis. Maecenas finibus ullamcorper diam. Proin sed lectus sed leo porta mattis. Mauris eu augue quis turpis accumsan finibus. Sed sit amet nibh metus. Sed nisl mauris, tincidunt vel lorem quis, placerat viverra odio. Donec facilisis sapien lorem, nec sagittis sapien ultricies vitae. Praesent fermentum augue nec nulla commodo ultrices. Cras nec luctus arcu, nec scelerisque nunc.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography className={classes.heading}>HE</Typography>
                <Typography className={classes.secondaryHeading}>
                  Filtering has been entirely disabled for whole web server
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                Fusce a ligula at turpis tempus volutpat eget a lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vulputate, mi et iaculis dignissim, elit ligula bibendum metus, sed ultrices lorem leo sed nisl. In ut enim nulla. Pellentesque feugiat, urna id bibendum faucibus, neque augue rhoncus felis, vitae tempus felis elit nec justo. Sed malesuada est ut purus pellentesque, ac posuere tellus aliquam. Fusce elementum sit amet libero in ultricies. Nunc at dapibus urna. Etiam magna nisl, dignissim nec blandit id, sagittis eget tellus. Sed accumsan fermentum elit, sed aliquet tortor condimentum eget. Aenean justo eros, ornare sed dignissim nec, convallis eu nunc.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography className={classes.heading}>M</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                Duis posuere facilisis vehicula. Vivamus viverra cursus urna in dapibus. Morbi blandit lacinia dolor, quis placerat ante ultrices eu. Vestibulum id est in tellus posuere ullamcorper. Morbi in dui imperdiet quam commodo volutpat. Pellentesque in dapibus augue, porttitor gravida nisi. Suspendisse rutrum tempus ante at malesuada.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </div>
      </div>
      <div className={classed.Right}>
        <Image />   
      </div>
    </div>
  );
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledExpansionPanels);