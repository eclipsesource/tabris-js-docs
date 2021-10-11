---
---
# Widget Overview

To build a comprehensive user experience, different UI components can be combined. The following list shows all available widgets for Android and iOS.

## [Action](Action.html)

An executable item that is integrated in the application's navigation menu. Add a *select* listener to react to action taps.

<div><a style="text-decoration: none" href="Action.html"><div class="tabris-image"><figure><div><img srcset="img/android/Action.png 2x" src="img/android/Action.png" alt="Action on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/Action.png 2x" src="img/ios/Action.png" alt="Action on iOS"/></div><figcaption>iOS</figcaption></figure></div>
</a></div>

## [ActivityIndicator](ActivityIndicator.html)

A widget representing a spinning indicator for indeterminate loading / processing time.

<div><a style="text-decoration: none" href="ActivityIndicator.html"><div class="tabris-image"><figure><div><img srcset="img/android/ActivityIndicator.png 2x" src="img/android/ActivityIndicator.png" alt="ActivityIndicator on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/ActivityIndicator.png 2x" src="img/ios/ActivityIndicator.png" alt="ActivityIndicator on iOS"/></div><figcaption>iOS</figcaption></figure></div>
</a></div>

## [Button](Button.html)

A push button. Can contain a text or an image.

<div><a style="text-decoration: none" href="Button.html"><div class="tabris-image"><figure><div><img srcset="img/android/Button.png 2x" src="img/android/Button.png" alt="Button on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/Button.png 2x" src="img/ios/Button.png" alt="Button on iOS"/></div><figcaption>iOS</figcaption></figure></div>
</a></div>

## [CameraView](CameraView.html)

A widget to preview a `Camera` feed.

In order to show a camera preview image the app has to hold the `'camera'` permission.

<div><a style="text-decoration: none" href="CameraView.html"><div class="tabris-image"><figure><div><img srcset="img/android/CameraView.png 2x" src="img/android/CameraView.png" alt="CameraView on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/CameraView.png 2x" src="img/ios/CameraView.png" alt="CameraView on iOS"/></div><figcaption>iOS</figcaption></figure></div>
</a></div>

## [Canvas](Canvas.html)

Canvas is a widget that can be used to draw graphics using a [canvas context](./CanvasContext.md).

<div><a style="text-decoration: none" href="Canvas.html"><div class="tabris-image"><figure><div><img srcset="img/android/Canvas.png 2x" src="img/android/Canvas.png" alt="Canvas on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/Canvas.png 2x" src="img/ios/Canvas.png" alt="Canvas on iOS"/></div><figcaption>iOS</figcaption></figure></div>
</a></div>

## [CheckBox](CheckBox.html)

A check box widget.

<div><a style="text-decoration: none" href="CheckBox.html"><div class="tabris-image"><figure><div><img srcset="img/android/CheckBox.png 2x" src="img/android/CheckBox.png" alt="CheckBox on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/CheckBox.png 2x" src="img/ios/CheckBox.png" alt="CheckBox on iOS"/></div><figcaption>iOS</figcaption></figure></div>
</a></div>

## [CollectionView](CollectionView.html)

A scrollable list that displays data items in cells, one per row. Cells are created on demand by the *createCell* callback and reused on scrolling.

<div><a style="text-decoration: none" href="CollectionView.html"><div class="tabris-image"><figure><div><img srcset="img/android/CollectionView.png 2x" src="img/android/CollectionView.png" alt="CollectionView on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/CollectionView.png 2x" src="img/ios/CollectionView.png" alt="CollectionView on iOS"/></div><figcaption>iOS</figcaption></figure></div>
</a></div>

## [Composite](Composite.html)

An empty widget that can contain other widgets.

<div><a style="text-decoration: none" href="Composite.html"><div class="tabris-image"><figure><div><img srcset="img/android/Composite.png 2x" src="img/android/Composite.png" alt="Composite on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/Composite.png 2x" src="img/ios/Composite.png" alt="Composite on iOS"/></div><figcaption>iOS</figcaption></figure></div>
</a></div>

## [Drawer](Drawer.html)

A drawer that can be swiped in from the left edge of the screen. There's only a single instance that can be accessed via `tabris.drawer`. The drawer is locked by default. To use it in an application, set the property `enabled` to `true`. The drawer can contain any kind of widgets.

<div><a style="text-decoration: none" href="Drawer.html"><div class="tabris-image"><figure><div><img srcset="img/android/Drawer.png 2x" src="img/android/Drawer.png" alt="Drawer on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/Drawer.png 2x" src="img/ios/Drawer.png" alt="Drawer on iOS"/></div><figcaption>iOS</figcaption></figure></div>
</a></div>

