import cv2
import numpy as np
#url="http://192.168.1.201:8080"
cap=cv2.VideoCapture("E:\\College\\HOD_IT_Internship\\WeightEstimationBridge\\python_files\\pedestrian.mp4")
#cap = cv2.VideoCapture(0)

histo = cv2.HOGDescriptor()
svm_detector = histo.setSVMDetector(cv2.HOGDescriptor_getDefaultPeopleDetector())

detected = []

def human_detector(frame):
    coord,_ = histo.detectMultiScale(frame,winStride = (8,8))
    count = 0
    for x,y,w,h in coord:
        cv2.rectangle(frame,(x,y),(x + w,y + h),(255,0,0),1)
        centroidX,centroidY = (x + w/2),(y + h/2)
        detected.append((centroidX,centroidY))
        cv2.imshow("detected",frame)
    return frame

while True:
    ret,frame = cap.read()
    try:
        height,width = frame.shape[:2]
        cv2.line(frame,(0,int(height/2)),(width,int(height/2)),(255,0,0))
        frame = human_detector(frame)
    except:
        print("Video Ended")
    if cv2.waitKey(1) & 0xFF== ord('q'):
            break


print(detected)
cap.release()
cv2.destroyAllWindows()
