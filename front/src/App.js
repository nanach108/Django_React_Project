import axios from "axios";
import { useEffect, useState } from "react";
import MyNav from "./MyNav";

function App() {
  const MY_SERVER = "http://127.0.0.1:8000/products";
  
  const [prods, setProds] = useState([]);
  useEffect(() => {
    axios.get(MY_SERVER).then((res) => setProds(res.data));
  }, []);

  return (
    <div>
      <MyNav></MyNav>
      <div className="row row-cols-1 row-cols-md-5 g-4">
        {prods.map((p, i) => (
          <div className="col" key={i}>
            <div className="card">
              <img
                src="https://picsum.photos/200"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longlonger.</p>
              </div>
              {p.desc}
              {p.price}
              <button className="btn btn-success">Buy</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
