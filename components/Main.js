import React from "react";
import useTodo from "../hooks/useTodo";
import Loading from "./Loading";
import Error from "./Error";
import Header from "./Header";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Footer from "./Footer";

const Main = () => {
  const { loading, error } = useTodo();

  return (
    <>
      {loading && <Loading />}
      {error && <Error />}
      {!loading && !error && (
        <>
          <Header />
          <TodoForm />
          <TodoList />
          <Footer />
        </>
      )}
    </>
  );
};

export default Main;
