// Created by iWeb 3.0.2 local-build-20261121

function createMediaStream_id4()
{return IWCreatePhotocast("file://localhost/Users/rudycastaneda/Sites/Site/My_Albums/Pages/Solar_Eclipse_2024_files/rss.xml",true);}
function initializeMediaStream_id4()
{createMediaStream_id4().load('file://localhost/Users/rudycastaneda/Sites/Site/My_Albums/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id4',{pageIndex:0}));});}
function layoutMediaGrid_id4(range)
{createMediaStream_id4().load('file://localhost/Users/rudycastaneda/Sites/Site/My_Albums/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id4',new IWPhotoGridLayout(3,new IWSize(180,180),new IWSize(180,42),new IWSize(216,237),27,27,0,new IWSize(31,30)),new IWPhotoFrame([IWCreateImage('Solar_Eclipse_2024_files/notebook_ul.png'),IWCreateImage('Solar_Eclipse_2024_files/notebook_top.png'),IWCreateImage('Solar_Eclipse_2024_files/notebook_ur.png'),IWCreateImage('Solar_Eclipse_2024_files/notebook_right.png'),IWCreateImage('Solar_Eclipse_2024_files/notebook_lr.png'),IWCreateImage('Solar_Eclipse_2024_files/notebook_bottom.png'),IWCreateImage('Solar_Eclipse_2024_files/notebook_ll.png'),IWCreateImage('Solar_Eclipse_2024_files/notebook_left.png')],null,0,1.000000,3.000000,2.000000,1.000000,3.000000,18.000000,16.000000,17.000000,19.000000,76.000000,123.000000,79.000000,122.000000,null,null,null,0.400000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id4(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id4(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id4(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Solar_Eclipse_2024_files/Solar_Eclipse_2024Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');NotificationCenter.addObserver(null,relayoutMediaGrid_id4,'RangeChanged','id4')
adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');Widget.onload();fixAllIEPNGs('../../Media/transparent.gif');fixupIECSS3Opacity('id7');initializeMediaStream_id4()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
