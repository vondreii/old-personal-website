# 3D Street Racing Game
#### 3D • Game • Research • Racing
<hr>

### **About**

<div class="pb-3"></div>

This is a modified version of the street racing game sourced from <a class="cyanLink" href="https://github.com/Microsoft/Imagine_street-racing">this Microsoft's Github repository</a>.

<div class="pb-3"></div>

The original game is a 3D street racing game where the player must avoid the obstacles on the road. The player scores points when avoiding these obstacles. 
The original game involved racing for as long as you possible without hitting any obstacles, as the speed increased. If you hit any obstacles during the game, the game would end.

<!-- ----------- Image ----------- -->   
<div class="image-container">
  <img src="./assets/portfolio/images/racingGame/1.PNG" loading="lazy" alt="image" class="image-75"/> 
</div>
<!-- ----------------------------- -->

<div class="pb-3"></div>

* <a class="cyanLink" href="https://github.com/vondreii/Modified-Street-Racing-Game">View GitHub Repository</a>

<div class="pb-3"></div>

### **Background / Context**

<div class="pb-3"></div>

Data was collected as part of a University research project, aimed to adjust the difficulty of the game based on the player's cognitive load (how much information the player's brain can store and process at any given time).

The modified version includes several changes in the game mechanics. Instead of the speed increasing, the speed was set at a static 60km/h. 
Extra obstacles were added such as roadblocks. The game was also changed to automatically end after 5 minutes, and automatically repeat for 3 times.

<div class="pb-3"></div>

### **Tech Stack**

<div class="pb-3"></div>

* Unity C#

<div class="pb-3"></div>

### **What I Learnt / Improved**

<div class="pb-3"></div>

* C# and Game Development skills
* Real time data collection from a game (reading data such as points & hits, and storing them dynamically into csv files) 
* Using Unity to display slideshows and an interface. Since the game was research related, slides and explanations needed to be displayed before the game actually started.

<div class="pb-3"></div>

### **Game Mechanics**

<div class="pb-3"></div>

##### **Controls**

<div class="pb-3"></div>

* **Move Left** - Left Keyboard arrow or 'A'
* **Move Right** - Right Keyboard arrow or 'D'

You also could not die when hitting obstacles. The game simply records the number of hits you have.

<div class="pb-3"></div>

##### **Data Collection**

<div class="pb-3"></div>

The game could also record all game statistics. This included things like:

<div class="pb-3"></div>

* The current coordinates of the player for every frame
* The number of points added when passing cars
* The number of times hit
* The coordinates of new cars as they are being spawned
* The player's movement patterns (the exact times they hit the left/right keys)
* Total statistics, including accumulative car crashes and points totals

<div class="pb-3"></div>

<!-- ----------- Image ----------- -->   
<div class="image-container">
  <img src="./assets/portfolio/images/racingGame/2.PNG" loading="lazy" alt="image" class="image-50"/> 
</div>
<!-- ----------------------------- -->

<div class="pb-3"></div>


##### **Running the Game**

<div class="pb-3"></div>

To run the game using unity, please ensure you have installed Unity on your PC (2017
versions or higher).\
\
System Requirements for Unity:\
OS : Windows 7 SP1+, 8, 10, 64-bit versions only; Mac OS X 10.11+.\
GPU: Graphics card with DX10 (shader model 4.0) capabilities.

<div class="pb-3"></div>

1. Run Unity
2. Select ‘Open’
3. Navigate to the Unity Folder. Select the play button at the top of the window.

<div class="pb-3"></div>