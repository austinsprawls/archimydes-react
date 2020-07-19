import React, { useState } from 'react';
import {Card} from '../../features/card/Card';
import {reviewStory} from '../listStories/listStoriesSlice';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';


export function ReviewStory(props) {
    const dispatch = useDispatch();
    const story = props.location.state.story;
    const [isReviewed, setIsReviewed] = useState(false);

    function handleStoryReview(status) {
        dispatch(reviewStory({storyId: story.id, status}));
        setIsReviewed(true);
    }

    if (isReviewed) {
        return <Redirect push to="/stories-list" />;
    }

    return (
        <Card title="Review Story">
            <div>
            <label>Summary: </label>
            <span> {story.summary}</span>
            </div>
           
           <div>
           <label>Description: </label>
            <span> {story.description}</span>
           </div>

           <div>
           <label>Type: </label>
            <span> {story.type}</span>
           </div>

            <div>
                <label>Complexity: </label>
                <span> {story.complexity}</span>
            </div>
           
           <div>
               <label>Estimated Hours: </label>
                <span> {story.estimatedHrs}</span>
           </div>

           <div>
               <label>Cost: </label>
               <span> ${story.cost}</span>
           </div>

            <div className="row">
                <div className="col">
                    <button
                        onClick={() => handleStoryReview('accepted')}
                        className="btn btn-success">Accept</button>
                    <button
                        onClick={() => handleStoryReview('rejected')}
                        className="btn btn-danger float-right">Reject</button>
                </div>
                
            </div>
            
        </Card>
    );
}