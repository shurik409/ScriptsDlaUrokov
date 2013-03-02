var BoxRect : Rect=Rect(100,100,10,10);
var BoxRect2 : Rect=Rect(200,100,65,36);
function OnGUI(){
if(GUI.Button(BoxRect,"Меню")){
QualitySettings.currentLevel = QualityLevel.Fastest;
}
if(GUI.Button(BoxRect2,"Меню2")){
QualitySettings.currentLevel = QualityLevel.Fantastic;
}
}