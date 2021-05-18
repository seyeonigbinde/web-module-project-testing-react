import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Display from '../Display';
// import { fetchShow } from '../../api/fetchShow';
// jest.mock('./api/fetchShow');

const testEpisode = {
    id:1,
    name: "",
    image: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
    season: 1,
    number: 1,
    summary: "",
    runtime: 1
}

// test('renders without errors', ()=> {
//     render(<Display testEpisode={[]}/>);
// });


test("renders without error", ()=>{
    render(<Display/>);
});

// test("renders we are fetching data when isFetchingData === true", ()=>{
//     //Arrange: Render our component
//     render(<MissionForm isFetchingData={true}/>);

//     //Act: Get DOM with we are fetching data
//     const value = screen.queryByText(/we are fetching data/i);
    
//     //Assert: see that value actually exists
//     expect(value).toBeInTheDocument();
//     expect(value).toBeTruthy();
//     expect(value).toHaveTextContent(/we are fetching data/i);
//     expect(value).not.toBeNull();
// });

// test("renders button when isFetchingData === false", ()=>{
//     render(<MissionForm isFetchingData={false}/>);

//     const button = screen.queryByRole("button");
//     const value = screen.queryByText(/we are fetching data/i);

//     expect(button).toBeInTheDocument();
//     expect(value).not.toBeInTheDocument();
// });

test("Test that when the fetch button is pressed, the show component will display", ()=>{
    // render(<App/>);
    // fetchShow.mockResolvedValueOnce({
    //     data:[
    //         {
    //             mission_id: "1",
    //             mission_name: "mission 1"
    //         },
    //         {
    //             mission_id: "2",
    //             mission_name: "mission 2"
    //         }
    //     ]
    // });

    // //Act: Find and push our button
    // const button = screen.getByRole("button");
    // userEvent.click(button);

    // //Assert: Find 10 mission elements
    // // await find method
    // // const missions = await screen.findAllByTestId("mission");
    // // expect(missions.length).toBe(10); 

    // // waitFor method
    // await waitFor(()=>{
    //     const testEpisode = screen.queryAllByTestId("mission");
    //     expect(testEpisode.length).toBe(2);
    // });
});





///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.