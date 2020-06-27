import React, {useState, useContext} from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import SectionIndicate from './ProgressIndictor/ProgressIndictor';
import MenuHeader from './Header/MenuHeader';

import SectContext from '../../Context/sec-context';

import classed from './Menu.css';

import Spinner from '../UI/Spinner/Spinner'

const Menu = (props) => {
  const getSect = useContext(SectContext);
  const [open, setOpen] = useState(false);
  const [sectionComplete, setSectionComplete] = useState(null);

  const loadProgress = () =>{
    const loadCompletion = [];
    for (const key in props.titles){
      loadCompletion.push({id: props.titles[key].id, title: props.titles[key].title, completed: getSect.status.completion[key]});          
      if(Object.keys(loadCompletion).length === Object.keys(props.titles).length){
        setSectionComplete(loadCompletion);
        setOpen(true);
      }
    }
  }; 
  
  const setUpMenu = (loadComplete) =>{
    let sectionTitles = <Spinner />;

    sectionTitles = loadComplete.map(titles =>(
        <SectionIndicate id={titles.id} key={titles.id} title={titles.title} complete={titles.completed} menuClick={handleMenu.bind(this)}/>
      ));
    return sectionTitles;
  }

  const handleClickOpen = () => {
    loadProgress();
  };

  const handleClose = () => {
    setOpen(false);
    setSectionComplete(null);
  };

  const handleMenu = (Key) =>{
    handleClose();
    props.handleReformat(Key);
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Menu
      </Button>
      <Dialog open={open}>
        <div className={classed.Menu} >
          <MenuHeader click={handleClose.bind(this)}/> 
          {sectionComplete !== null ? setUpMenu(sectionComplete) : null}
        </div>
      </Dialog>
    </div>
  );
}

export default Menu;