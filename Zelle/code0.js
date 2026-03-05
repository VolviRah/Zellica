gdjs.Start_32ScreenCode = {};
gdjs.Start_32ScreenCode.localVariables = [];
gdjs.Start_32ScreenCode.idToCallbackMap = new Map();
gdjs.Start_32ScreenCode.GDMainObjects1= [];
gdjs.Start_32ScreenCode.GDMainObjects2= [];
gdjs.Start_32ScreenCode.GDMainGunObjects1= [];
gdjs.Start_32ScreenCode.GDMainGunObjects2= [];
gdjs.Start_32ScreenCode.GDLogoObjects1= [];
gdjs.Start_32ScreenCode.GDLogoObjects2= [];
gdjs.Start_32ScreenCode.GDPlayBTNObjects1= [];
gdjs.Start_32ScreenCode.GDPlayBTNObjects2= [];
gdjs.Start_32ScreenCode.GDExitBTNObjects1= [];
gdjs.Start_32ScreenCode.GDExitBTNObjects2= [];
gdjs.Start_32ScreenCode.GDVersionObjects1= [];
gdjs.Start_32ScreenCode.GDVersionObjects2= [];
gdjs.Start_32ScreenCode.GDBlackOverlayObjects1= [];
gdjs.Start_32ScreenCode.GDBlackOverlayObjects2= [];


gdjs.Start_32ScreenCode.asyncCallback33052052 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Start_32ScreenCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}
gdjs.Start_32ScreenCode.localVariables.length = 0;
}
gdjs.Start_32ScreenCode.idToCallbackMap.set(33052052, gdjs.Start_32ScreenCode.asyncCallback33052052);
gdjs.Start_32ScreenCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Start_32ScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Start_32ScreenCode.asyncCallback33052052(runtimeScene, asyncObjectsList)), 33052052, asyncObjectsList);
}
}

}


};gdjs.Start_32ScreenCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MainGun"), gdjs.Start_32ScreenCode.GDMainGunObjects1);
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDMainGunObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDMainGunObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 10, 10, 5, 0.08, true, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayBTN"), gdjs.Start_32ScreenCode.GDPlayBTNObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Start_32ScreenCode.GDPlayBTNObjects1.length;i<l;++i) {
    if ( gdjs.Start_32ScreenCode.GDPlayBTNObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Start_32ScreenCode.GDPlayBTNObjects1[k] = gdjs.Start_32ScreenCode.GDPlayBTNObjects1[i];
        ++k;
    }
}
gdjs.Start_32ScreenCode.GDPlayBTNObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackOverlay"), gdjs.Start_32ScreenCode.GDBlackOverlayObjects1);
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDBlackOverlayObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDBlackOverlayObjects1[i].getBehavior("Tween").addObjectOpacityTween2("Fade", 255, "linear", 2, false);
}
}

{ //Subevents
gdjs.Start_32ScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackOverlay"), gdjs.Start_32ScreenCode.GDBlackOverlayObjects1);
{for(var i = 0, len = gdjs.Start_32ScreenCode.GDBlackOverlayObjects1.length ;i < len;++i) {
    gdjs.Start_32ScreenCode.GDBlackOverlayObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Game Scene");
}
{gdjs.evtTools.sound.playMusic(runtimeScene, "11 Risk-Reward.wav", false, 100, 1);
}
}

}


};

gdjs.Start_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_32ScreenCode.GDMainObjects1.length = 0;
gdjs.Start_32ScreenCode.GDMainObjects2.length = 0;
gdjs.Start_32ScreenCode.GDMainGunObjects1.length = 0;
gdjs.Start_32ScreenCode.GDMainGunObjects2.length = 0;
gdjs.Start_32ScreenCode.GDLogoObjects1.length = 0;
gdjs.Start_32ScreenCode.GDLogoObjects2.length = 0;
gdjs.Start_32ScreenCode.GDPlayBTNObjects1.length = 0;
gdjs.Start_32ScreenCode.GDPlayBTNObjects2.length = 0;
gdjs.Start_32ScreenCode.GDExitBTNObjects1.length = 0;
gdjs.Start_32ScreenCode.GDExitBTNObjects2.length = 0;
gdjs.Start_32ScreenCode.GDVersionObjects1.length = 0;
gdjs.Start_32ScreenCode.GDVersionObjects2.length = 0;
gdjs.Start_32ScreenCode.GDBlackOverlayObjects1.length = 0;
gdjs.Start_32ScreenCode.GDBlackOverlayObjects2.length = 0;

gdjs.Start_32ScreenCode.eventsList1(runtimeScene);
gdjs.Start_32ScreenCode.GDMainObjects1.length = 0;
gdjs.Start_32ScreenCode.GDMainObjects2.length = 0;
gdjs.Start_32ScreenCode.GDMainGunObjects1.length = 0;
gdjs.Start_32ScreenCode.GDMainGunObjects2.length = 0;
gdjs.Start_32ScreenCode.GDLogoObjects1.length = 0;
gdjs.Start_32ScreenCode.GDLogoObjects2.length = 0;
gdjs.Start_32ScreenCode.GDPlayBTNObjects1.length = 0;
gdjs.Start_32ScreenCode.GDPlayBTNObjects2.length = 0;
gdjs.Start_32ScreenCode.GDExitBTNObjects1.length = 0;
gdjs.Start_32ScreenCode.GDExitBTNObjects2.length = 0;
gdjs.Start_32ScreenCode.GDVersionObjects1.length = 0;
gdjs.Start_32ScreenCode.GDVersionObjects2.length = 0;
gdjs.Start_32ScreenCode.GDBlackOverlayObjects1.length = 0;
gdjs.Start_32ScreenCode.GDBlackOverlayObjects2.length = 0;


return;

}

gdjs['Start_32ScreenCode'] = gdjs.Start_32ScreenCode;
