# WeightEstimationBridge
Repository for a project on estimation of weight on a bridge with a progressive web application for opening an closing the gates as well as different statistical analysis.

## Usage
To use this app and test it on a local dev enviornment 
* Open Terminal
* Go to your file project (in this case WeightEstimationBridge)
* Run in terminal

```bison
npm install
```
```bison
npm install react-blink-text
```
This will create a folder node_modules with all the installed modules
```bison
npm start
```
This should open the server on port 3000.
If bugs persist or the server/app doesn't start up check wether all the modules are installed.

For using the human detection and counter
* Open Terminal
* Change directory to python_files
* Move the desired video to the videos folder
```bison
python people_counter.py --prototxt mobilenet_ssd/MobileNetSSD_deploy.prototxt --model mobilenet_ssd/MobileNetSSD_deploy.caffemodel --input videos/humandirection.mp4 --output output/output_01.avi
```
The output will be stored in the output folder and the weight_data.csv will contain the data of in and out of human.

## Editing
For editing the site, make changes in App.js , index.css , index.js
