export default function App({ id }) {
return (
<Routes>
  <Route path="" element={<Home />} />
  <Route path=":id" element={<ProductDetail />} />
</Routes>)

}
// Card

import React, { useEffect } from "react";

export default function Card({ id }) {
  return (
    <div>
      Name
      <div>Extra Data</div>
      <Link to={`/${id}`}>
        <button>Watch</button>
      </Link>
    </div>
  );
}

import React from 'react'
import {useParams} from 'react-router-dom';

export default function ProductDetail() {
  const params = useParams();

  useEffect(() => {
    getShowData(params.id);
  }, [])

  const [rshow, setRShow] = useState(null);

const getShowData = (id) => {
  let requiredShow = null;
  for (let i = 0; i < showsArray.length; i++) {
    const show = showsArray[i];
    if (show.show.id == id) {
      requiredShow = show;
      break;
    }
  }

  setRShow(requiredShow);
};

  return <p>{rshow.show.summary}</p>;
}
