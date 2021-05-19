import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Display from '../Display';
import mockFetchShow from '../../api/fetchShow';
jest.mock('../../api/fetchShow');

const testEpisode = {
    
    name: "Chapter One: The Vanishing of Will Byers",
    summary: "A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.",
    seasons:[
        {id:0, name: "Season 1", episodes: []}, 
        {id:1, name: "Season 2", episodes: []}, 
        {id:2, name: "Season 3", episodes: []}, 
        {id:3, name: "Season 4", episodes: []}
      ]
}

// test('renders without errors', ()=> {
//     render(<Display testEpisode={[]}/>);
// });


test("renders without error", ()=>{
    render(<Display/>);
});


test("Test that when the fetch button is pressed, the show component will display", async ()=>{
    mockFetchShow.mockResolvedValueOnce(testEpisode);
    render(<Display episode={testEpisode}/>);

    const button = screen.getByRole("button");
    userEvent.click(button);

    const value = await screen.findByTestId("show-container");

    expect(value).toBeInTheDocument();

});

test("Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.", async ()=>{
    mockFetchShow.mockResolvedValueOnce(testEpisode);
    render(<Display episode={testEpisode}/>);

    const button = screen.getByRole("button");
    userEvent.click(button);

    await waitFor(()=>{
        const seasonOptions = screen.queryAllByTestId("season-option");
        expect(seasonOptions).toHaveLength(4);
    });
});

test("Test that when the fetch button is pressed, this function is called", async ()=>{
    mockFetchShow.mockResolvedValueOnce(testEpisode);
    const displayFunc = jest.fn()

    render(<Display displayFunc={displayFunc}/>);

    const button = screen.getByRole("button");
    userEvent.click(button);

    await waitFor(()=>{
        expect(displayFunc).toHaveBeenCalled();
    });

});





///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.