
import { Button } from "semantic-ui-react";
import Header from './Header'
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <Header title="Our Recipes" bgClass="bg-image">
            <Button 
                content="SEARCH RECIPES"
                color="black"
                as={Link}
                to="/recipes"
                
            />
        </Header>
    )
}

export default Home;