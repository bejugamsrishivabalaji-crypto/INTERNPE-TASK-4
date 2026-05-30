Ultra Gaming Connect Four 

LIVE LINK:
https://internpe-task-4-gules.vercel.app/

DOCUMANTATION LINK:
https://docs.google.com/document/d/1vdkGV-P08nalUpRgy-BplPpiSjYATBGdNYKgeweCIkE/edit?usp=sharing

Project Overview
Ultra Gaming Connect Four is a modern web-based implementation of the classic Connect Four game. The project combines traditional gameplay mechanics with a futuristic gaming interface, featuring animated backgrounds, 3D visual elements, sound effects, theme switching, score tracking, and turn-based gameplay.
The application is developed using HTML, CSS, and JavaScript, making it fully responsive and compatible with modern web browsers.

Features
Game Board
Standard Connect Four board with 7 columns and 6 rows.
Interactive grid for player moves.
Automatic disc placement in the lowest available slot.
Smooth gameplay experience.
Two-Player Gameplay
Player 1 uses Blue discs.
Player 2 uses Yellow discs.
Automatic turn switching after each move.
Current player status display.
Timer System
Turn-based countdown timer.
Each player receives a limited amount of time to make a move.
Timer resets automatically after every turn.
Helps maintain game pace and competitiveness.
Scoreboard System
Separate score tracking for both players.
Scores increase after every winning round.
Persistent score display during gameplay.
Enables multiple rounds without losing score history.
Win Detection
The system checks all possible winning conditions:
Horizontal Win
Four discs connected in a row horizontally.
Vertical Win
Four discs connected in a column vertically.
Diagonal Win
Four discs connected diagonally from:
Bottom-left to top-right
Top-left to bottom-right
Draw Detection
The game automatically declares a draw when:
All board slots are filled.
No player has achieved four connected discs.
Restart Functionality
Clears the current board.
Resets timer.
Starts a fresh round.
Preserves player scores.
Pause Functionality
Temporarily pauses gameplay.
Stops timer countdown.
Prevents player interaction while paused.
Theme Toggle
Supports theme switching between:
Dark Theme
Modern gaming-inspired appearance.
Neon lighting effects.
Enhanced glow animations.
Light Theme
Clean and bright interface.
Improved readability.
Smooth transition effects.
Sound Effects
Blue Player Move
Unique sound effect when Blue player places a disc.
Yellow Player Move
Different sound effect when Yellow player places a disc.
Win Sound
Special sound effect played when a player wins.

User Interface Components
Navigation Bar
The navigation bar contains:
Logo section
Home link
Game link
Scores link
Contact link
Hero Section
Displays:
Game title
Project description
Action buttons
Buttons Available
Play Button
Starts gameplay.
Restart Button
Resets the current match.
Theme Button
Switches between dark and light modes.
Pause Button
Pauses and resumes the game.
Game Card
Contains:
Status Section
Displays:
Current player's turn
Timer information
Scoreboard
Displays:
Blue player score
Yellow player score
Winner Popup
Appears when a player wins the match.
Game Board
Interactive Connect Four grid.

Background Effects
The project includes several advanced visual effects:
Floating Gaming Icons
Animated gaming-related icons such as:
Gamepad
Headset
Dice
Trophy
3D Cubes
Floating cubes create a futuristic gaming atmosphere.
Rotating Rings
Animated rings continuously rotate in the background.
Glow Effects
Dynamic glowing elements improve visual appeal.
Particle Effects
Animated particles create an immersive environment.

Technologies Used
HTML
Used for:
Page structure
Navigation bar
Game layout
Buttons
Scoreboard
Audio integration
CSS
Used for:
Responsive design
Theme management
Glassmorphism effects
Animations
Visual styling
3D effects
Hover interactions
JavaScript
Used for:
Game logic
Turn management
Timer functionality
Win detection
Draw detection
Event handling
Score updates
Theme switching
Sound management

Game Flow
Start Game
    ↓
Player 1 Turn
    ↓
Player Selects Column
    ↓
Disc Drops
    ↓
Check Winner
    ↓
Winner Found?
 ┌─────────────┐
 │     Yes     │
 └──────┬──────┘
        ↓
 Update Score
        ↓
 Show Winner
        ↓
 Restart Round

        OR

 ┌─────────────┐
 │      No     │
 └──────┬──────┘
        ↓
 Check Draw
        ↓
 Draw?
 ┌─────────────┐
 │     Yes     │
 └──────┬──────┘
        ↓
 Show Draw

        OR

 ┌─────────────┐
 │      No     │
 └──────┬──────┘
        ↓
 Switch Player
        ↓
 Reset Timer
        ↓
 Continue Game


File Structure
Connect-Four/
│
├── index.html
│
├── style.css
│
├── script.js
│
└── assets
     └── sound effects


Future Improvements
Potential enhancements include:
Single-player AI mode
Multiple AI difficulty levels
Online multiplayer support
Player profiles
Match history
Achievement system
Leaderboards
Custom board themes
Mobile application version
Tournament mode

Conclusion
Ultra Gaming Connect Four combines classic Connect Four gameplay with modern web technologies and advanced gaming-inspired visuals. The project demonstrates concepts such as DOM manipulation, event handling, game state management, animations, responsive design, and interactive user interfaces while providing an engaging gaming experience.