## [ImageView](ImageView.html)

A widget to display an image.

<div><a style="text-decoration: none" href="ImageView.html"><div class="tabris-image"><figure><div><img srcset="img/android/ImageView.png 2x" src="img/android/ImageView.png" alt="ImageView on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/ImageView.png 2x" src="img/ios/ImageView.png" alt="ImageView on iOS"/></div><figcaption>iOS</figcaption></figure></div>
</a></div>

## [NavigationView](NavigationView.html)

A widget that displays a stack of [pages](Page) with a toolbar that allows to navigate back. The toolbar also displays the current page's title and the highest priority [actions](Action) that are added to the NavigationView. Only children of type `Page`, `Action` and `SearchAction` are supported. Since the NavigationView does not compute its own size, the width and height must be defined by the respective layout properties (e.g. either `width` or `left` and `right` must be specified).

<div><a style="text-decoration: none" href="NavigationView.html"><div class="tabris-image"><figure><div><img srcset="img/android/NavigationView.png 2x" src="img/android/NavigationView.png" alt="NavigationView on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/NavigationView.png 2x" src="img/ios/NavigationView.png" alt="NavigationView on iOS"/></div><figcaption>iOS</figcaption></figure></div>
</a></div>

## [Page](Page.html)

A container representing a single page of a NavigationView widget.

<div><a style="text-decoration: none" href="Page.html"><div class="tabris-image"><figure><div><img srcset="img/android/Page.png 2x" src="img/android/Page.png" alt="Page on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/Page.png 2x" src="img/ios/Page.png" alt="Page on iOS"/></div><figcaption>iOS</figcaption></figure></div>
</a></div>

## [Picker](Picker.html)

A widget with a drop-down list of items to choose from.

<div><a style="text-decoration: none" href="Picker.html"><div class="tabris-image"><figure><div><img srcset="img/android/Picker.png 2x" src="img/android/Picker.png" alt="Picker on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/Picker.png 2x" src="img/ios/Picker.png" alt="Picker on iOS"/></div><figcaption>iOS</figcaption></figure></div>
</a></div>

## [ProgressBar](ProgressBar.html)

A widget representing a numeric value as a horizontal bar with a growing indicator.

<div><a style="text-decoration: none" href="ProgressBar.html"><div class="tabris-image"><figure><div><img srcset="img/android/ProgressBar.png 2x" src="img/android/ProgressBar.png" alt="ProgressBar on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/ProgressBar.png 2x" src="img/ios/ProgressBar.png" alt="ProgressBar on iOS"/></div><figcaption>iOS</figcaption></figure></div>
</a></div>

## [RadioButton](RadioButton.html)

A radio button. Selecting a radio button de-selects all its siblings (i.e. all radio buttons within the same parent).

<div><a style="text-decoration: none" href="RadioButton.html"><div class="tabris-image"><figure><div><img srcset="img/android/RadioButton.png 2x" src="img/android/RadioButton.png" alt="RadioButton on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/RadioButton.png 2x" src="img/ios/RadioButton.png" alt="RadioButton on iOS"/></div><figcaption>iOS</figcaption></figure></div>
</a></div>

## [RefreshComposite](RefreshComposite.html)

A composite allowing to use a pull-to-refresh gesture to trigger and visualize a long running operation.

<div><a style="text-decoration: none" href="RefreshComposite.html"><div class="tabris-image"><figure><div><img srcset="img/android/RefreshComposite.png 2x" src="img/android/RefreshComposite.png" alt="RefreshComposite on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/RefreshComposite.png 2x" src="img/ios/RefreshComposite.png" alt="RefreshComposite on iOS"/></div><figcaption>iOS</figcaption></figure></div>
</a></div>

## [ScrollView](ScrollView.html)

A composite that allows its content to overflow either vertically (default) or horizontally. Since the ScrollView does not compute its own size, the width and height must be defined by the respective layout properties (e.g. either `width` or `left` and `right` must be specified).

<div><a style="text-decoration: none" href="ScrollView.html"><div class="tabris-image"><figure><div><img srcset="img/android/ScrollView.png 2x" src="img/android/ScrollView.png" alt="ScrollView on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/ScrollView.png 2x" src="img/ios/ScrollView.png" alt="ScrollView on iOS"/></div><figcaption>iOS</figcaption></figure></div>
</a></div>

## [SearchAction](SearchAction.html)

An action that displays a search text field with dynamic proposals when selected. Add a listener on *select* to implement the action. On *input*, you may set a list of *proposals*.

