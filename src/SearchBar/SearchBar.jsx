import { Field, Form, Formik } from "formik";

const SearchBar = () => {
  const initialValues = {
    query: "",
  };
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            name="guery"
            placeholder="Search images and photos"
            type="text"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
