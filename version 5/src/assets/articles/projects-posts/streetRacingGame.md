<div class="parallax" style="height: 350px; background-image: url('../../assets/articles/projects-images/racingGame/gameplay.PNG');"></div>
<br>
<div class="writtenContent">

## Street Racing Game
___

###### 3D Game | Game | Research | Racing
___

<div class="download-container">
    <div class="button-container">
        <a href="https://github.com/vondreii/Modified-Street-Racing-Game" class="button repo">↓ View GitHub Repository ↓</a>
    </div>
</div>

### About the Game

This is a modified version of the street racing game sourced from [this Microsoft's Github repository](https://github.com/Microsoft/Imagine_street-racing).
The original game is a 3D street racing game where the player must avoid the obstacles on the road. The player scores points when avoiding these obstacles. 
The original game involved racing for as long as you possible without hitting any obstacles, as the speed increased. If you hit any obstacles during the game, the game would end.

<!-- ----------- Image ----------- -->   
<div class="blog-image-container">
  <img src="../../assets/articles/projects-images/racingGame/street-racing-preview.gif" alt="image" class="blog-image"/> 
</div>
<!-- ----------------------------- -->

The modified version includes several changes in the game mechanics. Instead of the speed increasing, the speed was set at a static 60km/h. 
Extra obstacles were added such as roadblocks. You also could not die when hitting obstacles. The new game could also record all game statistics. This included things like:

* The current coordinates of the player for every frame
* The number of points added when passing cars
* The number of times hit
* The coordinates of new cars as they are being spawned
* The player's movement patterns (the exact times they hit the left/right keys)
* Total statistics, including accumulative car crashes and points totals

<!-- ----------- Image ----------- -->   
<div class="blog-image-container">
  <img src="../../assets/articles/projects-images/racingGame/roadblock.PNG" alt="image" class="blog-image"/> 
</div>
<!-- ----------------------------- -->

Data was collected as part of a University research project, therefore the game was also changed to automatically end after 5 minutes, and automatically repeat for 3 times.

### Running the Game
To run the game using unity, please ensure you have installed Unity on your PC (2017
versions or higher).\
\
System Requirements for Unity:\
OS : Windows 7 SP1+, 8, 10, 64-bit versions only; Mac OS X 10.11+.\
GPU: Graphics card with DX10 (shader model 4.0) capabilities.

1. Run Unity
2. Select ‘Open’
3. Navigate to the Unity Folder. Select the play button at the top of the window.

### Controls

Action  	  	| Controls
--------------- | -------------
Move Left 	  	| Left Keyboard arrow or 'A'
Move Right	  	| Right keyboard arrow or 'D'


<div class="download-container">
    <div class="button-container">
        <a href="https://github.com/vondreii/Modified-Street-Racing-Game" class="button repo">↓ View GitHub Repository ↓</a>
    </div>
</div>

</div>