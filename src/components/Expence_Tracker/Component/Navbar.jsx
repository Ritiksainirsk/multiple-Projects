import React, { useContext, useState } from "react";
import { ChartGlobelContext } from "../Context/ChartContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  
  const { formData, setFormData, value, setValue,HandleFormSubmit } =
    useContext(ChartGlobelContext);

  const HandleFormOnchange = (event) => {
    setFormData({
      ...formData,
      [event.target.name] : event.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    HandleFormSubmit(formData)
  };

  return (
    <div className="">
      <div className="px-5 flex justify-between items-center bg-red-200 h-20">
        <h2 className="font-bold text-2xl text-sky-600">Expense Tracker</h2>
        <div>
          <button
            className="btn btn-sm"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            Add New Trasaction
          </button>

          {/* -------------------- */}
          <dialog id="my_modal_2" className="modal ">
            <div className="modal-box">
              <form onSubmit={handleSubmit}>
                <form method="dialog" className="modal-backdrop flex">
                  {/* <p className="py-4 text-black">Add New Trasaction</p> */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">
                    ✕
                  </button>
                </form>

                <div>
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text">Enter Description</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Enter Transaction Description"
                      className="input input-bordered input-sm w-full"
                      name="description"
                      onChange={HandleFormOnchange}
                    />
                  </label>
                  <label className="form-control w-full ">
                    <div className="label">
                      <span className="label-text">Enter Amount</span>
                    </div>
                    <input
                      type="number"
                      placeholder="Enter Transaction Amount"
                      className="input input-bordered input-sm w-full "
                      onChange={HandleFormOnchange}
                      name="amount"
                    />
                  </label>
                </div>

                <div className="flex gap-6 my-3 mb-10">
                  <label className="cursor-pointer flex gap-2 items-center">
                    <input
                      type="radio"
                      name="type"
                      className="radio-xs cursor-pointer"
                      value={"income"}
                      checked={formData.type === "income"}
                      onChange={HandleFormOnchange}
                    />
                    <span className="label-text">Income</span>
                  </label>
                  <label className="cursor-pointer flex gap-2 items-center">
                    <input
                      type="radio"
                      name="type"
                      value={"expense"}
                      className="radio-xs cursor-pointer"
                      checked={formData.type === "expense"}
                      onChange={HandleFormOnchange}
                    />
                    <span className="label-text">Expense</span>
                  </label>
                </div>

                <form method="dialog" className="modal-backdrop flex">
                  <button className="btn btn-sm absolute bottom-4 right-20">
                    Cencel
                  </button>
                </form>
                {/* <form method="dialog" className="modal-backdrop flex"> */}
                  <button
                    className="btn btn-sm absolute bottom-4 right-4 "
                    type="submit"
                    method="dialog" 
                  >Add
                  </button>
                {/* </form> */}

              </form>
            </div>

            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
          {/* -------------------- */}
        </div>
      </div>
    </div>
  );
}
