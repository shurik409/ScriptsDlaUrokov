using UnityEngine;
using System.Collections;


public class MEnu : MonoBehaviour {

	
	
	
	void exit () {
	Application.Quit();
	}
	void newgame () {
	Application.LoadLevel (1);

	}
	void fastest () {
	QualitySettings.currentLevel = QualityLevel.Fastest;
	}
	void fast () {
	QualitySettings.currentLevel = QualityLevel.Fast;
	}
	void good () {
	QualitySettings.currentLevel = QualityLevel.Good;
	}
	void beautiful () {
	QualitySettings.currentLevel = QualityLevel.Beautiful;
	}
	void fantastic () {
	QualitySettings.currentLevel = QualityLevel.Fantastic;
	}
}
