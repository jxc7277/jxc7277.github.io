// Created by iWeb 3.0.2 local-build-20261124

function createMediaStream_id4()
{return IWCreateMediaCollection("https://jxc7277.github.io/Site/My_Albums/My_Albums_files/rss.xml",true,255,["No photos yet","%d photo","%d photos"],["","%d clip","%d clips"]);}
function initializeMediaStream_id4()
{createMediaStream_id4().load('https://jxc7277.github.io/Site/My_Albums',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget6'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id4',{pageIndex:0}));});}
function layoutMediaGrid_id4(range)
{createMediaStream_id4().load('https://jxc7277.github.io/Site/My_Albums',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id4',new IWPhotoGridLayout(2,new IWSize(270,202),new IWSize(270,38),new IWSize(324,256),27,27,0,new IWSize(66,62)),new IWPhotoFrame([IWCreateImage('My_Albums_files/orangebook_ul.png'),IWCreateImage('My_Albums_files/orangebook_top.jpg'),IWCreateImage('My_Albums_files/orangebook_ur.png'),IWCreateImage('My_Albums_files/orangebook_right.png'),IWCreateImage('My_Albums_files/orangebook_lr.png'),IWCreateImage('My_Albums_files/orangebook_bottom.png'),IWCreateImage('My_Albums_files/orangebook_ll.png'),IWCreateImage('My_Albums_files/orangebook_left.png')],null,0,0.627193,0.000000,0.000000,0.000000,0.000000,61.000000,41.000000,43.000000,57.000000,30.000000,30.000000,30.000000,30.000000,null,null,null,0.500000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget6',null,'widget7',{showTitle:true,showMetric:true})});}
function relayoutMediaGrid_id4(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id4(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id4(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('My_Albums_files/My_AlbumsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');NotificationCenter.addObserver(null,relayoutMediaGrid_id4,'RangeChanged','id4')
adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('../Media/transparent.gif');fixupIECSS3Opacity('id7');initializeMediaStream_id4()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
