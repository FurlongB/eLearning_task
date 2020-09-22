import React, {useState, useEffect} from 'react';
import TextGraphics from '../TextGraphics/TextGraphics';
import TextGraphicsBs from '../TextGraphics_bs/TextGraphics_bs';
import Table from '../Table/Table';
import Graph from '../Graph/Graph';
import TableBspec from '../Table_bspec/Table_bspec';
import SelectPlot from '../Select_plot/SelectPlot';
import TableInput from '../Table_Input/Table_input';
import TextInput from '../Text_Input/Text_Input';
import Select from '../Select/Select';
import TextGraphicNs from '../TextGraphics_ns/TextGraphics_ns';
import TextDual from '../Text_Dual/TextDual';
import BindData from '../Bind_Data/Bind_Data';
import Receptors from '../Receptors/Receptors';
import Sentence from '../Sentence/Sentence';
import CheckList from '../CheckList/CheckList';

import ScoreContext from '../../Context/score-context';

const NavTabs =(props) => {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  useEffect(() =>{
    setValue(props.page.pageSrc);
    setTitle(props.page.name);
    return () =>{
      //console.log('Clean Up');
    }
  }, [props]);

  const thisFinish = (nValue) =>{
    //console.log('nValue: ', nValue)
    props.pageNext(nValue)
  }

    return (
        <div>
          {value === "text" ? <TextGraphics pageTitle={title} nextBut={thisFinish.bind(this)}/>: null}
          {value === "text_bs" ? <TextGraphicsBs pageTitle={title} nextBut={thisFinish.bind(this)}/>: null}
          {value === "table" ? <Table pageTitle={title} nextBut={thisFinish.bind(this)}/>: null}
          {value === "graph" ? <Graph pageTitle={title} nextBut={thisFinish.bind(this)}/>: null}
          {value === "text_input" ? <TextInput pageTitle={title} nextBut={thisFinish.bind(this)}/>: null}
          {value === "table_bspec" ? <TableBspec pageTitle={title} nextBut={thisFinish.bind(this)}/>: null}
          {value === "select" ? <Select pageTitle={title} nextBut={thisFinish.bind(this)}/>: null}
          {value === "text_ns" ? <TextGraphicNs pageTitle={title} nextBut={thisFinish.bind(this)}/>: null}
          {value === "table_input" ? <TableInput pageTitle={title} nextBut={thisFinish.bind(this)}/>: null}
          {value === "text_dual" ? <TextDual pageTitle={title} nextBut={thisFinish.bind(this)}/>: null}
          {value === "bind_data" ? <BindData pageTitle={title} nextBut={thisFinish.bind(this)}/>: null}
          {value === "receptors" ? <Receptors pageTitle={title} nextBut={thisFinish.bind(this)}/>: null}
          {value === "select_plot" ? <SelectPlot pageTitle={title} nextBut={thisFinish.bind(this)}/>: null}
          {value === "sentence" ? <Sentence pageTitle={title} nextBut={thisFinish.bind(this)}/>: null}
          {value === "check_list" ? <CheckList pageTitle={title} nextBut={thisFinish.bind(this)}/>: null}
        </div>
    );
}

export default NavTabs;