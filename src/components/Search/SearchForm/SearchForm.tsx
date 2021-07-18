import { Field, Form, Formik } from "formik";
import React from "react";
import { FC } from "react";

interface SearchFormState {
  searchMainValue: string;
}

interface SearchFormProps {
  submitAction: (value: string) => void;
}

export const SearchForm: FC<SearchFormProps> = ({ submitAction }) => {
  const initialValues: SearchFormState = {
    searchMainValue: "",
  };

  const onSubmit = (values: SearchFormState) => {
    submitAction(values.searchMainValue);
  };

  return (
    <div className="search-form">
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        {(formik) => {
          return (
            <Form>
              <div className="form form_flex">
                <div className="form__items form__items_85">
                  <div className="form__item form__item_search">
                    <Field
                      type="text"
                      id="searchMainValue"
                      name="searchMainValue"
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
    </div>
  );
};
