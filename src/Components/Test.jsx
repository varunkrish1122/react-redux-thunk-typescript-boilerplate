import React, { useEffect, useState } from "react";

import {getData} from '@/Utils/testUtil'

const Test = () => {
  const [data, setData] = useState();
  useEffect(() => {
    setData(getData())
  }, [])
  return <div>
      {data}
  </div>
};

export default Test