<div><a style="text-decoration: none" href="SearchAction.html"><div class="tabris-image"><figure><div><img srcset="img/android/SearchAction.png 2x" src="img/android/SearchAction.png" alt="SearchAction on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/SearchAction.png 2x" src="img/ios/SearchAction.png" alt="SearchAction on iOS"/></div><figcaption>iOS</figcaption></figure></div>
</a></div>

## [Slider](Slider.html)

A widget representing a numeric value as an movable indicator on a horizontal line.

<div><a style="text-decoration: none" href="Slider.html"><div class="tabris-image"><figure><div><img srcset="img/android/Slider.png 2x" src="img/android/Slider.png" alt="Slider on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/Slider.png 2x" src="img/ios/Slider.png" alt="Slider on iOS"/></div><figcaption>iOS</figcaption></figure></div>
</a></div>

## [Switch](Switch.html)

A switch widget that can be toggled.

<div><a style="text-decoration: none" href="Switch.html"><div class="tabris-image"><figure><div><img srcset="img/android/Switch.png 2x" src="img/android/Switch.png" alt="Switch on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/Switch.png 2x" src="img/ios/Switch.png" alt="Switch on iOS"/></div><figcaption>iOS</figcaption></figure></div>
</a></div>

## [Tab](Tab.html)

A container representing a single tab of a TabFolder widget.

<div><a style="text-decoration: none" href="Tab.html"><div class="tabris-image"><figure><div><img srcset="img/android/Tab.png 2x" src="img/android/Tab.png" alt="Tab on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/Tab.png 2x" src="img/ios/Tab.png" alt="Tab on iOS"/></div><figcaption>iOS</figcaption></figure></div>
</a></div>

## [TabFolder](TabFolder.html)

A widget that can switch between [tabs](Tab). Only children of type `Tab` are supported. Since the TabFolder does not compute its own size, the width and height must be defined by the respective layout properties (e.g. either `width` or `left` and `right` must be specified).

<div><a style="text-decoration: none" href="TabFolder.html"><div class="tabris-image"><figure><div><img srcset="img/android/TabFolder.png 2x" src="img/android/TabFolder.png" alt="TabFolder on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/TabFolder.png 2x" src="img/ios/TabFolder.png" alt="TabFolder on iOS"/></div><figcaption>iOS</figcaption></figure></div>
</a></div>

## [TextInput](TextInput.html)

A widget that allows to enter text.

<div><a style="text-decoration: none" href="TextInput.html"><div class="tabris-image"><figure><div><img srcset="img/android/TextInput.png 2x" src="img/android/TextInput.png" alt="TextInput on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/TextInput.png 2x" src="img/ios/TextInput.png" alt="TextInput on iOS"/></div><figcaption>iOS</figcaption></figure></div>
</a></div>

## [TextView](TextView.html)

A widget to display a text. For images, use ImageView.

<div><a style="text-decoration: none" href="TextView.html"><div class="tabris-image"><figure><div><img srcset="img/android/TextView.png 2x" src="img/android/TextView.png" alt="TextView on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/TextView.png 2x" src="img/ios/TextView.png" alt="TextView on iOS"/></div><figcaption>iOS</figcaption></figure></div>
</a></div>

## [ToggleButton](ToggleButton.html)

A push button that "snaps in", i.e. it is selected when pressed and deselected when pressed again.

<div><a style="text-decoration: none" href="ToggleButton.html"><div class="tabris-image"><figure><div><img srcset="img/android/ToggleButton.png 2x" src="img/android/ToggleButton.png" alt="ToggleButton on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/ToggleButton.png 2x" src="img/ios/ToggleButton.png" alt="ToggleButton on iOS"/></div><figcaption>iOS</figcaption></figure></div>
</a></div>

## [Video](Video.html)

A widget that plays a video from an URL.

<div><a style="text-decoration: none" href="Video.html"><div class="tabris-image"><figure><div><img srcset="img/android/Video.png 2x" src="img/android/Video.png" alt="Video on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/Video.png 2x" src="img/ios/Video.png" alt="Video on iOS"/></div><figcaption>iOS</figcaption></figure></div>
</a></div>

## [WebView](WebView.html)

A widget that can display a web page. Since this widget requires a lot of resources it's recommended to have no more than one instance at a time.

<div><a style="text-decoration: none" href="WebView.html"><div class="tabris-image"><figure><div><img srcset="img/android/WebView.png 2x" src="img/android/WebView.png" alt="WebView on Android"/></div><figcaption>Android</figcaption></figure><figure><div><img srcset="img/ios/WebView.png 2x" src="img/ios/WebView.png" alt="WebView on iOS"/></div><figcaption>iOS</figcaption></figure></div>
</a></div>
