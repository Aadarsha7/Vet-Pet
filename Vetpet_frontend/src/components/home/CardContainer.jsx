import Homecard from "./HomeCard" 
// import HomeCard from './HomeCard.jsx'; // ✅ Make sure the path is correct

const CardContainer = () => {
  return (
    <section className="py-5" id="shop">
      <h4 style={{ textAlign: 'center' }}>Our Products</h4>
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row justify-content-center">
          
        <Homecard/>
        <Homecard/>
        <Homecard/>
        <Homecard/>
        <Homecard/>
          
        </div>
      </div>
    </section>
  );
};

export default CardContainer;