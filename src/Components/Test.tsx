import React, { useEffect, useState } from "react";

import {getData} from '@/Utils/testUtil'

const Test: React.FC = () => {
  const [data, setData] = useState<String>();
  useEffect(() => {
    setData(getData())
  }, [])
  return <div>
      {data}
  </div>
};

export default Test
