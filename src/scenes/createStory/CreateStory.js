import React, {useState} from 'react';
import {Card} from '../../features/card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { submitStory, selectResponseResult, selectError } from './createStorySlice';
import { Redirect } from 'react-router-dom';


export function CreateStory() {
    const dispatch = useDispatch();
    const isAPISuccess = useSelector(selectResponseResult)
    const errorMessage = useSelector(selectError);
   
    const [summary, setSummary] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [complexity, setComplexity] = useState('');
    const [estimatedHrs, setEstimatedHrs] = useState('');
    const [cost, setCost] = useState('');


    const complexityOptions = [
        {value: 'low', label: 'Low'},
        {value: 'mid', label: 'Mid'},
        {value: 'high', label: 'High'}].map(item => (<option value={item.value} key={item.value}>{item.label}</option>));
    const typeOptions = [
        {value: 'enhancement', label: 'Enhancement'},
        {value: 'bugfix', label: 'Bug Fix'},
        {value: 'development', label: 'Development'},
        {value: 'qa', label: 'QA'}].map(item => (<option value={item.value} key={item.value}>{item.label}</option>));

    if (errorMessage) {
        alert(errorMessage)
    }

    if (isAPISuccess) {
        return <Redirect push to="stories-list" />
    }

    return (
        <Card title="Create a Story">
            <div className="form-group">
                <input onChange={e => setSummary(e.target.value)} value={summary} className="form-control" placeholder="Summary" />
            </div>
        
            <div className="form-group">
                <textarea onChange={e => setDescription(e.target.value)} value={description} className="form-control" placeholder="Description" />
            </div>

            <div className="form-group">
                <select value={type} onChange={e => setType(e.target.value)} className="form-control">
                    <option disabled value="">Select Type</option>
                    {typeOptions}
                </select>
            </div>

            <div className="form-group">
                <select value={complexity} onChange={e => setComplexity(e.target.value)} className="form-control">
                    <option disabled value="">Select Complexity</option>
                    {complexityOptions}
                </select>
            </div>

            <div className="form-group">
                <input onChange={e => setEstimatedHrs(e.target.value)} value={estimatedHrs} className="form-control" placeholder="Estimated Completion Time" />
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">$</span>
                </div>
                <input onChange={e => setCost(e.target.value)} value={cost} className="form-control" placeholder="Cost Associated" />
            </div>

            <button onClick={() => dispatch(submitStory({
                summary,
                description,
                type,
                complexity,
                cost: parseInt(cost),
                estimatedHrs
            }))} className="btn btn-info">Submit</button>
            
           
        </Card>
    );
}