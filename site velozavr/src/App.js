import "./App.css";
import DescriptionSection from "./components/DescriptionSection/DescriptionSection";
import RentContainer from "./components/RentContainer/RentContainer";
import Story from "./components/SectionStory/Story";
import Header from "./components/header/HeaderContainer/Header";
import OfferContainer from "./components/OfferSection/OfferContainer";
import SectionOptions from "./components/sectionOptions/SectionBlocks/SectionOptions";

function App() {
    return (
        <div className="App">
          {/* <Wrapper> */}
            < Header/>
            <DescriptionSection />
            <OfferContainer/>
            <Story/>
            <SectionOptions/>
            <RentContainer/>
          {/* </Wrapper> */}
          
        </div>
    );
}

export default App;

