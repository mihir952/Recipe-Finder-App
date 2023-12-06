import { useState } from 'react';
import { Grid, Form, Input } from 'semantic-ui-react';

const Search = ({ setSearchedQuery }) => {
    const [value, setValue] = useState("");

    const onFormSubmit = () => {
        setSearchedQuery(value);
    }

    return (
        <Grid column={1} textAlign="center" className='search-box'>
            <Grid.Column>
                <h2 className='search-heading'>
                    Search Recipes with Our Recipe
                </h2>
                <Form onSubmit={onFormSubmit}>
                    <Input 
                        placeholder="tomato,potato,pizza"
                        action={{ icon: 'search', color: 'black' }}
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                    />
                </Form>
            </Grid.Column>
        </Grid>
    )
}

export default Search;