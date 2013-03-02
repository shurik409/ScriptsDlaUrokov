var BoxRect : Rect=Rect(100,100,10,10);

function OnGUI(){
if(GUI.Button(BoxRect,"Меню")){
Application.LoadLevel(1);
}
}