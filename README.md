# sp-dextermorgan

# Installation

## IOS

### Facebook SDK

install fbsdk
https://github.com/facebook/react-native-fbsdk#32-ios-project

puis suivre step https://developers.facebook.com/docs/ios/getting-started/

Ne pas oublier :
ajouter “~/Documents/FacebookSDK” dans “Build Settings” > “Framework Search Paths” (cd https://tylermcginnis.com/installing-the-facebook-sdk-into-a-react-native-android-and-ios-app/ )

```
[[FBSDKApplicationDelegate sharedInstance] application:application
                           didFinishLaunchingWithOptions:launchOptions];
```
```
à mettre dans 
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
....
```
juste avant 

```
return YES;
}
```

le reste, mettre à la fin
```
/** faceboook analytics **/

- (void)applicationDidBecomeActive:(UIApplication *)application {
  [FBSDKAppEvents activateApp];
}



- (BOOL)application:(UIApplication *)application
            openURL:(NSURL *)url
  sourceApplication:(NSString *)sourceApplication
         annotation:(id)annotation {
  return [[FBSDKApplicationDelegate sharedInstance] application:application
                                                        openURL:url
                                              sourceApplication:sourceApplication
                                                     annotation:annotation];
}
```

### PushNotification

active Push notification IOS : https://facebook.github.io/react-native/docs/pushnotificationios.html

install react-native-fcm : (cf https://github.com/evollu/react-native-fcm)
```
npm install react-native-fcm --save
react-native link react-native-fcm
```
and follow steps : 
https://github.com/evollu/react-native-fcm#shared-steps

ne pas faire 'pod install Firebase/Messaging' mais : (cf : https://github.com/evollu/react-native-fcm/issues/23 )
```
cd ios
pod init
```
open ios/Podfile and then add
```
pod 'Firebase/Messaging'
```

my Podfile look like this
```
target 'AwesomeProject' do
  # Uncomment this line if you're using Swift or would like to use dynamic frameworks
  # use_frameworks!

  # Pods for AwesomeProject
  pod 'Firebase/Messaging'

  target 'AwesomeProjectTests' do
    inherit! :search_paths
    # Pods for testing
  end

end
```
and then type ```pod install```

If app crash on launch : (cf https://github.com/evollu/react-native-fcm/issues/322 )
On your Xcodeproj create a new group names Ressources and past your GoogleService-Info.plist

### Analytics

install react-native-firebase-analytics ( https://github.com/evollu/react-native-firebase-analytics )
```
npm install react-native-firebase-analytics --save
react-native react-native-firebase-analytics
```

add config ( https://github.com/evollu/react-native-firebase-analytics#ios-configuration )

```
+@import Firebase;

...

 - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
....
+ [FIRApp configure];
}

}
```

### Twitter connect :
https://github.com/adamjmcgrath/react-native-simple-auth
```
npm install --save react-native-simple-auth
```
puis install deep Linking : 
https://facebook.github.io/react-native/docs/linking.html

mettre : $(SRCROOT)/../node_modules/react-native/Libraries/LinkingIOS  dans Header Search Paths
et drag RTCLinking dans Link Binary With Libraries

Si pas de fdk-sdk, dans AppDelegate.m, ne pas mettre ce qu'il y a dans la doc mais mettre ça :

```
(BOOL)application:(UIApplication *)application openURL:(NSURL *)url
sourceApplication:(NSString *)sourceApplication annotation:(id)annotation
{
return [RCTLinkingManager application:application openURL:url
sourceApplication:sourceApplication annotation:annotation];
}
```

Si fdk-sdk, pour eviter colision avec Le "linking" fb, mettre ça à la place :

```
- (BOOL)application:(UIApplication *)application
            openURL:(NSURL *)url
  sourceApplication:(NSString *)sourceApplication
         annotation:(id)annotation {
  
  NSString * scheme = (NSString*)url.scheme;
  NSString * fbScheme = @"fb1117828788346797";
  
  if ([fbScheme isEqualToString:scheme]) {
  return [[FBSDKApplicationDelegate sharedInstance] application:application
                                                        openURL:url
                                              sourceApplication:sourceApplication
                                                     annotation:annotation];
  } else {
    return [RCTLinkingManager application:application openURL:url
                        sourceApplication:sourceApplication annotation:annotation];
  }
```

Dans Info.plist, ajouter dans 'CFBundleURLTypes'

```
<dict>
  <key>CFBundleTypeRole</key>
  <string>Editor</string>
  <key>CFBundleURLName</key>
  <string>spitchtv</string>
  <key>CFBundleURLSchemes</key>
  <array>
    <string>spitchapp</string>
  </array>
</dict>
```

## Android

install react-native-fcm : (cf https://github.com/evollu/react-native-fcm)
```
npm install react-native-fcm --save
react-native link react-native-fcm
```
and follow steps : 
https://github.com/evollu/react-native-fcm#android-configuration

### Facebook SDK

suivre doc : https://github.com/facebook/react-native-fbsdk

### Twitter connect :
https://github.com/adamjmcgrath/react-native-simple-auth

Add in AndroidManifest.xml "android:launchMode="singleTask" and :  
```
<activity
    android:name=".MainActivity"
    android:launchMode="singleTask"
    ... >
<intent-filter>
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data android:scheme="spitchapp" />
</intent-filter>
```


