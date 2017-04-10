# sp-dextermorgan

# Installation

## IOS

### Notification and Analytics

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

