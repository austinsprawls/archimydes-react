import React, {useState, useEffect} from 'react';
import {getStories, selectStories, selectIsLoaded} from './listStoriesSlice';
import { useDispatch, useSelector } from 'react-redux';


export function ListStories() {
    const dispatch = useDispatch();
    const storiesData = useSelector(selectStories);
    const isLoaded = useSelector(selectIsLoaded);
  
    const [stories, setStories] = useState(storiesData)
    const [sortCol, setSortCol] = useState('');
    const [sortVal, setSortVal] = useState(0);
    const [typeFilter, setTypeFilter] = useState('');

    const complexityMap = {
        low: 0,
        mid: 1,
        high: 2
    };

    useEffect(() => {
        setStories(storiesData);
    }, [storiesData]);

    useEffect(() => {
        sortInPlace();
    }, [sortVal]);

    useEffect(() => {
        setStories(storiesData.filter(story => story.type === typeFilter));
    }, [typeFilter]);
   
    if (!isLoaded) {
        dispatch(getStories());
    }

    function handleSort(colName) {
        if (colName !== sortCol) {
            setSortCol(colName);
            setSortVal(1);
        }
        else {
           setSortVal(sortVal === 1  ? 2 : 1);
        }
    }

    function sortInPlace() {
        const sortedStories = stories.slice().sort((a, b) => {
            if (sortVal === 1) {
                return sortCol === 'complexity' ?
                    complexityMap[a[sortCol]] - complexityMap[b[sortCol]]
                    :
                    a[sortCol] - b[sortCol];
            }
            else {
                return sortCol === 'complexity' ?
                    complexityMap[b[sortCol]] - complexityMap[a[sortCol]] 
                    :
                    b[sortCol] - a[sortCol];
            }
        });
    
        setStories(sortedStories);
    }

    const storyRows = stories.map(story => (
        <tr key={story.id}>
            <th>{story.id}</th>
            <td>{story.summary}</td>
            <td>{story.description}</td>
            <td>{story.type}</td>
            <td>{story.complexity}</td>
            <td>{story.estimatedHrs}</td>
            <td>{story.cost}</td>
        </tr>
    ));

    return (
        <div className="container">
            <div className="row">
                <h2>User Stories</h2>
            </div>
            <div className="row">
            <div className="form-group">
                   <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)} className="form-control">
                       <option value="" disabled>Filter By Type</option>
                       <option>bugfix</option>
                       <option>enhancement</option>
                       <option>development</option>
                       <option>qa</option>
                   </select>
                </div>
            </div>
            <div className="row">
                <div className="col table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th onClick={() => handleSort('id')}>ID</th>
                                <th>Summary</th>
                                <th>Description</th>
                                <th>Type</th>
                                <th onClick={() => handleSort('complexity')}>Complexity</th>
                                <th>Estimated time for completion</th>
                                <th>Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            {storyRows}
                            {/* <tr>
                                <th>232443523</th>
                                <td>REview</td>
                                <td>Review the list</td>
                                <td>Bug</td>
                                <td>Hard</td>
                                <td>8 hours</td>
                                <td>3244</td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}