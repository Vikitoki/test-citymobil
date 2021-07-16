import React from "react";
import { FC } from "react";
import { Formik, Form } from "formik";

export const SearchFormContainer: FC = () => {
  const initialValues = {};

  const onSubmit = (values: any) => {};

  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues}>
      {(formik) => {
        return (
          <Form>
            <div className="form form_flex">
              <div className="form__items form__items_85">
                <div className="form__item form__item_search">
                  <input
                    type="text"
                    className="form__input form__input_search"
                  />
                </div>
              </div>
              <div className="form__btns form__btns_15">
                <button type="submit" className="btn btn_full btn_gray">
                  Найти
                </button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
