import React, {useState} from "react";
import {Input, Select} from "antd";
import "./scss/styles.scss";
import UserSearchResult from "../app/search/UserSearch";
import RepositorySearch from "../app/search/RepositorySearch";
const {Option} = Select;

function Search() {
    let [searchType, setSearchType] = useState('repository');
    let [searchTerm, setSearchTerm] = useState('');

    return (
        <div>
            <h2>Search</h2>
            <div className="search-container">
                <Input className="search-input" value={searchTerm}
                       onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search or jump to"/>
                <Select
                    value={searchType}
                    onChange={value => setSearchType(value)}
                    className="mb-10 search-select"
                >
                    <Option value="repository">Repositories</Option>
                    <Option value="user">Users</Option>
                </Select>
            </div>
            {
                searchType === 'repository' ?
                    (<RepositorySearch query={searchTerm}/>) :
                    (<UserSearchResult login={searchTerm}/>)
            }
        </div>
    )
}

export default Search;