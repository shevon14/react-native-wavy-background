# react-native-wavy-background

A react native component that let you to add a wavy background UI.

## Installation

```sh
npm install react-native-wavy-background
```

### Props:

| Name             | Default  | Required  | Description |
| ---------------- | -------- | -------- | -------------------------------------- |
| width | null | yes | width of the wave. |
| height | null | yes | height of the wave. |
| frequency | null | yes | number of waves in the given length. |
| amplitude | null | yes | distance from rest to crest. |
| offset | null | yes | height of two wave shapes. |
| color | `'black'` | no | Color inside the wave shape. |
| bottom | `'false'` | no | If the wave need to be in bottom. |


## Example

<div>
<img src="https://github.com/shevon14/react-native-wavy-background/blob/master/example/appScreens/example.png" alt="screens" />
</div>

## Usage

```js
import WavyBackground from "react-native-wavy-background";

// ...

<WavyBackground
    height={300}
    width={1100}
    amplitude={25}
    frequency={1}
    offset={150}
    color="#1F618D"
/>
```

```js
import WavyBackground from "react-native-wavy-background";

// ...

<View
    style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    }}>
        <WavyBackground
          height={300}
          width={1100}
          amplitude={25}
          frequency={1}
          offset={150}
          color="#1F618D"
          bottom
        />
</View>
```

### REACT NATIVE SVG LINKING | To Fix -
### Invariant Violation: requireNativeComponent: "RNSVGPath" was not found in the UIManager

##### Android pre RN 0.60

1. `yarn add react-native-svg` In RN 0.60+, this is all you should ever need to do get Android working. Before this, react-native link was responsible for the following steps:

2. Append the following lines to `android/settings.gradle`:

   ```gradle
   include ':react-native-svg'
   project(':react-native-svg').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-svg/android')
   ```

3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:

   ```gradle
   implementation project(':react-native-svg')
   ```

4. Open up `android/app/src/main/java/[...]/MainApplication.java`

- Add `import com.horcrux.svg.SvgPackage;` to the imports at the top of the file
- Add `new SvgPackage()` to the list returned by the `getPackages()` method. Add a comma to the previous item if there's already something there.

##### iOS pre RN 0.60

[Manual linking](http://facebook.github.io/react-native/docs/linking-libraries-ios.html#manual-linking)

To install react-native-svg on iOS visit the link referenced above or do the following (react-native link should do this for you):

1. Open your project in XCode and drag the `RNSVG.xcodeproj` file (located in `.../node_modules/react-native-svg/ios`) into the Libraries directory shown in XCode.
2. Expand the `RNSVG.xcodeproj` file you just added to XCode until you see: `libRNSVG.a` (located in `RNSVG.xcodeproj` > `Products` )
3. Drag `libRNSVG.a` into the Link Binary With Libraries section (located in Build Phases which may be found at the top of the XCode window)

###### CocoaPods

Alternatively, you can use [CocoaPods](https://cocoapods.org/) to manage your native (Objective-C and Swift) dependencies:

1. Add RNSVG to your Podfile (with RN 0.60+ autolinking, this is not needed)

```ruby
pod 'RNSVG', :path => '../node_modules/react-native-svg'
```

If `cocoapods` is used and if error `RNSVGImage.m:12:9: 'React/RCTImageLoader.h' file not found` occurs:

Add the following entry in Podfile:

```ruby
    pod 'React', :path => '../node_modules/react-native', :subspecs => [
        [...]
        'RCTImage', # <-- Add RCTImage
    ]
```

and run `pod install` from `ios` folder

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
