import { useState } from "react";

export default function Calculator() {
  const [number, setNumber] = useState(0);

  return (
    <section className="d-flex w-auto min-vh-100 justify-content-center align-items-center">
      <div className="card" style={{ width: "18rem", height: "450px" }}>
        <section className="d-flex justify-content-center align-items-center w-auto h-25 border-bottom bg-info">
          <h2>{number}</h2>
        </section>

        <section className="bg-primary w-auto h-75 p-2">
          <div className="container text-center">
            <button
              type="button"
              className="btn btn-secondary w-100 my-2"
              onClick={() => setNumber(0)}
            >
              Clear
            </button>

            <div className="row my-2">
              <div className="col">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setNumber(1)}
                >
                  1
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setNumber(2)}
                >
                  2
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setNumber(3)}
                >
                  3
                </button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-secondary">
                  +
                </button>
              </div>
            </div>

            <div className="row my-2">
              <div className="col">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setNumber(4)}
                >
                  4
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setNumber(5)}
                >
                  5
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setNumber(6)}
                >
                  6
                </button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-secondary">
                  -
                </button>
              </div>
            </div>

            <div className="row my-2">
              <div className="col">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setNumber(7)}
                >
                  7
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setNumber(8)}
                >
                  8
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setNumber(9)}
                >
                  9
                </button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-secondary">
                  *
                </button>
              </div>
            </div>

            <div className="row my-2">
              <div className="col"></div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setNumber(0)}
                >
                  0
                </button>
              </div>
              <div className="col"></div>
              <div className="col">
                <button type="button" className="btn btn-secondary">
                  /
                </button>
              </div>
            </div>

            <button type="button" className="btn btn-secondary w-100 my-2">
              Enter
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}

{
  /* <button type="button" className="btn btn-secondary">
            1
          </button>
          <button type="button" className="btn btn-secondary">
            2
          </button>
          <button type="button" className="btn btn-secondary">
            3
          </button>
          <button type="button" className="btn btn-secondary">
            4
          </button>
          <button type="button" className="btn btn-secondary">
            5
          </button>
          <button type="button" className="btn btn-secondary">
            6
          </button>
          <button type="button" className="btn btn-secondary">
            7
          </button>
          <button type="button" className="btn btn-secondary">
            8
          </button>
          <button type="button" className="btn btn-secondary">
            9
          </button>
          <button type="button" className="btn btn-secondary">
            0
          </button>
          <button type="button" className="btn btn-secondary">
            +
          </button>
          <button type="button" className="btn btn-secondary">
            -
          </button>
          <button type="button" className="btn btn-secondary">
            *
          </button>
          <button type="button" className="btn btn-secondary">
            /
          </button> */
}
