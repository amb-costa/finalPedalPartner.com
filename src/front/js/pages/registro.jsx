import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/AppContext";
import { useNavigate } from "react-router-dom";

export const Registro = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div
      className="container-fluid position-relative text-center p-2"
      id="mainView"
    >
      <h1 className="text-center my-1">Registro</h1>
      <hr className="hr m-2" />

      {/* form container 4 whole body */}
      <div className="row m-0 p-2">
      <form
        className="col-12 px-5 position-relative"
        onSubmit={(e) =>
          store.roles_id == 2
            ? actions.handleSubmitRegister(e, navigate)
            : actions.handleSubmitRegisterM(e, navigate)
        }
      >
        <div className="row container-fluid justify-content-center">
          <h3 className="text-center">¿Qué tipo de usuario eres?</h3>
          <div className="container-fluid">
          <div className="row floating-label justify-content-center d-flex">
            <div className="col-3 form-check ms-2 my-1 fs-5">
              <input
                className="form-check-input"
                type="radio"
                name="roles_id"
                id="flexRadioDefault1"
                value={2}
                onChange={actions.handleChange}
                setinputvalor={store.value}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Ciclista
              </label>
            </div>
            <div className="col-3 form-check ms-2 my-1 fs-5">
              <input
                className="form-check-input"
                type="radio"
                name="roles_id"
                id="flexRadioDefault2"
                value={3}
                onChange={actions.handleChange}
                setinputvalor={store.value}
              />
              <label
                className="form-check-label fs-5"
                htmlFor="flexRadioDefault2"
              >
                Mecánico
              </label>
            </div>
          </div>
        </div>

        {store.roles_id != "" ? (
          <div className="row container-fluid d-inline justify-content-center p-0 fs-5">
            <div className="col-7 my-2 form-floating d-flex mx-auto">
              <input
                type="text"
                className="form-control"
                name="username"
                id="inputUsername"
                aria-label="searchInput"
                aria-describedby="inputGroup"
                value={store.username}
                onChange={actions.handleChange}
              />
              <label className="pt-2 mx-2" htmlFor="#inputUsername">
                Username
              </label>
            </div>
            <div className="col-7 my-2 form-floating d-flex mx-auto">
              <input
                type="text"
                className="form-control"
                name="email"
                id="inputEmail"
                aria-label="searchInput"
                aria-describedby="inputGroup"
                value={store.email}
                onChange={actions.handleChange}
              />
              <label className="pt-2 mx-2" htmlFor="#inputEmail">
                Email
              </label>
            </div>
            <div className="col-7 my-2 form-floating d-flex mx-auto">
              <input
                type="password"
                className="form-control"
                name="password"
                id="inputPassword"
                aria-label="passwordInput"
                aria-describedby="inputGroup"
                value={store.password}
                onChange={actions.handleChange}
              />
              <label className="pt-2 mx-2" htmlFor="#inputPassword">
                Password
              </label>
            </div>
          </div>) : null }
        {(store.roles_id== 3) ? (
          <div className="row d-inline justify-content-center p-0 fs-5">
            <div className="col-7 my-2 form-floating d-flex mx-auto">
              <input
                type="text"
                className="form-control"
                name="tallernom"
                id="inputTallernom"
                aria-label="textdInput"
                aria-describedby="inputGroup"
                value={store.tallernom}
                onChange={actions.handleChange}
              />
              <label className="pt-2 mx-2" htmlFor="#inputTallernom">
                Nombre Taller
              </label>
            </div>
            <div className="col-7 my-2 form-floating d-flex mx-auto">
              <input
                type="text"
                className="form-control"
                name="regiontall"
                id="inputRegiontall"
                aria-label="textdInput"
                aria-describedby="inputGroup"
                value={store.regiontall}
                onChange={actions.handleChange}
              />
              <label className="pt-2 mx-2" htmlFor="#inputRegiontall">
                Region Taller
              </label>
            </div>
            <div className="col-7 my-2 form-floating d-flex mx-auto">
              <input
                type="text"
                className="form-control"
                name="direcciontall"
                id="inputDirecciontall"
                aria-label="textdInput"
                aria-describedby="inputGroup"
                value={store.direcciontall}
                onChange={actions.handleChange}
              />
              <label className="pt-2 mx-2" htmlFor="#inputDirecciontall">
                Direccion Taller
              </label>
            </div>
          </div>
        ) : null}
        </div>
        <div className="row mt-2">
          <button
            type="submit"
            className="col-sm-1 mx-auto btn btn-danger fs-5 px-2"
          >
            Enviar
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};
