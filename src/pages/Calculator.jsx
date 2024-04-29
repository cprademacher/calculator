import { useState } from "react";

export default function Calculator() {
  const [firstNumber, setFirstNumber] = useState(null);
  const [secondNumber, setSecondNumber] = useState(null);
  const [mathAction, setMathAction] = useState("");
  const [answer, setAnswer] = useState(null);

  const clearCalculator = () => {
    setAnswer(null);
    setFirstNumber(null);
    setSecondNumber(null);
    setMathAction("");
  };

  const calculate = () => {
    if (mathAction === "+") {
      setAnswer(firstNumber + secondNumber);
    } else if (mathAction === "-") {
      setAnswer(firstNumber - secondNumber);
    } else if (mathAction === "*") {
      setAnswer(firstNumber * secondNumber);
    } else if (mathAction === "/") {
      setAnswer(firstNumber / secondNumber);
    }
  };

  return (
    <section className="d-flex w-auto min-vh-100 justify-content-center align-items-center">
      <div className="card" style={{ width: "18rem", height: "450px" }}>
        <section className="d-flex justify-content-center align-items-center w-auto h-25 border-bottom bg-info">
          <h2>
            {answer
              ? answer
              : `${firstNumber ? firstNumber : ""} ${mathAction} ${
                  secondNumber ? secondNumber : ""
                }`}
          </h2>
        </section>

        <section className="bg-primary w-auto h-75 p-2">
          <div className="container text-center">
            <button
              type="button"
              className="btn btn-secondary w-100 my-2"
              onClick={clearCalculator}
            >
              Clear
            </button>

            <div className="row my-2">
              <div className="col">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={
                    mathAction === ""
                      ? () => setFirstNumber(1)
                      : () => setSecondNumber(1)
                  }
                >
                  1
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={
                    mathAction === ""
                      ? () => setFirstNumber(2)
                      : () => setSecondNumber(2)
                  }
                >
                  2
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={
                    mathAction === ""
                      ? () => setFirstNumber(3)
                      : () => setSecondNumber(3)
                  }
                >
                  3
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setMathAction("+")}
                >
                  +
                </button>
              </div>
            </div>

            <div className="row my-2">
              <div className="col">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={
                    mathAction === ""
                      ? () => setFirstNumber(4)
                      : () => setSecondNumber(4)
                  }
                >
                  4
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={
                    mathAction === ""
                      ? () => setFirstNumber(5)
                      : () => setSecondNumber(5)
                  }
                >
                  5
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={
                    mathAction === ""
                      ? () => setFirstNumber(6)
                      : () => setSecondNumber(6)
                  }
                >
                  6
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setMathAction("-")}
                >
                  -
                </button>
              </div>
            </div>

            <div className="row my-2">
              <div className="col">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={
                    mathAction === ""
                      ? () => setFirstNumber(7)
                      : () => setSecondNumber(7)
                  }
                >
                  7
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={
                    mathAction === ""
                      ? () => setFirstNumber(8)
                      : () => setSecondNumber(8)
                  }
                >
                  8
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={
                    mathAction === ""
                      ? () => setFirstNumber(9)
                      : () => setSecondNumber(9)
                  }
                >
                  9
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setMathAction("*")}
                >
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
                  onClick={
                    mathAction === ""
                      ? () => setFirstNumber(0)
                      : () => setSecondNumber(0)
                  }
                >
                  0
                </button>
              </div>
              <div className="col"></div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setMathAction("/")}
                >
                  /
                </button>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-secondary w-100 my-2"
              onClick={calculate}
            >
              Enter
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}
