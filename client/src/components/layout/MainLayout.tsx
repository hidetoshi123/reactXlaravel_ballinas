import Navbar from "../Navbar";


interface MainLayoutProps {
  content: React.ReactNode;
}

const MainLayout = ({ content }: MainLayoutProps) => {
  return (
    <>
      <div className="container-fluid">
        <Navbar />
        <div className="row">{content}</div>
      </div>
    </>
  );
};

export default MainLayout;