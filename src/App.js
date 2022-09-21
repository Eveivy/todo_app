import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const [display, setDisplay] = useState(false);

  function getData(val) {
    setTodo(prevTodo =>{
      return[...prevTodo]
    });

    setDisplay(false);
  }
  function showData() {
    setDisplay(true);
  }
 
  return (
    <div className="width d-flex align-items-center justify-content-center flex-column p-5">
      <div className="bg-transparent shadow rounded-3 py-3 px-4 w-100">
        <div className="bg-white d-flex justify-content-between py-2 rounded-3">
          <div className="ms-2 me-5">
            <input
              type="text"
              className="border-0 fs-5 text-muted"
              onChange={getData}
              placeholder="Add new todo"
            />
          </div>
          <span
            className="bg-dark rounded-3 p-2 d-flex align-items-center mx-2 pointer"
            onClick={showData}
          >
            <box-icon name="plus" color="white" size="sm"></box-icon>
          </span>
        </div>
      </div>

      <div className="bg-transparent shadow rounded-3 mt-5 w-100 py-3 px-4">
        <div className="bg-white px-4 pb-3 rounded-3">
          <div className="d-flex justify-content-between align-items-center py-3">
            <div>
              <h4 className="text-muted fw-bolder">Todo List</h4>
              <span className="">5 Total, 2 Completed, 3 Pending</span>
            </div>
            <input
              type="text"
              className="border p-2 text-muted rounded-3 mt-4"
              placeholder="Search for Todo"
            />
          </div>
          <hr />

          {display ? (
            <div className="d-flex justify-content-between align-items-center my-4">
              {" "}
              <div className="d-flex align-items-center justify-content-between">
                <input type="checkbox" className="me-3" />

                <p className="mt-3">{todo}</p>
              </div>
              <p className="mt-3 pe-5">Done</p>
              <span className="pointer">
                <box-icon name="x" color="red"></box-icon>
              </span>{" "}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
