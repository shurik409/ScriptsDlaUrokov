var object : Rigidbody;

var speed = 20;

function Update(){ 
if( Input.GetButtonDown( "Fire1" ) ) { 
var instantiatedObject : Rigidbody = Instantiate( object, transform.position, transform.rotation ); 
instantiatedObject.velocity = transform.TransformDirection( Vector3( 0, 0, speed ) ); 
Physics.IgnoreCollision( instantiatedObject.collider, transform.root.collider);

}
}
