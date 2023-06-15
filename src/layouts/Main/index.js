import Header from "../Header";

const MainLayout = (props) => {
  const { children } = props;
  return (
    <div className="container-fluid">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
