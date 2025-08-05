import { Outlet } from "react-router-dom";

// Importing Header component and footer component
import Header from './Header';

//Importing CSS specific to this component
import '../../CSS/Layout.css';

const Layout = () => {
  
  return (
    //detta är huvudkomponenten som innehåller header, main och footer
    <div className="Wrapper">
      <Header />
      {/* Detta är main sektionen där huvudinnehållet visas. */}
      <main>
        <Outlet />
      </main>
      
      {/* Footer längst ner på sidan. */}
      <footer>
        <p>© PixelHaven</p>
        <p>Images are used for demonstration purposes only. All rights belong to their respective owners.</p>
      </footer>
    </div>
  );
};

export default Layout;
