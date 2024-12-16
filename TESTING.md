#### Validation
- **HTML**: Passed W3C Validator without errors.
- **CSS**: Passed W3C Jigsaw Validator without errors.
- **JavaScript**: Debugged using browser developer tools.

#### Lighthouse Reports
##### Desktop:
<img src="assets\images\docs\Validators\lighthouse_desktop.png" alt="Lighthouse results for desktop" style="height: auto; width: 500px;">

##### Mobile:
<img src="assets\images\docs\Validators\lighthouse_mobile.png" alt="Lighthouse results for mobile" style="height: auto; width: 500px;">

#### Manual Testing:
| Location       | Feature                     | Expected Outcome                                                          | Pass/Fail | Notes |
| -------------- | --------------------------- | ------------------------------------------------------------------------- | --------- | ----- |
| Navigation Bar | Verify Navbar Visibility    | Navbar should be visible at the top of the page.                          | Pass      |       |
| Navigation Bar | Logo Display                | The logo should display correctly with no distortion.                     | Pass      |       |
| Navigation Bar | Title Display               | The title should be correctly aligned and visible.                        | Pass      |       |
| Navigation Bar | Rules Button                | The rules button should stay on the right of the nav bar                  | Pass      |       |
| Navigation Bar | Dropdown Functionality      | The dropdown menu should appear under the rules button.                   | Pass      |       |
| Buttons        | Hover Effect on Buttons     | Buttons should change colour (#60A561) and border as defined in CSS.      | Pass      |       |
| Game Mode      | Default Game Mode Highlight | "2 Player" button is highlighted by default.                              | Pass      |       |
| Game Mode      | Switching Mode              | Game mode should switch to Vs Computer mode.                              | Pass      |       |
| Reset Button   | Reset the game              | The game board resets to the scores and board.                            | Pass      |       |
| Game Board     | Empty Board at Start        | The board is empty (no X's or O's).                                       | Pass      |       |
| Game Board     | Place Moves                 | X or O appears correctly, depending on the player turn.                   | Pass      |       |
| Game Board     | Win Condition               | A win condition should trigger, and show the winning text.                | Pass      |       |
| Game Board     | Draw Condition              | A draw condition triggers (no winner), and show the drawing text.         | Pass      |       |
| Game Board     | Reset Game After Win/Draw   | The game board clears and the scores remain updated.                      | Pass      |       |
| Game Board     | Turn Switching              | Turns alternate correctly between Player X and Player O.                  | Pass      |       |
| Game Board     | VS computer                 | The computer will automatically place the O after player.                 | Pass      |       |
| Footer         | Footer Visibility           | Footer is visible and aligned to the bottom.                              | Pass      |       |
| Footer         | Footer Text                 | Footer displays the correct text.                                         | Pass      |       |
| Responsiveness | Mobile View                 | All elements adjust to fit the small screen without overlap.              | Pass      |       |
| Responsiveness | Desktop View                | Layout remains aligned and centred.                                       | Pass      |       |
| Responsiveness | Navbar Alignment            | Navbar stays fixed at the top with no extra white border or misalignment. | Pass      |       |
| Responsiveness | Footer Alignment            | Footer stays fixed at the bottom of the screen.                           | Pass      |       |
| Accessibility  | Colour Contrast             | Elements are legible with sufficient contrast.                            | Pass      |       |
| Edge Case      | Rapid Moves on Game Board   | Moves are registered in the correct order without skipping turns.         | Pass      |       |
| Edge Case      | Refresh Mid-Game            | The game board resets, and no errors occur.                               | Pass      |       |
| Edge Case      | Browser Zoom In/Out         | Content remains visible and functional without breaking layout.           | Pass      |       |