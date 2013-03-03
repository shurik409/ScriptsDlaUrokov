var grabPower = 10.0;
var throwPower = 50;
var hit : RaycastHit;
var RayDistance : float = 3.0;
private var Grab : boolean = false;
private var Throw : boolean = false;
var offset : Transform;


function Update(){
if(Input.GetMouseButtonDown(1)){
Physics. Raycast(transform.position, transform.forward,hit,RayDistance);
if(hit.rigidbody){
Grab=true;
}
}
if(Input.GetMouseButtonDown(0)){
if(Grab){
Grab=false;
Throw=true;
}
}
if(Grab){
if(hit.rigidbody){
hit.rigidbody.velocity = (offset.position - (hit.transform.position + hit.rigidbody.centerOfMass))* grabPower;

}
}
if(Throw){
if(hit.rigidbody){
hit.rigidbody.velosity=transform.forward*throwPower;
trow=false;
}
}
}