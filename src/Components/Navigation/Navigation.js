import React, {useState, useEffect} from 'react';
import TextGraphics from '../TextGraphics/TextGraphics';
import Mcq1 from '../MCQ1/MCQ1';
import Mcqx from '../MCQx/MCQx';
import Accordian from '../Accordian/Accordian';
import Video from '../VideoScreen/VideoScreen';
import AccordianFs from '../Accordian_fs/Accordian_fs';
import Scenario from '../Scenario/Scenario';
import TextGraphicsFs from '../TextGraphics_fs/TextGraphics_fs';
import TextGraphicsNs from '../TextGraphics_ns/TextGraphics_ns';
import TextGraphicsBs from '../TextGraphics_bs/TextGraphics_bs';
import Discuss from '../Discuss/Discuss';
import Animation from '../Animation/Animation';
import TextFull from '../TextGraphics_full/TextFull';
import Table from '../Table/Table';
import Graph from '../Graph/Graph';
import TableBspec from '../Table_bspec/Table_bspec';
import Select from '../Select/Select';
import TableInput from '../Table_Input/Table_input'

const NavTabs =(props) => {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  useEffect(() =>{
    setValue(props.page.pageSrc);
    setTitle(props.page.name);
    console.log('props.page.pageSrc: ', props.page.pageSrc)
    return () =>{
      console.log('Clean Up');
    }
  }, [props]);

    return (
        <div>
          {value === "text" ? <TextGraphics pageTitle={title}/>: null}
          {value === "accordian" ? <Accordian pageTitle={title}/>: null}
          {value === "mcq1" ? <Mcq1 pageTitle={title}/> : null}
          {value === "mcqx" ? <Mcqx pageTitle={title}/> : null}
          {value === "video" ? <Video pageTitle={title}/> : null}
          {value === "accordian_fs" ? <AccordianFs pageTitle={title}/> : null}
          {value === "scenario" ? <Scenario pageTitle={title}/> : null}
          {value === "text_fs" ? <TextGraphicsFs pageTitle={title}/>: null}
          {value === "discuss" ? <Discuss pageTitle={title}/>: null}
          {value === "text_ns" ? <TextGraphicsNs pageTitle={title}/>: null}
          {value === "text_bs" ? <TextGraphicsBs pageTitle={title}/>: null}
          {value === "animation" ? <Animation pageTitle={title}/>: null}
          {value === "text_full" ? <TextFull pageTitle={title}/>: null}
          {value === "table" ? <Table pageTitle={title}/>: null}
          {value === "graph" ? <Graph pageTitle={title}/>: null}
          {value === "table_bspec" ? <TableBspec pageTitle={title}/>: null}
          {value === "select" ? <Select pageTitle={title}/>: null}
          {value === "table_input" ? <TableInput pageTitle={title}/>: null}
        </div>
    );
}

export default NavTabs;