import React from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { useContext, useState } from 'react';
import { Card, Tab, Tabs, Row } from 'react-bootstrap';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { toJS } from 'mobx'

const BrandBar = observer(() => {
  const { device } = useContext(Context)
  const [vis, setVis] = useState(
    0
    //   () => {
    //   if (toJS(device.brands[0].name)) {
    //     toJS(device.brands[0].name)
    //   }
    //   else {
    //     return 0;
    //   }
    // }
  );
  let range = React.createRef();

  function RangeHandler() {
    if (toJS(device.brands[Number(range.current.value)].name)) {
      setVis(toJS(device.brands[Number(range.current.value)].name))
    }
  }

  return (
    <>
      Параметр девайса {vis}

      <input
        type="range"
        list="tickmarks"
        min="0"
        max={device.brands.length - 1}
        onInput={RangeHandler}
        ref={range}
        step="1"
      />
      <datalist id="tickmarks">
        {device.brands.map((brand, index) =>

          <option key={brand.id}>{index}</option>
        )
        }

      </datalist>
    </>

  );
});

export default BrandBar;