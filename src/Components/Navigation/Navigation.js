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

import ScoreContext from '../../Context/score-context';

const NavTabs =(props) => {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  useEffect(() =>{
    setValue(props.page.pageSrc);
    setTitle(props.page.name);
    return () =>{
      console.log('Clean Up');
    }
  }, [props]);

    return (
        <div>
          {value === "text" ? <TextGraphics pageTitle={title} />: null}
          {value === "text_bs" ? <TextGraphicsBs pageTitle={title}/>: null}
          {value === "table" ? <Table pageTitle={title} />: null}
          {value === "graph" ? <Graph pageTitle={title} />: null}
          {value === "text_input" ? <TextInput pageTitle={title} />: null}
          {value === "table_bspec" ? <TableBspec pageTitle={title} />: null}
          {value === "select" ? <Select pageTitle={title} />: null}
          {value === "text_ns" ? <TextGraphicNs pageTitle={title} />: null}
          {value === "table_input" ? <TableInput pageTitle={title} />: null}
          {value === "text_dual" ? <TextDual pageTitle={title} />: null}
          {value === "bind_data" ? <BindData pageTitle={title} />: null}
          {value === "receptors" ? <Receptors pageTitle={title} />: null}
          {value === "select_plot" ? <SelectPlot pageTitle={title} />: null}
          {value === "sentence" ? <Sentence pageTitle={title} />: null}
        </div>
    );
}

export default NavTabs;